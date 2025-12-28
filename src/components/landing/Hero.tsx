"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { BunnyCDNVideo } from "@/components/BunnyCDNVideo";

interface HeroProps {
  title: string;
  highlight: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
  video?: {
    libraryId: string;
    streamId: string;
  };
}

export const Hero = ({ title, highlight, subtitle, ctaText, onCtaClick, video }: HeroProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const titleParts = useMemo(() => {
    const highlightIndex = title.indexOf(highlight);
    if (highlightIndex === -1) {
      return { before: title, highlight: null, after: "" };
    }
    return {
      before: title.substring(0, highlightIndex),
      highlight: highlight,
      after: title.substring(highlightIndex + highlight.length)
    };
  }, [title, highlight]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-20">
      {/* Background Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-emerald-200/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
          className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-emerald-300/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
          className="absolute bottom-0 left-1/3 h-[600px] w-[600px] rounded-full bg-emerald-100/30 blur-3xl"
        />
      </motion.div>

      <div className="relative">
        <div className={`flex ${video ? 'min-h-0' : 'min-h-[90vh]'} flex-col items-center justify-center px-4 ${video ? 'py-16' : 'py-32'}`}>
          <div className="mx-auto max-w-7xl text-center">
            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mb-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
            >
              {titleParts.before}
              {titleParts.highlight && (
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600 bg-[length:200%_auto] bg-clip-text text-transparent"
                >
                  {titleParts.highlight}
                </motion.span>
              )}
              {titleParts.after}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mx-auto mb-8 max-w-3xl text-center text-xl text-gray-600"
            >
              {subtitle}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex justify-center space-x-4"
            >
              <motion.button
                onClick={onCtaClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-full bg-emerald-600 px-10 py-4 text-lg font-semibold text-white shadow-xl transition-colors hover:bg-emerald-500 hover:shadow-emerald-200"
              >
                {ctaText}
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Video */}
        {video && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-6 pb-16 max-w-4xl mx-auto px-4"
          >
            <BunnyCDNVideo
              libraryId={video.libraryId}
              streamId={video.streamId}
              className="w-full h-auto rounded-2xl shadow-2xl overflow-hidden"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};
