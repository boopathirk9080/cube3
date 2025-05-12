import React from "react";
import { motion } from "framer-motion";
import aboutBg from '../assets/events/fashion.png';

export default function AboutSection() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.section 
      className="relative min-h-[70vh] flex items-center justify-center px-4 py-16 md:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Blurred Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-gray-900"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px) brightness(0.7)',
          WebkitFilter: 'blur(8px) brightness(0.7)'
        }}
      />
      
      {/* Content Container */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto text-center"
        variants={containerVariant}
      >
        <motion.div variants={itemVariant}>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Shaping Tomorrow's Digital Ecosystems
          </h2>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed"
          variants={itemVariant}
        >
          We architect intelligent solutions at the nexus of innovation and sustainability. 
          Harnessing AI and human-centric design, we transform complex challenges into 
          seamless digital experiences that propel businesses into new dimensions of success.
        </motion.p>

        <motion.div variants={itemVariant}>
          <button className="group relative inline-flex items-center justify-center px-8 py-3.5 md:px-12 md:py-4 bg-transparent border-2 border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
            <span className="text-cyan-400 group-hover:text-white text-lg font-semibold transition-colors">
              Connect With Future
            </span>
            <div className="ml-3 relative group-hover:translate-x-2 transition-transform">
              <div className="absolute inset-0 bg-cyan-400 blur-md group-hover:blur-lg transition-all" />
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Grid Pattern */}
      <div className="absolute inset-0 z-5 opacity-20" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
    </motion.section>
  );
}