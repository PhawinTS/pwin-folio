// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Sparkles } from "lucide-react";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] },
  },
};

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative min-h-screen flex items-center justify-center py-10 sm:py-16 lg:py-20"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        {/* Hello Badge */}
        <motion.div 
          variants={itemVariants}
          className="mb-6 sm:mb-8 inline-block"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-sm sm:text-base text-gray-300 shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              👋
            </motion.div>
            <span>Hello, I'm</span>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8 lg:mb-12">
          <div className="relative inline-block">
            {/* Animated ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.5), transparent, rgba(168, 85, 247, 0.5), transparent)",
              }}
            />
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-60 lg:h-60 rounded-full mx-auto shadow-2xl border-4 border-slate-800 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 p-1 overflow-hidden"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                <Image
                  src="/certs/2145eb79-23c9-4b75-8fc9-0c5912d9b3a6.jfif"
                  alt="Phawin Thongsen"
                  fill
                  className="rounded-full object-cover scale-105"
                  priority
                />
              </div>
            </motion.div>

            {/* Glow effect */}
            <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-full blur-2xl opacity-50 -z-10" />
            
            {/* Sparkle decoration */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8 space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Phawin Thongsen
          </h1>
          
          <div className="space-y-2 sm:space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light"
            >
              Full Stack Developer
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base text-gray-500"
            >
              <span>Building</span>
              <motion.span
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="px-3 py-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-lg font-medium text-gray-300"
                style={{ backgroundSize: "200% 200%" }}
              >
                modern web experiences
              </motion.span>
              <span>with passion</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8 sm:mb-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-full text-sm text-green-400">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
            <span>Available for opportunities</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-xs sm:text-sm text-gray-500">Scroll to explore</p>
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full hover:border-blue-500/50 transition-colors cursor-pointer"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}