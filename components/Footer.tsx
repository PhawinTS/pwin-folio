// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Heart, Code, Sparkles } from "lucide-react";
import type { Variants } from "framer-motion";

const footerVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] } },
};

const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: { 
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.3 
    } 
  },
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={footerVariants}
          className="relative py-8 sm:py-12 text-center overflow-hidden"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"
              />
              <motion.div
                variants={iconVariants}
                className="p-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"
              />
            </div>

            {/* Main content */}
            <div className="space-y-3">
              <motion.p 
                variants={footerVariants}
                className="text-gray-400 text-sm sm:text-base flex items-center justify-center gap-2 flex-wrap"
              >
                <span>© {currentYear} Phawin Thongsen</span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="flex items-center gap-1.5">
                  Built with 
                  <motion.span
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  </motion.span>
                  and
                  <Code className="w-4 h-4 text-blue-400" />
                </span>
              </motion.p>

              <motion.div
                variants={footerVariants}
                className="flex items-center justify-center gap-2 flex-wrap text-xs sm:text-sm text-gray-500"
              >
                <span className="px-2 py-1 bg-slate-800/50 rounded-md border border-slate-700/30 hover:border-slate-600/50 transition-colors">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-slate-800/50 rounded-md border border-slate-700/30 hover:border-slate-600/50 transition-colors">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-slate-800/50 rounded-md border border-slate-700/30 hover:border-slate-600/50 transition-colors">
                  Tailwind CSS
                </span>
                <span className="px-2 py-1 bg-slate-800/50 rounded-md border border-slate-700/30 hover:border-slate-600/50 transition-colors">
                  Framer Motion
                </span>
              </motion.div>
            </div>

            {/* Decorative bottom element */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
            />

            {/* Made with love text */}
            <motion.p
              variants={footerVariants}
              className="text-xs text-gray-600 italic"
            >
              Designed & Crafted with passion ✨
            </motion.p>
          </div>
        </motion.footer>
    );
}