import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { tripRouter } from "./routers/trip";
import { planRouter } from "./routers/plan";
import { messageRouter } from "./routers/message";
import { activityRouter } from "./routers/activity";
import { documentRouter } from "./routers/document";
import { documentMessageRouter } from "./routers/document-message";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  trip: tripRouter,
  plan: planRouter,
  message: messageRouter,
  activity: activityRouter,
  document: documentRouter,
  documentMessage: documentMessageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
