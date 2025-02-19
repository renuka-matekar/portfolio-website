"use client";

import { motion } from "framer-motion";

import { skillCategories } from "@/data/portfolio-data";

export default function Skills() {
  return (
    <section id="skills" className="pb-16  pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl bg-gradient-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
            Skills
          </h2>
          <p className="text-gray-400 mt-2">
            The tools and technologies I excel in:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="relative"
            >
              <motion.div
                className="h-full bg-card rounded-lg p-6 border border-border backdrop-blur-sm"
                whileHover={{
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  borderColor: category.color.replace("text-", "border-"),
                  transition: { duration: 0.2 },
                }}
              >
                <h3 className={`text-xl font-semibold mb-4 ${category.color}`}>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3 min-h-[230px]">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: {
                          rotate: {
                            duration: 0.4,
                            ease: "easeInOut",
                          },
                          scale: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        },
                      }}
                      transition={{
                        duration: 0.2,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 hover:border-opacity-50"
                    >
                      <motion.span
                        className="text-lg"
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {skill.icon}
                      </motion.span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-400 font-bold">
                      {category.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                    <div
                      className="h-2 bg-green-400 rounded-full"
                      style={{ width: `${category.progress}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
