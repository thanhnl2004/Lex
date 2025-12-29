import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const tripRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ 
      title: z.string(), 
      destination: z.string(), 
      startDate: z.date().optional(), 
      endDate: z.date().optional(), 
      budget: z.number().optional() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user.id;
      const trip = await ctx.db.trip.create({
        data: { 
          userId, 
          ...input,
        },
      });
      return trip;
    }),

  getAll: protectedProcedure
    .query(async ({ ctx }) => {
      const userId = ctx.user.id;
      const trips = await ctx.db.trip.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
      });
      return trips;
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const userId = ctx.user.id;
      const trip = await ctx.db.trip.findUnique({
        where: { id: input.id, userId },
        include: {
          messages: { orderBy: { createdAt: "asc" } },
          plans: { orderBy: { createdAt: "asc" } },
        },
      });
      return trip;
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.number(),
      title: z.string().optional(),
      destination: z.string().optional(),
      startDate: z.date().optional(),
      endDate: z.date().optional(),
      budget: z.number().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      const userId = ctx.user.id;
      const trip = await ctx.db.trip.update({
        where: { id, userId },
        data,
      });
      return trip;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user.id;
      const trip = await ctx.db.trip.delete({
        where: { id: input.id, userId },
      });
      return trip;
    }),

});
