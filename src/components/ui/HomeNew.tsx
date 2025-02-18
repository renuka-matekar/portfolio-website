"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio-data";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation */}
      {/* <nav className="absolute top-0 left-0 right-0 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            <span className="text-blue-500">Arnav</span>{" "}
            <span className="text-purple-500">Jain</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex space-x-6 text-gray-300"
          >
            {["About", "Education", "Certifications", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        </div>
      </nav> */}

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 pt-32 lg:pt-40 pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Hi, I&apos;m </span>
              {/* <div class="bg-[#000000] min-h-screen text-[#ffffff]">
  <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 inline-block text-transparent bg-clip-text">
    Arnav Jain
  </h1>
</div> */}
              <span className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 inline-block text-transparent bg-clip-text">{personalInfo.fname} {personalInfo.lname}</span>
              {/* <span className="text-blue-500">{personalInfo.fname}</span>{" "}
              <span className="text-purple-500">{personalInfo.lname}</span> */}
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4" style={{ opacity: 1 }}>
            Data & Business Intelligence Enthusiast
            </h3>
            <p className="text-lg text-white max-w-xl" style={{ opacity: 1 }}>
            Aligning business goals with technology, extracting insights, improving decision-making, and fostering innovation.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden bg-zinc-900/90 backdrop-blur-sm border border-zinc-800">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4855.jpg-hWpEVVo51gnwazECKM29WZ8CnR6v44.jpeg" // Make sure to add your image in the public folder
                  alt="Arnav Jain"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
    </section>
  );
}