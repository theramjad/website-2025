"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  subtitle: string;
  items: FAQItem[];
  contactEmail: string;
  contactMessage: string;
}

export const FAQ = ({ title, subtitle, items, contactEmail, contactMessage }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <motion.div
        className="max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          {items.map((item, index) => (
            <div
              key={index}
              id={item.id}
              className="border-b border-gray-200 last:border-b-0 scroll-mt-24"
            >
              <button
                className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-gray-900 font-semibold text-lg pr-8">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div
                  className="text-gray-600 px-6 pt-2 pb-6"
                  dangerouslySetInnerHTML={{
                    __html: item.answer
                      .replace(/\n\n/g, '<br/><br/>')
                      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                      .replace(
                        /\[([^\]]+)\]\(([^)]+)\)/g,
                        '<a href="$2" class="text-emerald-600 hover:text-emerald-700 underline" target="_blank" rel="noopener noreferrer">$1</a>'
                      ),
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-gray-600">
            {contactMessage}{" "}
            <a
              className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
              href={`mailto:${contactEmail}`}
            >
              {contactEmail}
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
