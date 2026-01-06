import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import type { InputJsonValue } from "@prisma/client/runtime/library";
import type { TripPlanData } from "@/lib/types/plan";

export const activityRouter = createTRPCRouter({
  update: protectedProcedure
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

      Object.assign(activity, updates);

      const updatedPlan = await ctx.db.tripPlan.update({
        where: { id: planId },
        data: {
          plan: plan as unknown as InputJsonValue,
        },
      });

      return updatedPlan;
    }),

  delete: protectedProcedure
    .input(z.object({
      planId: z.number(),
      day: z.number(),
      activityId: z.number(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { planId, day, activityId } = input;
      const planRecord = await ctx.db.tripPlan.findUnique({
        where: { id: planId },
        include: { trip: true }
      });


      if (!planRecord || planRecord.trip.userId !== ctx.user.id) {
        throw new TRPCError({ code: "NOT_FOUND"});
      }

      const plan = planRecord.plan as unknown as TripPlanData;
      const dayPlan = plan.itinerary.find((d) => d.day === day);
      if (!dayPlan) {
        throw new TRPCError({ code: "NOT_FOUND"});
      }

      dayPlan.activities = dayPlan.activities.filter((a) => a.id !== activityId);

      await ctx.db.tripPlan.update({
        where: { id: planId },
        data: {
          plan: plan as unknown as InputJsonValue,
        },
      });

      return { success: true };
    }),
});