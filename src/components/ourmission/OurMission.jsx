import React from "react";
import { motion } from "framer-motion";
import mission from '../assets/missionvision/mission.jpg';
import vision from '../assets/missionvision/vision.jpg';

export default function MissionSection() {
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { delay: 0.4, duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <div className="space-y-12 py-12 px-4 md:px-8">
      {/* Vision Section */}
      <motion.section
        className="relative w-full max-w-6xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-3xl flex flex-col md:flex-row items-center py-8 px-4 md:py-12 md:px-8 overflow-hidden gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image Block - Now 80% width on desktop */}
        <motion.div
          variants={imageVariant}
          className="w-full md:w-[400px] h-64 md:h-[400px] bg-gray-300 dark:bg-gray-700 rounded-2xl flex-shrink-0 overflow-hidden shadow-lg order-1 md:order-none"
        >
          <img
            src={mission}
            alt="Our Vision Illustration"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Text Block */}
        <motion.div
          variants={textVariant}
          className="flex-1 md:pr-6 text-center md:text-left order-0 md:order-none"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Our Mission

          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            We strive to ignite positive change by fostering innovation, collaboration,
            and sustainable growth. Through community-driven initiatives and cutting-edge
            solutions, we empower individuals and organizations to achieve lasting impact.


          </p>

          {/* Vision Quote */}
          <blockquote className="mt-6 border-l-4 border-[#ef4949]  pl-4 italic text-gray-600 dark:text-gray-400">
            "True innovation measures success not by profits alone, but by the lives it transforms
            and the future it preserves for generations to come."

          </blockquote>

          {/* Mobile-only text */}
          <p className="block md:hidden mt-4 text-sm text-gray-500 dark:text-gray-400">
            Mobile view - Content optimized for smaller screens
          </p>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="relative w-full max-w-6xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-3xl flex flex-col md:flex-row items-center py-8 px-4 md:py-12 md:px-8 overflow-hidden gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Text Block */}
        <motion.div
          variants={textVariant}
          className="flex-1 md:pr-6 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            We envision a future where technology and humanity coexist harmoniously,
            creating equitable opportunities for all. By bridging the gap between potential
            and achievement, we aim to build a world where innovation serves as a catalyst
            for global prosperity.
          </p>

          {/* Mission Quote */}
          <blockquote className="mt-6 border-l-4 border-[#ef4949] pl-4 italic text-gray-600 dark:text-gray-400">
            "The vision worth pursuing is one that sees beyond horizons,
            transforming today's dreams into tomorrow's reality through collective effort."
          </blockquote>
        </motion.div>

        {/* Image Block - Now 80% width on desktop */}
        <motion.div
          variants={imageVariant}
          className="w-full md:w-[400px] h-64 md:h-[400px] bg-gray-300 dark:bg-gray-700 rounded-2xl flex-shrink-0 overflow-hidden shadow-lg"
        >
          <img
            src={vision}
            alt="Our Mission Illustration"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </motion.section>

    </div>
  );
}