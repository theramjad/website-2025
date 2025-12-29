import { stripeServer } from "@/lib/stripe";
import { env } from "@/env/server.mjs";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import type Stripe from "stripe";

export const checkoutRouter = createTRPCRouter({
  createCheckoutSession: publicProcedure
    .input(
      z.object({
        successUrl: z.string(),
        cancelUrl: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const productId = env.STRIPE_PRODUCT_ID_AI_STARTUP_SCHOOL;
        const product = await stripeServer.products.retrieve(productId, {
          expand: ["default_price"],
        });
        const priceId = (product.default_price as Stripe.Price).id;

        const session = await stripeServer.checkout.sessions.create({
          mode: "payment",
          line_items: [
            {
              price: priceId,
              quantity: 1,
            },
          ],
          success_url: input.successUrl,
          cancel_url: input.cancelUrl,
          allow_promotion_codes: true,
        });

        return { url: session.url };
      } catch (error) {
        console.error("Error creating Stripe checkout:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create checkout session",
        });
      }
    }),
});
