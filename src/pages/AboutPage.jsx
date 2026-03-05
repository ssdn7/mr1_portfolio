import React from "react";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    
    <section className="min-h-[60vh] bg-gray-50 dark:bg-black px-6 sm:px-10 lg:px-20 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto pt-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Professional Profile
          </h2>
          <div className="w-20 h-1 bg-gray-800 dark:bg-gray-300 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Background & Focus
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-justify">
              I am strongly oriented toward mathematics and engineering
              disciplines, with a deep interest in analytical reasoning,
              structured problem-solving, and system optimization.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              My objective is to apply theoretical foundations to practical,
              scalable systems while maintaining precision, clarity, and
              technical discipline.
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -6 }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Core Competencies
            </h3>

            <ul className="space-y-4 text-gray-800 dark:text-gray-300">
              {[
                "Mathematical Analysis",
                "Engineering Fundamentals",
                "System Modeling & Optimization",
                "Critical & Analytical Thinking",
                "Data Interpretation",
                "Technical Documentation & Research",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="border-b pb-2 border-gray-200 dark:border-gray-700 tap-pop active:scale-95"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
    
  );
}

export default AboutPage;