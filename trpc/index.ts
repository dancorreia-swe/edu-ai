import { createClient } from "redis";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { publicProcedure, router } from "./trpc";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { RedisVectorStore } from "@langchain/redis";
import { z } from "zod";

const MAX_FILE_SIZE = 50000000;
const ACCEPTED_FILE_TYPES = ["application/pdf"];

export const appRouter = router({
  summarize: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;

      const llmSummary = new ChatOpenAI({
        temperature: 0.8,
      });

      const summaryTemplate = `
You are an expert in summarizing educational texts.
Your goal is to create a summary of topics about the subject.
Below you find the subject and text to summarize:
--------
{text}
--------
`;

      const promptTemplate = PromptTemplate.fromTemplate(summaryTemplate);
      const chain = promptTemplate
        .pipe(llmSummary)
        .pipe(new StringOutputParser());

      const summary = await chain.invoke({ text: input.text });

      return { content: summary };
    }),
  generateQA: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;

      const llmQA = new ChatOpenAI({
        temperature: 0.7,
      });

      const questionTemplate = `
    You are an expert in making questions about educational texts.
    Your goal is to ONLY create 10 questions about the subject.
    Make the questions in Portuguese OR English BASED ON the language of the subject.
    Below you find the subject to create questions:
    ----------------
    {text}
    ----------------
    `;

      const promptTemplate = PromptTemplate.fromTemplate(questionTemplate);
      const chain = promptTemplate.pipe(llmQA).pipe(new StringOutputParser());

      const chainResult = await chain.invoke({ text: input.text });

      const answersPrompt = ChatPromptTemplate.fromTemplate(`
    You are an expert in answering questions about educational texts.
    Your goal is to answer the questions presented.
    Make the answers in Portuguese OR English BASED ON the language of the questions.
    Below you find the questions to answer:
    ----------------
    {questions}
    ----------------
    `);

      const composedChain = RunnableSequence.from([
        () => ({ questions: chainResult }),
        answersPrompt,
        llmQA,
        new StringOutputParser(),
      ]);

      const result = await composedChain.invoke({ text: input.text });

      return { questions: chainResult, answers: result };
    }),
  chatWithAI: publicProcedure
    .input(z.object({ prompt: z.string(), key: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;

      const redisClient = createClient({
        url: process.env.REDIS_URL ?? "redis://localhost:6379",
      });
      await redisClient.connect();

      const model = new ChatOpenAI();
      const questionAnsweringPrompt = ChatPromptTemplate.fromMessages([
        [
          "system",
          "Answer the user's questions based on the below context:\n\n{context}",
        ],
        ["human", "{input}"],
      ]);

      const combineDocsChain = await createStuffDocumentsChain({
        llm: model,
        prompt: questionAnsweringPrompt,
      });

      const vectorStore = new RedisVectorStore(new OpenAIEmbeddings(), {
        redisClient,
        indexName: input.key,
      });

      const chain = await createRetrievalChain({
        retriever: vectorStore.asRetriever(),
        combineDocsChain,
      });

      const result = await chain.invoke({ input: input.prompt });

      await redisClient.disconnect();

      return result;
    }),
});

export type AppRouter = typeof appRouter;
