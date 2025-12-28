"use client";

import { motion } from "framer-motion";

interface FinalCTAProps {
  heading: string;
  productName: string;
  price: number;
  ctaText: string;
  onCtaClick?: () => void;
}

export const FinalCTA = ({ heading, productName, price, ctaText, onCtaClick }: FinalCTAProps) => {
  return (
    <section className="py-24 bg-emerald-900 overflow-hidden relative">
      {/* Background Animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-600 to-emerald-800 blur-3xl"
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {heading}
            </h2>

            <div className="text-emerald-200 text-xl mb-8 space-y-4">
              <p>
                Get instant access to the complete {productName} curriculum.
              </p>
            </div>

            {/* Price Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 inline-block"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="text-5xl font-bold">
                  ${price}
                </div>
              </div>
              <div className="text-emerald-200 mt-2">
                One-time payment, lifetime access
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div className="space-y-6">
              <motion.button
                onClick={onCtaClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-900 rounded-xl py-6 px-12 text-xl font-semibold shadow-xl hover:shadow-emerald-500/20 transition-all duration-200 w-full md:w-auto"
              >
                {ctaText}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
