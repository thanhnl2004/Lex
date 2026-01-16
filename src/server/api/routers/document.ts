import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const documentRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user.id;
      const document = await ctx.db.document.create({
        data: {
          userId,
          title: input.title,
          contentJson: { type: "doc", content: []} 
        }
      });

      return document;
    }),

  getAll: protectedProcedure
    .query(async ({ ctx }) => {
      const userId = ctx.user.id;
      const documents = await ctx.db.document.findMany({
        where: { userId },
        orderBy: { updatedAt: "desc" },
      });
      return documents;
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const userId = ctx.user.id;
      const document = await ctx.db.document.findUnique({
        where: { id: input.id, userId },
        include: {
          messages: { orderBy: { createdAt: "asc" } },
        },
      });
      return document;
    }),

  update: protectedProcedure
    .input(z.object({ id: z.string(), title: z.string().optional() }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      const userId = ctx.user.id;
      const document = await ctx.db.document.update({
        where: { id, userId },
        data,
      });
      return document;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      const userId = ctx.user.id;
      await ctx.db.document.delete({
        where: { id, userId },
      });
    }),
});