import React from "react";
import {aboutData} from "@/data/portfolio-data";

const About = () => {
  return (
    // bg-black
    <section className="min-h-screen text-white py-16 px-6">
      <div className="max-w-10xl mx-auto text-center">
        {/* text-purple-400 */}
        <h2 className="text-4xl bg-gradient-text bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500 text-transparent bg-clip-text font-bold ">{aboutData.title}</h2>
        <p className="text-lg bg-gradient-text  bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-transparent bg-clip-text mt-2">{aboutData.subtitle}</p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {aboutData.sections.map((section, index) => (
            <div
              key={index}
              // background-color: rgba(255, 255, 255, 0.05);
              className="bg-white/5 border-white/10 p-8 rounded-lg shadow-lg hover:shadow-purple-500 transition"
            >
              <div className="mb-6 flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              {typeof section.icon === "string" ? (
    <span dangerouslySetInnerHTML={{ __html: section.icon }} />
  ) : (
    section.icon
  )}
              </div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 inline-block text-transparent bg-clip-text">{section.title}</h3>
              <p className="text-gray-400 mt-2">{section.description}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-400 mt-10 text-center max-w-3xl mx-auto">
          {aboutData.aboutSections1}
        </p>
        <p className="text-gray-400 mt-10 text-center max-w-3xl mx-auto">
          {aboutData.aboutSections2}
        </p>
      </div>
    </section>
  );
};

export default About;