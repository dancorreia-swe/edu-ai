import { publicProcedure, router } from "./trpc";
import { z } from "zod";

export const appRouter = router({
  generateQA: publicProcedure
    .input(
      z.object({
        topic: z.string(),
      }),
    )
    .mutation((options) => {
      return {
        topic: options.input.topic,
      };
    }),
});

export type AppRouter = typeof appRouter;
