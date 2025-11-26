// components/AboutMeCard.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import type { Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] } },
};

export function AboutMeCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("thon.pwin@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="relative bg-gradient-to-br from-slate-800/50 via-slate-800/40 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl hover:shadow-blue-500/10 hover:border-slate-600/50 transition-all duration-500 mb-8 sm:mb-12 overflow-hidden group"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
        {/* About Text */}
        <div className="lg:col-span-3 space-y-6">
          <div className="space-y-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          
          <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p className="hover:text-gray-200 transition-colors duration-300">
              My name is <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Phawin Thongsen</span>, and I am passionate about becoming a <span className="text-purple-400 font-medium">Fullstack Developer</span>. I am ready to learn new programming languages and technologies. I perform well in challenging environments and can adapt to working both independently and as part of a team.
            </p>
            
            <div className="flex items-start gap-3 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300">
              <span className="text-2xl sm:text-3xl flex-shrink-0 mt-1">🎓</span>
              <div className="space-y-1">
                <p className="text-sm sm:text-base text-gray-400">
                  Graduated from
                </p>
                <p className="text-base sm:text-lg font-semibold text-blue-300">
                  Bangkok University
                </p>
                <p className="text-sm text-gray-500">
                  Bachelor of Information Technology and Innovation (Computer Science)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Connect With Me
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            <motion.a
              whileHover={{ scale: 1.03, x: 5 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/PhawinTS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3.5 bg-slate-700/50 hover:bg-slate-600/70 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-600/30 hover:border-slate-500/50 group"
            >
              <FaGithub className="text-2xl text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">GitHub</span>
                <span className="text-xs text-gray-500">@PhawinTS</span>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, x: 5 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.linkedin.com/in/phawin-thongsen-7b4a2126a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3.5 bg-blue-600/40 hover:bg-blue-500/60 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-500/30 hover:border-blue-400/50 group"
            >
              <FaLinkedin className="text-2xl text-blue-300 group-hover:text-white transition-colors flex-shrink-0" />
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">LinkedIn</span>
                <span className="text-xs text-blue-200/70">Professional Profile</span>
              </div>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.03, x: 5 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCopy}
              className="flex items-center gap-3 px-5 py-3.5 bg-green-600/40 hover:bg-green-500/60 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-green-500/30 hover:border-green-400/50 group"
            >
              <MdEmail className="text-2xl text-green-300 group-hover:text-white transition-colors flex-shrink-0" />
              <div className="flex flex-col items-start overflow-hidden">
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  {copied ? "✓ Copied!" : "Email"}
                </span>
                <span className="text-xs text-green-200/70 truncate max-w-full">
                  thon.pwin@gmail.com
                </span>
              </div>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03, x: 5 }}
              whileTap={{ scale: 0.97 }}
              href="/resume/Resume-Eng-Web-Dev.pdf"
              download
              className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 hover:from-purple-500/60 hover:to-pink-500/60 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-purple-500/30 hover:border-pink-400/50 group"
            >
              <FaDownload className="text-2xl text-purple-300 group-hover:text-white transition-colors flex-shrink-0" />
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">Download Resume</span>
                <span className="text-xs text-purple-200/70">PDF Format</span>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}