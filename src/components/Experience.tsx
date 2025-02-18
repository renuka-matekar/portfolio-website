// import React from "react";

// import { GraduationCap } from "lucide-react";
// import { educationData } from "@/data/portfolio-data"; // Import the data


// const Experience = () => {
//   return (
//     <section id="experience" className="py-12 px-6 md:px-20 bg-black text-white">
//       <div className="text-center">
//         <h2 className="text-4xl bg-gradient-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
//         Work Experience
//         </h2>
        
//       </div>

//       <div className="mt-8 space-y-6 max-w-4xl mx-auto">
//         {educationData.map((edu, index) => (
//           <div
//             key={index}
//             className="bg-gray-900 rounded-xl shadow-lg p-6 transition transform hover:scale-105"
//           >
//             <h3 className={`text-xl font-semibold ${edu.gradient} flex items-center gap-2`}>
//               <GraduationCap size={22} className="text-blue-500" />
//               <span className="text-xl font-semibold  hover:text-primary  bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-primary inline-block text-transparent bg-clip-text">{edu.degree}</span>
//             </h3>
//             <p className="text-gray-300 mt-1">{edu.university}</p>
//             <p className="text-gray-500 text-sm">{edu.location} | {edu.duration}</p>
//             <p className="mt-3 text-gray-300">
//               <strong>GPA:</strong> {edu.gpa}
//             </p>
//             <p className="mt-2 text-gray-400">
//               <strong>Relevant coursework:</strong> {edu.coursework.join(", ")}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience; 

import React from "react";
import { experience } from "@/data/portfolio-data";

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-white">
        <div className="text-center">
        <h2 className="text-4xl bg-gradient-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
          Work Experience
        </h2>
        {/* <p className="text-gray-400 mt-2">My academic journey and qualifications</p> */}
      </div>
      {/* <h2 className="">
    //   "text-4xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
        Experience
      </h2> */}
      
      <div className="mt-8 space-y-6 max-w-4xl mx-auto">
        {experience.map((edu, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-xl shadow-lg p-6 transition transform hover:scale-105"
          >
            <h3 className={`text-xl font-semibold flex items-center gap-2`}>
              {/* <GraduationCap size={22} className="text-blue-500" /> */}
              <span className="text-xl font-semibold  hover:text-primary text-primary  bg-gradient-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 text-transparent bg-clip-text font-bold"
              >{edu.role}</span>
            </h3>
            <p className="text-l font-semibold  hover:text-primary text-primary  bg-gradient-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-300 text-transparent bg-clip-text font-bold mt-1">{edu.company}</p>
            <p className="text-gray-500 text-sm">{edu.location} | {edu.duration}</p>
            <ul className="mt-4 text-gray-400 space-y-2">
              {edu.responsibilities.map((task, i) => (
                <li key={i} className="flex items-start space-x-2">
                  {/* <span className="text-green-400">✔</span> */}
                  <p>{task}</p>
                </li>
              ))}
            </ul>
           
          </div>
        ))}
      </div>

      {/* <div className="mt-8 grid md:grid-cols-1 gap-6">
        {experience.map((exp, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              {exp.role}
            </h3>
            <p className="text-gray-300">{exp.company} - {exp.location}</p>
            <p className="text-gray-400 text-sm">{exp.duration}</p>

            <ul className="mt-4 text-gray-400 space-y-2">
              {exp.responsibilities.map((task, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-green-400">✔</span>
                  <p>{task}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Experience;