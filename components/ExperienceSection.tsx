// components/ExperienceSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] } },
};

const experienceImages = [
    "/exp/21ca5211-0f08-456c-9968-422ad960ab76.jpg",
    "/exp/e5e0eb60-f4cc-484f-8652-503ac53d89ce.jpg",
    "/exp/b3d208ba-dc1b-4759-bf5c-34bb41179470.jpg",
    "/exp/46a9582e-0a6b-4e84-8f7e-04fd1dd94ec3.jpg"
];

export function ExperienceSection() {
    return (
        <motion.section
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="py-10 sm:py-12 lg:py-16"
        >
            <motion.div
                variants={itemVariants}
                className="relative bg-gradient-to-br from-slate-800/50 via-slate-800/40 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl hover:shadow-green-500/10 hover:border-slate-600/50 transition-all duration-500 overflow-hidden group"
            >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
                
                <div className="relative z-10">
                    {/* Header */}
                    <motion.div 
                        variants={itemVariants}
                        className="text-center space-y-3 mb-10 sm:mb-12 lg:mb-16"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "40px" }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="h-1 bg-gradient-to-r from-transparent to-green-500 rounded-full"
                            />
                            <div className="p-3 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-green-500/30">
                                <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" />
                            </div>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "40px" }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="h-1 bg-gradient-to-l from-transparent to-green-500 rounded-full"
                            />
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Work Experience
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                            Professional journey and hands-on experience in the tech industry
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Images Gallery */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            {/* Grid of 4 images */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                {experienceImages.map((src, index) => (
                                    <motion.div
                                        key={src}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05, rotate: 1 }}
                                        className="group/img relative bg-slate-700/30 rounded-xl overflow-hidden shadow-lg border border-slate-600/30 hover:border-green-500/50 transition-all duration-300 h-32 sm:h-40 lg:h-48"
                                    >
                                        <Image
                                            src={src}
                                            alt={`Experience ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover/img:scale-110"
                                            loading="lazy"
                                        />
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Certificate Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ scale: 1.02 }}
                                className="group/cert relative bg-slate-700/30 rounded-xl overflow-hidden shadow-lg border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 h-64 sm:h-80 lg:h-96"
                            >
                                <Image
                                    src="/exp/รับรองฝึกงาน-1.png"
                                    alt="Internship Certificate"
                                    fill
                                    className="object-contain p-4 transition-transform duration-500 group-hover/cert:scale-105"
                                    loading="lazy"
                                />
                                {/* Label */}
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-blue-500/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-white shadow-lg">
                                    Official Certificate
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Content */}
                        <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
                            {/* Company Info */}
                            <div className="space-y-4">
                                <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                                    <span className="text-green-400 text-sm font-medium">Internship Experience</span>
                                </div>
                                
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                                    NECTEC - NSTDA
                                </h3>
                                
                                <p className="text-blue-400 text-lg sm:text-xl lg:text-2xl font-semibold">
                                    Research Assistant Intern
                                </p>

                                {/* Info Tags */}
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 rounded-lg border border-slate-600/30 text-sm text-gray-300">
                                        <Calendar className="w-4 h-4 text-blue-400" />
                                        <span>4 Months</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 rounded-lg border border-slate-600/30 text-sm text-gray-300">
                                        <MapPin className="w-4 h-4 text-green-400" />
                                        <span>Bangkok, Thailand</span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-gray-200">Key Responsibilities & Achievements:</h4>
                                <div className="space-y-3 text-gray-300 leading-relaxed text-sm sm:text-base">
                                    <div className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                                        <span className="text-green-400 mt-1 flex-shrink-0">▹</span>
                                        <p>
                                            Collaborated with the <strong className="text-blue-300">Information Security Research Team</strong> on cutting-edge cybersecurity projects and threat analysis
                                        </p>
                                    </div>
                                    <div className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                                        <span className="text-green-400 mt-1 flex-shrink-0">▹</span>
                                        <p>
                                            Developed Python-based tools using <strong className="text-purple-300">Gradio framework</strong> for efficient dataset cleaning and preprocessing workflows
                                        </p>
                                    </div>
                                    <div className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                                        <span className="text-green-400 mt-1 flex-shrink-0">▹</span>
                                        <p>
                                            Contributed to technical reports featuring <strong className="text-pink-300">GAN and Deepfake detection</strong> with comprehensive visual documentation
                                        </p>
                                    </div>
                                    <div className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                                        <span className="text-green-400 mt-1 flex-shrink-0">▹</span>
                                        <p>
                                            Enhanced problem-solving abilities, teamwork dynamics, and technical writing skills through real-world project experience
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Skills Gained */}
                            <div className="pt-4 border-t border-slate-700/50">
                                <p className="text-sm text-gray-500 mb-3">Skills & Technologies:</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Python', 'Gradio', 'Cybersecurity', 'GAN', 'Deepfake Detection', 'Data Processing', 'Technical Writing'].map((skill) => (
                                        <span 
                                            key={skill}
                                            className="px-3 py-1 text-xs font-medium bg-slate-700/50 hover:bg-slate-600/70 text-gray-300 rounded-full border border-slate-600/30 hover:border-green-500/50 transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}