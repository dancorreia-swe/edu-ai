import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { Document } from "@langchain/core/documents";
import { OpenAIEmbeddings } from "@langchain/openai";
import { RedisVectorStore } from "@langchain/redis";
import { STATUS_CODES } from "http";
import { createClient } from "redis";
import { z } from "zod";

const MAX_FILE_SIZE = 5242880; // 5MB default size
const ACCEPTED_FILE_TYPES = ["application/pdf"];

const uploadPDFChatSchema = z.object({
  file: z
    .any()
    .refine(
      (file: File) => file.size <= MAX_FILE_SIZE,
      "File size is too large",
    )
    .refine(
      (file: File) => ACCEPTED_FILE_TYPES.includes(file.type),
      "File type is not accepted",
    ),
  key: z.string(),
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const key = formData.get("key");

    const validationResult = uploadPDFChatSchema.safeParse({ file, key });

    if (!validationResult.success) {
      return Response.json(
        { success: false, message: validationResult.error.message },
        { status: 400 },
      );
    }

    const { file: validatedFile, key: validatedKey } = validationResult.data;
    console.log(validatedKey);

    const redisClient = createClient({
      url: process.env.REDIS_URL ?? "redis://localhost:6379",
    });

    await redisClient.connect();

    const loader = new PDFLoader(validatedFile);
    const docs = await loader.load();

    await RedisVectorStore.fromDocuments(docs, new OpenAIEmbeddings(), {
      redisClient,
      indexName: validatedKey,
    });

    await redisClient.disconnect();

    return Response.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, message: STATUS_CODES[500] },
      { status: 500 },
    );
  }
}
