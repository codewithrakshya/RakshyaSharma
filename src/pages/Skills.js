import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faDocker,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";

const programmingLanguages = [
  "Python",
  "R",
  "Bash",
  "SQL",
];

const frameworks = [
  "pandas",
  "NumPy",
  "SciPy",
  "scikit-learn",
  "tidyverse",
  "data.table",
];

const developerTools = [
  "Git",
  "Github",
  "Docker",
  "Linux",
  "Conda",
  "Snakemake",
  "Nextflow",
  "HPC/SGE",
];

const technologies = [
  "Statistical Modeling",
  "ggplot2",
  "Matplotlib",
  "R Markdown",
  "Jupyter Notebook",
];

const machineLearning = [
  "Machine Learning",
  "Artificial Intelligence",
  "Predictive Modeling",
  "Computer Vision",
  "Image Analysis",
  "scikit-learn",
  "Dimensionality Reduction",
];

const skillToIcon = {
  Python: faPython,
  R: faCode,
  Bash: faCode,
  SQL: faDatabase,
  Git: faGitAlt,
  Github: faGitAlt,
  Docker: faDocker,
  pandas: faCode,
  NumPy: faCode,
  Matplotlib: faCode,
};

const fadeInAnimationVartients = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * index,
    },
  }),
};

const renderSkills = (skills) => (
  <div className="flex flex-wrap justify-center gap-4 p-4">
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        initial="initial"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variants={fadeInAnimationVartients}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-10 bg-[#FEFAF6] font-bold text-lg min-w-[140px] p-3 rounded-lg shadow-md flex justify-center items-center"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={index}
      >
        <FontAwesomeIcon icon={skillToIcon[skill] || faCode} className="mr-2" />
        <span className="text-lg text-gray-800">{skill}</span>
      </motion.div>
    ))}
  </div>
);

function Skills() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-auto p-5">
      <h2 className="mb-8 text-6xl font-bold text-white">
        My <span className="text-indigo-700">Technical</span> Skills
      </h2>

      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <h3 className="flex justify-center mb-4 text-2xl font-semibold text-white">
              Programming Languages
            </h3>
            <hr className="w-11/12 mx-auto mb-4 border-t-2 border-gray-300 md:w-3/4" />
            {renderSkills(programmingLanguages)}
          </div>
          <div>
            <h3 className="flex justify-center mb-4 text-2xl font-semibold text-white">
              Analysis Libraries
            </h3>
            <hr className="w-11/12 mx-auto mb-4 border-t-2 border-gray-300 md:w-3/4" />
            {renderSkills(frameworks)}
          </div>
          <div>
            <h3 className="flex justify-center mb-4 text-2xl font-semibold text-white">
              Reproducibility & Systems
            </h3>
            <hr className="w-11/12 mx-auto mb-4 border-t-2 border-gray-300 md:w-3/4" />
            {renderSkills(developerTools)}
          </div>
          <div>
            <h3 className="flex justify-center mb-4 text-2xl font-semibold text-white">
              Statistics & Reporting
            </h3>
            <hr className="w-11/12 mx-auto mb-4 border-t-2 border-gray-300 md:w-3/4" />
            {renderSkills(technologies)}
          </div>
          <div className="md:col-span-2">
            <h3 className="flex justify-center mb-4 text-2xl font-semibold text-white">
              Artificial Intelligence & Machine Learning
            </h3>
            <hr className="w-11/12 mx-auto mb-4 border-t-2 border-gray-300 md:w-1/2" />
            {renderSkills(machineLearning)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
