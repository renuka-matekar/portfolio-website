// // src/components/Projects.tsx
// Add this directive at the top of your file
"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { projectsData } from "@/data/portfolio-data";

const Projects = () => {
  return (
    <div className="min-h-screen px-6 pb-16  pt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-500 text-center mb-2">
          Projects
        </h1>
        <p className="text-gray-400 text-center mb-16">
          Some of the notable projects I&apos;ve built:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-black/20 p-4 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
            >
              {typeof project.image === "string" ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={379}
                  height={192}
                  className="w-full h-[192px] object-cover bg-black/20 rounded-lg "
                />
              ) : (
                project.image
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <div className="text-white text-sm mb-4">
                  <TruncatedDescription description={project.description} />
                </div>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

function TruncatedDescription({ description }: { description: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <p className={`${isExpanded ? "block" : "line-clamp-3"} text-zinc-400`}>
        {description}
      </p>
      <button onClick={toggleDescription} className="text-blue-500 mt-2">
        {isExpanded ? "View Less" : "View More"}
      </button>
    </div>
  );
}
