// // src/components/Projects.tsx
// Add this directive at the top of your file
"use client"; 
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
const projectsData = [
  {
    title: "Predicting the Top 20 Properties",
    description: `The main goal for this project is to recommend for investment the purchase of twenty (20) most luxurious (i.e. priciest) homes out of 100 candidate properties for which the sales prices are not known. The data you will use for this project are described below. A good purchase recommendation is for a shortlist of the 20 homes as close as possible to a final list based on the target prices of the homes; meanwhile, the rank order of homes in your recommended list will not matter, only thing that matters as far as your project’s quality of predictive analytics goes is the number of homes in your recommendation list that overlap with a list based on the actual target prices. 
Using the CRISP-DM (Cross-Industry Standard Process for Data Mining) for data analysis, mining, and extraction. It is an effective methodology for the data mining tasks. There are six different phases for CRISP-DM. They are Business Understanding phase, Data understanding phase, Data Preparation phase, Modeling, Evaluation and Deployment. Implementing all these phases, will be our goal for this project. 
The first phase aims at the clear perception of the business requirements, any good project would start with the clear understanding of the requirements. The main goal lies in understanding the objectives and requirements of the project. Then in the next phase, focus is mainly on identifying, analyzing, and collecting the data sets. The third phase, which is often referred to as “data munging”. This phase cleans the data and makes final preparation for the data set to enter to evaluation.  Next step would be selecting modelling techniques, evaluation, and deployment, see predictive analystics`,
    image: `https://media-hosting.imagekit.io//2ed1626fc956449c/property-market-analysis-investment-tiny-people-study-real-estate-price-growth-chart_1135642-97.avif?Expires=1834496215&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZTvS2S6fXESWbxqD2HSEBV9UoAi8v5qBIwgwmmENIiYjle1WSOvrouqF83ziN0NdkV4FVgjmMm5DWmHnh52xcUBWKajVShKt4fC30zFlU1H0P8WIhWxkOEJJwKL7GzPYwYRgHzp44tmzanQfbvDXZQpxCiT3pqwOHJMqssxVIWGgFwv710FDVyjAf4SiAOhcGElYUZKXOfcNoNPENGm-8N5vPkL8o-WcYJfwyXEpF0l70mLPpHlcNshpZC0H9TzgQ4q1joJwuIH4qH2nhob-DEYBetq9ueSxlF4N-E7PNe4hL0d7GllWShwJYC30sVEeqH9tWk1HWVd70g-2lZ5PHQ__`,
    // (
    //   <div className="bg-white/5 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="379" height="192">
    //   <path d="M3 12l9-9 9 9h-2v7h-5v-5h-4v5H5v-7H3z" fill="#6B7280"/>
    //   <path d="M8 15l2-2 2 1 3-3" 
    //         stroke="#9333EA" 
    //         strokeWidth="1.5" 
    //         fill="none" 
    //         strokeLinecap="round"/>
    //   <path d="M19 6l-1.5-1.5L19 3l1.5 1.5L19 6z" 
    //         fill="#9333EA"/>
    // </svg></div>
      
    // ),
    // technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    githubLink: "https://github.com/Gayuu-9x/luxury-home-price-prediction"
  },
  {
    title: "Analysis of book trends",
    description: `This project is a data-driven analysis of book trends aimed at helping a Book Publishing Company make better investment decisions. The primary goal is to identify profitable book categories, authors, and trends based on historical data, ratings, and reader preferences`,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    // technologies: ["Python", "TensorFlow", "Gymnasium", "Pandas", "NumPy", "Matplotlib"],
    githubLink: "https://github.com/Gayuu-9x/book-trends-analysis"
  },
  {
    title: "R script for data analysis",
    description: `This R project analyzes coffee sales data for three popular drinks—Americanos, Espressos, and Lattes—over a 12-month period. The goal is to extract meaningful insights into sales performance and revenue trends using data analytics.`,
    image:`https://media-hosting.imagekit.io//adf4b16b208e493d/6d841cf3-04a2-4a5d-ad1d-0738317db8b1%20(3).webp?Expires=1834493532&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=idwxMPOdOCU7dmLtlxVSKwHAr5ZvajrgHtldDjwESqUDQoabehNz3xie~U0uJ38x9HwiSi2xGxjc3dKOqqFN73TC5kit5hY42VIYjXmDJ~OnSctseEwL1450ZhEGOJObDhqScPrYjVFLD-0ZpuDTYrH4Wj6~klkQl1jFaKS7zBioZWXtn2fpVtChs7qmr5LiqIh1LKVd2o26BACETYWtpTC-dhGqvCS-D9gi~8DaKRfETxTS2Xw-0xg5Y7mmobnd4ncEs7xBgfJ7k9Wts1gSWKFb2yPazOOADqFPeiSBiDdzqJ0SEE~nkwGv0CYtKY~JS00hXwUW8UdVLiIudZeWKg__`,
     githubLink: "https://github.com/Gayuu-9x/coffee-revenue-insights"
  },
];


const Projects = () => {
  return (
    <div className="min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-500 text-center mb-2">Projects</h1>
        <p className="text-gray-400 text-center mb-16">Some of the notable projects I&apos;ve built:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="bg-black/20 p-4 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
            >
              {typeof project.image === 'string' ? (
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
                {/* {project.description} */}
                </div>
                
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
                
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
      <p className={`${isExpanded ? 'block' : 'line-clamp-3'} text-zinc-400`}>
        {description}
      </p>
      <button 
        onClick={toggleDescription} 
        className="text-blue-500 mt-2">
        {isExpanded ? "View Less" : "View More"}
      </button>
    </div>
  );
}

// "use client"

// import { motion } from "framer-motion"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
// import { projects } from "@/data/portfolio-data"
// import { Github, ExternalLink } from "lucide-react"
// import Link from "next/link"

// export default function Projects() {
//   return (
//     <section className="py-20 px-4">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-6xl mx-auto"
//       >
//         <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <Card className="h-full hover:shadow-lg transition-shadow">
//                 <CardHeader>
//                   <CardTitle>{project.title}</CardTitle>
//                   <CardDescription>{project.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex gap-4">
//                     {project.github && (
//                       <Link
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
//                       >
//                         <Github className="h-5 w-5" />
//                       </Link>
//                     )}
//                     {project.link && (
//                       <Link
//                         href={project.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//    
//                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
//                       >
//                         <ExternalLink className="h-5 w-5" />
//                       </Link>
//                     )}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   )
// 