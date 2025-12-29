import Stripe from "stripe";
import { env } from "@/env/server.mjs";

export const stripeServer = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-12-18.acacia",
  typescript: true,
});
