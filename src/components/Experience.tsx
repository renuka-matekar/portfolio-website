"use client";
import React from "react";
import { experience } from "@/data/portfolio-data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="pb-16  pt-24 px-4 sm:px-8 md:px-16 lg:px-24 text-white"
    >
      <div className="text-center">
        <h2 className="text-4xl bg-gradient-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
          Work Experience
        </h2>
      </div>

      <div className="mt-8 space-y-6 max-w-4xl mx-auto">
        {experience.map((edu, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-xl shadow-lg p-6 transition transform hover:scale-105"
          >
            <h3 className={`text-xl font-semibold flex items-center gap-2`}>
              <span className="text-xl font-semibold  hover:text-primary text-primary bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 bg-clip-text">
                {edu.role}
              </span>
            </h3>
            <p className="text-l font-semibold  hover:text-primary text-primary bg-gradient-to-r from-blue-500 via-purple-500 to-pink-300 bg-clip-text mt-1">
              {edu.company}
            </p>
            <p className="text-gray-500 text-sm">
              {edu.location} | {edu.duration}
            </p>
            <ul className="mt-4 text-gray-400 space-y-2">
              {edu.responsibilities.map((task, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <p>{task}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
