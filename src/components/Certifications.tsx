import React from "react";
import {certificationdData} from "@/data/portfolio-data";

// const handleRedirect = () => {
//     window.location.href = "https://your-certificate-link.com"; // Replace with your actual certificate URL
//   };

// const Img = `<svg class="w-4 h-4 ml-2" fill="white" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>`
const Certifications = () => {
  return (
    // bg-black
    <section id="certifications" className=" text-white py-16 px-6">
      <div className="max-w-10xl mx-auto text-left">
        {/* text-purple-400 */}
        <h2 className="text-4xl bg-gradient-text bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500 text-transparent bg-clip-text font-bold text-center">{certificationdData.title}</h2>
        <p className="text-lg bg-gradient-text  bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-transparent bg-clip-text mt-2 text-center">{certificationdData.subtitle}</p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {certificationdData.sections.map((section, index) => (
            <div
              key={index}
              // background-color: rgba(255, 255, 255, 0.05);
              className="bg-white/5 border-white/10 p-8 rounded-lg shadow-lg hover:shadow-purple-500 transition"
            >
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 inline-block text-transparent bg-clip-text">{section.title}</h3>
              <p className="text-gray-400 mt-2">{section.platform}</p>
              <p className=" text-md text-zinc-500 gradient-text mt-2">{section.time}</p>
              <p className="text-gray-400 mt-2">{section.description}</p>

                <a
                href={section.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-black transition"
            >
                View Certification 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
            </div>
          ))}
        </div>

        {/* <p className="text-gray-400 mt-10 text-center max-w-3xl mx-auto">
          {section.aboutSections1}
        </p>
        <p className="text-gray-400 mt-10 text-center max-w-3xl mx-auto">
          {section.aboutSections2}
        </p> */}
      </div>
    </section>
  );
};

export default Certifications;
