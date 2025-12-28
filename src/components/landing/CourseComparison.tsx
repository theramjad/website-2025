"use client";

import { motion } from "framer-motion";

interface ComparisonProps {
  left: {
    title: string;
    problems: string[];
  };
  right: {
    title: string;
    benefits: string[];
  };
  ctaText: string;
  onCtaClick?: () => void;
}

export const CourseComparison = ({ left, right, ctaText, onCtaClick }: ComparisonProps) => {
  return (
    <section className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-6 py-2 bg-emerald-50 rounded-full text-emerald-600 font-medium"
          >
            Structured Learning Path
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Why Join?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get comprehensive, up-to-date training that&apos;s organized and structured for maximum learning efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Column - Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-xl border border-red-200 shadow-lg relative"
          >
            <div className="absolute top-5 right-5 bg-red-500 rounded-full p-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">{left.title}</h3>
            <ul className="space-y-4">
              {left.problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-red-500">•</span>
                  <p className="text-gray-700">{problem}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-xl border border-emerald-200 shadow-lg relative"
          >
            <div className="absolute top-5 right-5 bg-emerald-500 rounded-full p-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L19 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">{right.title}</h3>
            <ul className="space-y-4">
              {right.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-emerald-500">•</span>
                  <p className="text-gray-700">{benefit}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Button Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            onClick={onCtaClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white rounded-full py-6 px-12 text-xl font-semibold shadow-xl hover:shadow-emerald-500/20 transition-all duration-200"
          >
            {ctaText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
