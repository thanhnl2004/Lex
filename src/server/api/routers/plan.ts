import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import type { InputJsonValue } from "@prisma/client/runtime/library";

export const planRouter = createTRPCRouter({
  createDraft: protectedProcedure
    .input(z.object({
      tripId: z.number(),
      plan: z.record(z.unknown()).optional(),
      sources: z.record(z.unknown()).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user.id;
      const { tripId, plan, sources } = input;

      const trip = await ctx.db.trip.findUnique({
        where: { id: tripId, userId },
      });
      if (!trip) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Trip not found" }) as Error;
      }
      return await ctx.db.tripPlan.create({
        data: {
          tripId,
          plan: plan as unknown as InputJsonValue,
          sources: sources as InputJsonValue,
        },
      });
    }),

  listAllByTripId: protectedProcedure
    .input(z.object({ tripId: z.number() }))
    .query(async ({ ctx, input }) => {
      const plans = await ctx.db.tripPlan.findMany({
        where: { tripId: input.tripId },
        orderBy: { createdAt: "desc" },
      });
      return plans;
    }),

  getLatestByTripId: protectedProcedure
    .input(z.object({ tripId: z.number() }))
    .query(async ({ ctx, input }) => {
      const plan = await ctx.db.tripPlan.findFirst({
        where: { tripId: input.tripId },
        orderBy: { createdAt: "desc" },
      });
      return plan;
    }),

});