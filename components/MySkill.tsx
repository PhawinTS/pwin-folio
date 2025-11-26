"use client";

import { motion, Variants } from "framer-motion";
import { DiHtml5, DiJsBadge, DiPython } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io5";
import { SiTypescript, SiTailwindcss, SiFigma, SiExpress, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { TbSql } from "react-icons/tb";

interface Skill {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
}

interface SkillCategory {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] } },
};

const skills: SkillCategory = {
  frontend: [
    { icon: DiHtml5, label: "HTML", color: "text-orange-500" },
    { icon: IoLogoCss3, label: "CSS", color: "text-blue-500" },
    { icon: DiJsBadge, label: "JavaScript", color: "text-yellow-400" },
    { icon: SiTypescript, label: "TypeScript", color: "text-blue-400" },
    { icon: FaReact, label: "React", color: "text-cyan-400" },
    { icon: SiNextdotjs, label: "Next.js", color: "text-white" },
    { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-teal-400" },
    { icon: DiPython, label: "Python", color: "text-green-400" },
  ],
  backend: [
    { icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
    { icon: SiExpress, label: "Express.js", color: "text-gray-400" },
  ],
  tools: [
    { icon: TbSql, label: "SQL", color: "text-blue-500" },
    { icon: SiPostgresql, label: "PostgreSQL", color: "text-sky-400" },
    { icon: FaGithub, label: "GitHub", color: "text-gray-400" },
    { icon: SiFigma, label: "Figma", color: "text-pink-400" },
  ],
};

export function MySkill() {
    return (
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-12 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl hover:bg-slate-800/60 transition-all duration-500"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 lg:mb-16 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            >
              My Skills
            </motion.h2>
      
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="bg-slate-700/20 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-5 sm:p-6 lg:p-8 h-full hover:bg-slate-700/50 hover:border-slate-500/50 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between">
                    <h3 className="text-xl lg:text-2xl font-bold mb-5 text-center capitalize bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      {category === "tools" ? "Database & Tools" : category}
                    </h3>
                    <div className="space-y-3">
                      {skillList.map(({ icon: Icon, label, color }: Skill, index: number) => (
                        <motion.div
                          key={label}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                          whileHover={{ scale: 1.1, x: 8 }}
                          className={`flex items-center gap-4 ${color} text-base lg:text-lg font-medium cursor-pointer group-hover:translate-x-2 transition-transform duration-300`}
                        >
                          <Icon className="text-2xl lg:text-3xl" />
                          <span>{label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      );      
}
