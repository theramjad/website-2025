"use client";

import { motion } from "framer-motion";

interface Module {
  title: string;
  description: string;
  emoji: string;
  duration: string;
  topics: string[];
  groupWithNext?: boolean;
}

interface ContentsProps {
  heading: string;
  subheading: string;
  modules: Module[];
}

export const Contents = ({ heading, subheading, modules }: ContentsProps) => {
  return (
    <section id="contents" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-5 px-6 py-2 bg-emerald-50 rounded-full text-emerald-600 font-medium shadow-sm"
          >
            Comprehensive Curriculum
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            {heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-10">
            {modules.map((module, moduleIndex) => {
              const shouldRenderSideBySide = module.groupWithNext && modules[moduleIndex + 1];
              const isNextModuleInGroup = moduleIndex > 0 && modules[moduleIndex - 1]?.groupWithNext;

              if (isNextModuleInGroup) {
                return null;
              }

              if (shouldRenderSideBySide) {
                const firstModule = module;
                const secondModule = modules[moduleIndex + 1];

                return (
                  <motion.div
                    key={`group-${moduleIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: moduleIndex * 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch"
                  >
                    <ModuleCard module={firstModule} />
                    {secondModule && <ModuleCard module={secondModule} />}
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={moduleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: moduleIndex * 0.1 }}
                >
                  <ModuleCard module={module} fullWidth />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const ModuleCard = ({ module, fullWidth = false }: { module: Module; fullWidth?: boolean }) => (
  <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg flex flex-col h-full">
    <div className="flex flex-col flex-1">
      <div className="bg-white border-b border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
            {module.duration}
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mr-4 shadow-sm aspect-square">
            {module.emoji}
          </div>
          <div>
            <h3 className="text-2xl font-bold">{module.title}</h3>
            <p className="text-gray-600">{module.description}</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gray-50 flex-1">
        <ul className={`grid grid-cols-1 ${fullWidth ? 'md:grid-cols-2' : ''} gap-3`}>
          {module.topics.map((topic, index) => (
            <li key={index} className="flex items-start">
              <span className="text-emerald-500 mr-3">✓</span>
              <span className="text-gray-700">{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
