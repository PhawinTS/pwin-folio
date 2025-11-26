// ไฟล์: app/page.tsx
"use client";
import { Navbar } from "../../components/Navbar"
import { MySkill } from "../../components/MySkill";
import { MyProjects } from "../../components/Projects";
import { HeroSection } from "../../components/HeroSection";
import { Footer } from "../../components/Footer";
import { ExperienceSection } from "../../components/ExperienceSection";
import { AboutMeCard } from "../../components/AboutMeCard";
import { AnimatedBackground } from "../../components/AnimatedBackground";
import { CertificatesSection } from "../../components/CertificatesSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen relative overflow-x-hidden">
      <Navbar />
      <AnimatedBackground  />

      {/* Main Content with improved spacing and animations */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="space-y-16 sm:space-y-20 lg:space-y-24"
        >
          {/* Hero Section */}
          <motion.section
            id="home"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <HeroSection />
          </motion.section>

          {/* About Section */}
          <motion.section
            id="about"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="scroll-mt-20"
          >
            <AboutMeCard />
          </motion.section>

          {/* Skills Section */}
          <motion.section
            id="skills"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="scroll-mt-20"
          >
            <MySkill />
          </motion.section>

          {/* Projects Section */}
          <motion.section
            id="projects"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="scroll-mt-20"
          >
            <MyProjects />
          </motion.section>

          {/* Experience Section */}
          <motion.section
            id="experience"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="scroll-mt-20"
          >
            <ExperienceSection />
          </motion.section>

          {/* Certificates Section */}
          <motion.section
            id="certificates"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="scroll-mt-20"
          >
            <CertificatesSection />
          </motion.section>
        </motion.div>

        {/* Divider before footer */}
        <div className="mt-20 sm:mt-24 lg:mt-28 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        {/* Footer */}
        <Footer />
      </main>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group hidden lg:block"
        aria-label="Scroll to top"
      >
        <svg 
          className="w-6 h-6 text-white group-hover:translate-y-[-2px] transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
}