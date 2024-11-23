import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Skills data
const skills = [
  { id: 1, name: "React", level: 90 },
  { id: 2, name: "TypeScript", level: 85 },
  { id: 3, name: "Node.js", level: 80 },
  { id: 4, name: "Python", level: 75 },
  { id: 5, name: "SQL", level: 85 },
  { id: 6, name: "MongoDB", level: 80 },
  { id: 7, name: "AWS", level: 75 },
  { id: 8, name: "Docker", level: 70 },
  { id: 9, name: "Git", level: 85 },
];

function SkillsSection({ isDarkMode }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className={`
        min-h-screen w-full flex flex-col justify-start items-center 
        py-16 px-6 relative overflow-hidden
        ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
            : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
        }
      `}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="container mx-auto h-full flex flex-col px-4 sm:px-6 lg:px-8 max-w-7xl"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          variants={itemVariants}
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        <motion.div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          variants={containerVariants}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className={`
                p-6 rounded-xl shadow-lg transition-all duration-300 
                ${
                  isDarkMode
                    ? "bg-gray-800 border border-gray-700 hover:bg-gray-700"
                    : "bg-white border border-gray-200 hover:bg-gray-100"
                }
              `}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-center">{skill.name}</h3>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-center">
                  <span
                    className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                      isDarkMode
                        ? "text-blue-200 bg-blue-900"
                        : "text-blue-600 bg-blue-200"
                    }`}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  className={`overflow-hidden h-3 mb-4 text-xs flex rounded ${
                    isDarkMode ? "bg-blue-900" : "bg-blue-200"
                  }`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default SkillsSection;
