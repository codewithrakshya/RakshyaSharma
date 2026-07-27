import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "University of California, San Francisco",
    mark: "UCSF",
    position: "Bioinformatician",
    startDate: "June 2024",
    endDate: "Present",
  },
  {
    company: "UC Santa Cruz Genomics Institute",
    mark: "UCSC",
    position: "Undergraduate Research Assistant",
    startDate: "April 2022",
    endDate: "June 2024",
  },
  {
    company: "Broad Institute of MIT and Harvard",
    mark: "BROAD",
    position: "Computational Genomics Intern",
    startDate: "May 2022",
    endDate: "August 2022",
  },
  {
    company: "Lawrence Berkeley National Laboratory",
    mark: "LBNL",
    position: "Data Science Research Intern",
    startDate: "June 2021",
    endDate: "August 2021",
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
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};

function ExperienceSection() {
  return (
    <div className="relative flex justify-center w-full h-full py-10">
      <div className="absolute top-0 h-full left-1/2"></div>

      <AnimatePresence mode="wait">
        <div
          className="flex flex-col items-center w-full"
          variants={gridVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {experiences.map((exp, index) => (
            <React.Fragment key={index}>
              <motion.div
                variants={cardVariants}
                className={`flex items-center w-full max-w-3xl `}
              >
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center flex-shrink-0 w-28 h-28 text-lg font-bold text-white transition-transform duration-300 bg-slate-800 rounded-2xl hover:scale-105"
                >
                  {exp.mark}
                </div>

                <div className={`flex-row text-left mx-8`}>
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="mt-2 text-lg ">{exp.position}</p>
                  <p className="mt-1 text-lg ">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default ExperienceSection;
