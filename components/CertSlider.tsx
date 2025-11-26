// components/CertSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const certificates = [
  { 
    src: "/certs/azure.png", 
    alt: "Azure Certificate", 
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2024"
  },
  { 
    src: "/certs/ds.png", 
    alt: "Data Science Certificate", 
    title: "Data Science Certificate",
    issuer: "Coursera",
    date: "2024"
  },
  { 
    src: "/certs/frontend.png", 
    alt: "Frontend Certificate", 
    title: "Frontend Development",
    issuer: "freeCodeCamp",
    date: "2024"
  },
  { 
    src: "/certs/github.png", 
    alt: "GitHub Certificate", 
    title: "GitHub Fundamentals",
    issuer: "GitHub",
    date: "2024"
  },
  { 
    src: "/certs/5.png", 
    alt: "Additional Certificate", 
    title: "Participation Certificate",
    issuer: "Tech Conference",
    date: "2024"
  }
];

export function CertSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides
        loop
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
        }}
        className="!pb-12 sm:!pb-14"
        style={{
          // @ts-ignore
          "--swiper-pagination-color": "#FB923C",
          "--swiper-pagination-bullet-inactive-color": "#475569",
          "--swiper-pagination-bullet-inactive-opacity": "0.5",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {certificates.map(({ src, alt, title, issuer, date }, index) => (
          <SwiperSlide
            key={src}
            className="!h-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-slate-700/30 to-slate-800/40 backdrop-blur-sm border border-slate-600/30 hover:border-orange-500/50 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500"
            >
              {/* Certificate Image */}
              <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden bg-slate-900/50 shadow-lg">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain p-2"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="p-3 bg-orange-500/90 rounded-full backdrop-blur-sm"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Certificate Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 sm:mt-5 space-y-2"
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                  {title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <span className="px-2 py-1 bg-slate-700/50 rounded-lg border border-slate-600/30">
                    {issuer}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{date}</span>
                </div>
              </motion.div>

              {/* Decorative corner accent */}
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-orange-500/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-orange-500/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}