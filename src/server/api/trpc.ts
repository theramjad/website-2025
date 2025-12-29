/**
 * tRPC server configuration
 */
import { initTRPC } from "@trpc/server";
import superjson from "superjson";

const createInnerTRPCContext = () => {
  return {};
};

export const createTRPCContext = async () => {
  return createInnerTRPCContext();
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
