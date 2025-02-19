"use client";
import React from "react";
import { GraduationCap } from "lucide-react";
import { educationData } from "@/data/portfolio-data"; // Import the data

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen pb-16  pt-24 px-6 md:px-20 text-white"
    >
      <div className="text-center">
        <h2 className="text-4xl bg-gradient-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
          Education
        </h2>
        <p className="text-gray-400 mt-2">
          My academic journey and qualifications
        </p>
      </div>

      <div className="mt-8 space-y-6 max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl shadow-lg p-6 transition transform hover:scale-105"
          >
            <h3
              className={`text-xl font-semibold ${edu.gradient} flex items-center gap-2`}
            >
              <GraduationCap size={22} className="text-blue-500" />
              <span className="text-xl font-semibold  hover:text-primary  bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-primary inline-block text-transparent bg-clip-text">
                {edu.degree}
              </span>
            </h3>
            <p className="text-gray-300 mt-1">{edu.university}</p>
            <p className="text-gray-500 text-sm">
              {edu.location} | {edu.duration}
            </p>
            <p className="mt-3 text-gray-300">
              <strong>GPA:</strong> {edu.gpa}
            </p>
            <p className="mt-2 text-gray-400">
              <strong>Relevant coursework:</strong> {edu.coursework.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
