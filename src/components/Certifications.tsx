"use client";
import React from "react";
import { certificationdData } from "@/data/portfolio-data";
import TruncatedDescription from "../components/ui/TruncatedDescription";
import Link from "next/link";

const Certifications = () => {
  return (
    <section id="certifications" className=" text-white pb-16  pt-24 px-6">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-4xl bg-gradient-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-center">
          {certificationdData.title}
        </h2>

        <p className="text-gray-400 mt-2 text-center">
          {certificationdData.subtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {certificationdData.sections.map((section, index) => (
            <div
              key={index}
              className="bg-white/5 border-white/10 p-8 rounded-lg shadow-lg hover:shadow-purple-500 transition"
            >
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 inline-block text-transparent bg-clip-text">
                {section.title}
              </h3>
              <p className="text-gray-400 mt-2">{section.platform}</p>
              <p className=" text-md text-zinc-500 gradient-text mt-2">
                {section.time}
              </p>
              <div className="text-gray-400 mt-2">
                <TruncatedDescription description={section.description} />
              </div>

              <Link
                // download={section.name}
                href={section.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 px-4 py-2 hover:bg-black text-white font-semibold rounded-lg bg-card shadow-xl hover:shadow-gray-950 hover:border-b transition"
              >
                View Certification
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
