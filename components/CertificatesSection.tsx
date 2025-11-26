// components/CertificatesSection.tsx
"use client";

import { motion } from "framer-motion";
import { CertSlider } from "./CertSlider";
import { Award } from "lucide-react";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.3, delayChildren: 0.2 } 
  },
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] } 
  },
};

export function CertificatesSection() {
  return (
    <motion.section
      id="certificates"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-10 sm:py-12 lg:py-16"
    >
      <motion.div
        variants={itemVariants}
        className="relative bg-gradient-to-br from-slate-800/50 via-slate-800/40 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl hover:shadow-orange-500/10 hover:border-slate-600/50 transition-all duration-500 overflow-hidden group"
      >
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-yellow-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
        
        <div className="relative z-10">
          {/* Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center space-y-3 mb-10 sm:mb-12 lg:mb-16"
          >
            {/* Icon & Line */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "40px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-transparent to-orange-500 rounded-full"
              />
              <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-2xl backdrop-blur-sm border border-orange-500/30">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "40px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-gradient-to-l from-transparent to-orange-500 rounded-full"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Certificates & Achievements
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Professional certifications and courses I've completed to enhance my skills
            </p>
          </motion.div>

          {/* Slider Component */}
          <motion.div 
            variants={itemVariants}
            className="w-full"
          >
            <CertSlider />
          </motion.div>

          {/* Footer Info */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
          >
            <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-medium">5 Certificates</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
            <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-2">
              <span>👆</span>
              Swipe or drag to view all
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}