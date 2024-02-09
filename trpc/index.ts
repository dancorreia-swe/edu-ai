import { publicProcedure, router } from "./trpc";
import { OpenAI } from "@langchain/openai";
import { z } from "zod";

export const appRouter = router({});

export type AppRouter = typeof appRouter;
