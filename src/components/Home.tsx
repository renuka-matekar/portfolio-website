"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio-data";
// import ResponsiveImage from "./ui/ResponsiveImage";

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] relative overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto md:pl-8 px-4 pt-[124px] lg:pt-40 xs:pb-10 pb-6 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] md:grid-cols-2 gap-6 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-1"
          >
            <h2 className="text-4xl md:text-left text-center md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Hi, I&apos;m </span>

              <span className="text-5xl  font-bold bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 inline-block text-transparent bg-clip-text">
                {personalInfo.fname} {personalInfo.lname}
              </span>
            </h2>
            <h3
              className="text-2xl md:text-3xl md:text-left text-center font-semibold text-white mb-4"
              style={{ opacity: 1 }}
            >
              Data & Business Intelligence Enthusiast
            </h3>
            <p
              className="text-lg md:text-left text-center text-white max-w-xl"
              style={{ opacity: 1 }}
            >
              Aligning business goals with technology, extracting insights,
              improving decision-making, and fostering innovation.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-96 md:w-80 md:h-98 lg:w-97 lg:h-98 overflow-hidden shadow-5xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl">
                <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden bg-zinc-900/90 backdrop-blur-sm border border-zinc-800">
                  <Image
                    src="https://media-hosting.imagekit.io//72bf826bbbad4f83/WhatsApp%20Image%202025-02-19%20at%209.35.24%20AM.jpeg?Expires=1834554622&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wZnqUYe5o4IhUsBgjfHlY06zik3fWLa0uuNPxC7XYeTKGp1yw4vFGD7KdWkgpFY~ZUaZHL56vyd8gO1EFNm0JEyFftP2~EwgjIjiITypGeON-dMO46gJr9lY176DKGZUkAibQBGWx7qpneBYgdGj1zMihvp7OsAGxw6uP06QbWPATHxvg5hlKfTOX7BW3h-Ny2TRO8-AKKO8hzC1O9vVa4Z4rWWmtkJWThhX0kq4MKiiqCag~as5itaruR9XpS3hWrwJ0fK3kXJV0ErDafpJW~TjrYDIeNX32DPAfBzdjR0raS7CHMl3WPVjKKVE~URIF70GmtufjYbbGLDSAw1OdQ__"
                    alt="Full Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* <ResponsiveImage /> */}
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
