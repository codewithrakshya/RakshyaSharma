import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import UCSF from "../Images/ucsf.svg";
import UCSC from "../Images/ucsc.png";
import Broad from "../Images/broad.png";
import LBNL from "../Images/lbnl.svg";

const experiences = [
  {
    company: "University of California, San Francisco",
    logo: UCSF,
    position: "Bioinformatician · UCSF PROPEL Post-Baccalaureate Scholar",
    startDate: "June 2024",
    endDate: "Present",
    highlights: [
      "Harmonize and validate 30+ genetic, clinical, phenotype, and biomarker datasets.",
      "Build reproducible statistical-genetics workflows for Alzheimer's disease and aging research.",
    ],
  },
  {
    company: "UC Santa Cruz Genomics Institute",
    logo: UCSC,
    position: "Undergraduate Research Assistant",
    startDate: "April 2022",
    endDate: "June 2024",
    highlights: [
      "Developed computational methods to study RNA-splicing patterns in cancer transcriptomic data.",
    ],
  },
  {
    company: "Broad Institute of MIT and Harvard",
    logo: Broad,
    position: "Computational Genomics Intern",
    startDate: "May 2022",
    endDate: "August 2022",
    highlights: [
      "Built a pipeline to identify spinal muscular atrophy-related deletions and variants.",
    ],
  },
  {
    company: "Lawrence Berkeley National Laboratory",
    logo: LBNL,
    position: "Data Science Research Intern",
    startDate: "June 2021",
    endDate: "August 2021",
    highlights: [
      "Applied machine learning and image analysis to automate plant-root segmentation.",
    ],
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
                className="flex items-start w-full max-w-3xl py-4"
              >
                {exp.logo ? (
                  <div className="flex items-center justify-center flex-shrink-0 w-28 h-28 p-3 bg-white border border-gray-200 rounded-2xl">
                    <img
                      src={exp.logo}
                      draggable="false"
                      alt={`${exp.company} logo`}
                      className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex items-center justify-center flex-shrink-0 w-28 h-28 text-lg font-bold text-white transition-transform duration-300 bg-slate-800 rounded-2xl hover:scale-105"
                  >
                    {exp.mark}
                  </div>
                )}

                <div className={`flex-row text-left mx-8`}>
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="mt-2 text-lg ">{exp.position}</p>
                  <p className="mt-1 text-lg ">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <ul className="mt-3 space-y-1 text-sm leading-relaxed text-gray-600 list-disc list-inside">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
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
