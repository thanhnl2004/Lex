import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import type { InputJsonValue } from "@prisma/client/runtime/library";
import type { TripPlanData } from "@/lib/types/plan";

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
          plan: plan as InputJsonValue,
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

  updateActivity: protectedProcedure
    .input(z.object({
      planId: z.number(),
      day: z.number(),
      activityId: z.number(),
      updates: z.object({
        time: z.string().optional(),
        title: z.string().optional(),
        location: z.string().optional(),
        notes: z.string().optional(),
      }),
    }))
    .mutation(async ({ ctx, input }) => {
      const { planId, day, activityId, updates } = input;
      const planRecord = await ctx.db.tripPlan.findUnique({
        where: { id: planId },
        include: { trip: true }
      });
      if (!planRecord) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Plan not found" }) as Error;
      }

      if (planRecord.trip.userId !== ctx.user.id) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Unauthorized" }) as Error;
      }

      // parse JSON plan
      const plan = planRecord.plan as unknown as TripPlanData;

      const dayPlan = plan.itinerary.find((d) => d.day === day);

      if (!dayPlan) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Day not found" }) as Error;
      }

      const activity = dayPlan.activities.find((a) => a.id === activityId);
      if (!activity) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Activity not found" }) as Error;
      }
      
    
    })

});