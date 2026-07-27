import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const university = [
  {
    university: "University of California, Santa Cruz",
    mark: "UCSC",
    Degree: "B.S. Computer Science · Minor in Bioinformatics",
    startDate: "",
    endDate: "June 2024",
  },
];

const gridVariants = {
  initial: { opacity: 0, y: 30 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
  exit: { opacity: 0, y: -30, transition: { duration: 0.5 } },
};

const cardVariants = {
  hover: {
    scale: 1.01,
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};

function EducationSection() {
  return (
    <div className="relative flex justify-center w-full h-full py-10">
      <div className="absolute top-0 h-full left-1/2"></div>

      <AnimatePresence mode="wait">
        <motion.div
          className="flex flex-col items-center w-full"
          variants={gridVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {university.map((exp, index) => (
            <React.Fragment key={index}>
              <motion.div
                variants={cardVariants}
                className={`flex items-center w-full max-w-3xl `}
              >
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center flex-shrink-0 w-28 h-28 text-lg font-bold text-white transition-transform duration-300 bg-indigo-800 rounded-2xl hover:scale-105"
                >
                  {exp.mark}
                </div>

                <div className={`flex-grow text-left mx-8`}>
                  <h3 className="text-xl font-bold">{exp.university}</h3>
                  <p className="mt-2 text-lg ">{exp.Degree}</p>
                  <p className="mt-1 text-lg ">
                    {exp.startDate && `${exp.startDate} - `}{exp.endDate}
                  </p>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default EducationSection;
