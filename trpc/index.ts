import { loadSummarizationChain } from "langchain/chains";
import { PromptTemplate } from "@langchain/core/prompts";
import { publicProcedure, router } from "./trpc";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";

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
      const chain = promptTemplate.pipe(llmSummary);

      const summary = await chain.invoke({ text: input.text });

      return { content: summary.content };
    }),
});

export type AppRouter = typeof appRouter;
