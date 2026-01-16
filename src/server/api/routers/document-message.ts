import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import type { Role } from "generated/prisma";
import type { InputJsonValue } from "@prisma/client/runtime/library";

export const documentMessageRouter = createTRPCRouter({
  append: protectedProcedure
    .input(z.object({
      documentId: z.string(),
      content: z.string(),
      role: z.enum(["USER", "ASSISTANT", "SYSTEM", "TOOL"]),
      partsJson: z.record(z.unknown()).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { documentId, content, role, partsJson } = input;
      const userId = ctx.user.id;

      const document = await ctx.db.document.findUnique({
        where: { id: documentId, userId },
      });
      
      if (!document) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Document not found" });
      }

      return await ctx.db.documentMessage.create({
        data: {
          documentId,
          content,
          role: role as Role,
          partsJson: partsJson as InputJsonValue,
        },
      });
    }),

  listAllByDocumentId: protectedProcedure
    .input(z.object({ documentId: z.string() }))
    .query(async ({ ctx, input }) => {
      const userId = ctx.user.id;

      const document = await ctx.db.document.findUnique({
        where: { id: input.documentId, userId },
      });
      if (!document) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Document not found" });
      }

      const messages = await ctx.db.documentMessage.findMany({
        where: { documentId: input.documentId },
        orderBy: { createdAt: "asc" },
      });
      return messages;
    }),
});