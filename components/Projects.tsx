"use client";

import { motion, Variants } from "framer-motion";

interface Project {
  title: string;
  description: string;
  responsibilities?: string;
  techStack?: string[];
  liveUrl: string;
  githubUrl: string;
  gradientColors: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] } },
};

const projects: Project[] = [
  {
    title: "Mini project BU Open House",
    description: "Promotional website for Bangkok University's Open House event.",
    responsibilities: "Sponsors, Gallery, Schedule, Map page",
    liveUrl: "https://phawints.github.io/miniproj-bu-open-house/",
    githubUrl: "https://github.com/PhawinTS/miniproj-bu-open-house",
    gradientColors: "from-blue-500 to-cyan-600",
  },
  {
    title: "Realtime Patient System",
    description: "Patient-management UI with Next.js + TypeScript + TailwindCSS. Simulates real-time updates using MockSocket.",
    techStack: [
      "Next.js – Frontend framework",
      "TypeScript – Type-safety and reliable logic",
      "TailwindCSS – Responsive utility-based styling",
      "MockSocket – Simulates real-time data updates",
    ],
    liveUrl: "https://agnos-realtime-patient-system.vercel.app/",
    githubUrl: "https://github.com/PhawinTS/agnos-realtime-patient-system",
    gradientColors: "from-purple-500 to-pink-600",
  },
];

export function MyProjects() {
  return (
    <motion.section 
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-10 lg:py-20 w-full"
    >
      <motion.div
        variants={itemVariants}
        className="max-w-7xl mx-auto space-y-12 lg:space-y-16"
      >
        {/* Section Title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className={`relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl hover:shadow-blue-500/20 hover:border-slate-600/50 transition-all duration-500 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
              index % 2 !== 0 ? "lg:grid-flow-dense" : ""
            }`}
          >
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

            {/* Project Info */}
            <div className={`space-y-4 ${index % 2 === 0 ? "order-2 lg:order-1" : ""}`}>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base">{project.description}</p>
              {project.responsibilities && <p className="text-sm text-gray-400 italic">{project.responsibilities}</p>}
              {project.techStack && (
                <div className="text-sm text-gray-400 italic space-y-1">
                  <span className="block font-semibold text-gray-300">Tech Stack:</span>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="block">{tech}</span>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-3 pt-4">
                <motion.a
                  whileHover={{ scale: 1.03, x: 5 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 bg-gradient-to-r ${project.gradientColors} hover:shadow-lg rounded-lg transition-all duration-300 font-medium text-sm text-white`}
                >
                  Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03, x: 5 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:shadow-lg rounded-lg transition-all duration-300 font-medium text-sm text-white"
                >
                  GitHub
                </motion.a>
              </div>
            </div>

            {/* Project Preview */}
            <motion.div
              className={index % 2 === 0 ? "order-1 lg:order-2" : ""}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <div className="bg-slate-700/30 rounded-2xl overflow-hidden shadow-xl border border-slate-600/30">
                <iframe
                  src={project.liveUrl}
                  title={project.title}
                  className="w-full h-64 sm:h-80 lg:h-96"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
