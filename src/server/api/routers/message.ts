import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import type { Role } from "generated/prisma";

export const messageRouter = createTRPCRouter({
  append: protectedProcedure
    .input(z.object({
      tripId: z.number(),
      content: z.string(),
      role: z.enum(["user", "assistant"]),
    }))
    .mutation(async ({ ctx, input }) => {
      const { tripId, content, role } = input;
      return await ctx.db.tripMessage.create({
        data: {
          tripId,
          content,
          role: role as Role,
        },
      });
    }),

  listAllByTripId: protectedProcedure
    .input(z.object({ tripId: z.number() }))
    .query(async ({ ctx, input }) => {
      const messages = await ctx.db.tripMessage.findMany({
        where: { tripId: input.tripId },
        orderBy: { createdAt: "desc" },
      });
      return messages;
    }),
});