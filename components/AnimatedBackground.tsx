// components/AnimatedBackground.tsx
"use client";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Gradient Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900" />

      {/* Top Right Circle - Purple to Blue */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1], 
          rotate: [0, 180, 360],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 sm:-top-40 sm:-right-40 lg:-top-48 lg:-right-48 w-64 h-64 sm:w-80 sm:h-80 lg:w-[32rem] lg:h-[32rem] bg-gradient-to-br from-purple-600/25 via-purple-500/20 to-blue-600/25 rounded-full blur-3xl"
      />

      {/* Top Left Circle - Pink accent */}
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          rotate: [0, -90, 0],
          x: [0, -20, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-pink-500/15 to-purple-600/20 rounded-full blur-3xl"
      />

      {/* Middle Left Circle - Cyan to Purple */}
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2], 
          rotate: [360, 180, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 sm:top-1/2 -left-24 sm:-left-40 lg:-left-48 w-64 h-64 sm:w-80 sm:h-80 lg:w-[32rem] lg:h-[32rem] bg-gradient-to-br from-cyan-600/25 via-cyan-500/20 to-purple-600/25 rounded-full blur-3xl"
      />

      {/* Middle Right Circle - Blue accent */}
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
          rotate: [0, 120, 240, 360],
          x: [0, -30, 0]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -right-16 sm:-right-24 lg:-right-32 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/15 rounded-full blur-3xl"
      />

      {/* Bottom Right Circle - Blue to Cyan */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1], 
          rotate: [0, -180, -360],
          x: [0, -40, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 right-1/4 sm:-bottom-40 sm:right-1/3 lg:-bottom-48 lg:right-1/3 w-64 h-64 sm:w-80 sm:h-80 lg:w-[32rem] lg:h-[32rem] bg-gradient-to-br from-blue-600/25 via-blue-500/20 to-cyan-600/25 rounded-full blur-3xl"
      />

      {/* Bottom Left Circle - Purple accent */}
      <motion.div
        animate={{ 
          scale: [1.1, 1.25, 1.1],
          rotate: [0, 90, 180],
          x: [0, 25, 0]
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 left-1/4 sm:-bottom-32 sm:left-1/4 lg:-bottom-40 lg:left-1/5 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-600/20 to-pink-500/15 rounded-full blur-3xl"
      />

      {/* Center Floating Orbs - Subtle depth */}
      <motion.div
        animate={{ 
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ 
          x: [0, -40, 60, 0],
          y: [0, 50, -20, 0],
          scale: [1, 0.9, 1.15, 1]
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-2/3 transform -translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
      />

      {/* Noise texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-soft-light">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat'
        }} />
      </div>
    </div>
  );
}