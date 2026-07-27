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
  "JavaScript",
  "C++",
];

const frameworks = [
  "pandas",
  "NumPy",
  "SciPy",
  "tidyverse",
  "data.table",
];

const developerTools = [
  "Git",
  "GitHub",
  "Docker",
  "Linux",
  "Conda",
  "Snakemake",
  "Nextflow",
  "SGE",
  "SLURM",
  "AWS",
  "GCP",
];

const technologies = [
  "Statistical Modeling",
  "Regression",
  "Association Testing",
  "Multiple-Testing Correction",
  "ggplot2",
  "Matplotlib",
  "R Markdown",
  "Jupyter Notebook",
  "IGV",
  "UCSC Genome Browser",
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

const bioinformatics = [
  "Polygenic Risk Scores",
  "Mendelian Randomization",
  "Genetic Correlation",
  "GWAS Summary Statistics",
  "RNA-seq",
  "Whole-Exome Sequencing",
  "Genotype & Phenotype Harmonization",
  "Variant Interpretation",
];

const skillToIcon = {
  Python: faPython,
  R: faCode,
  Bash: faCode,
  SQL: faDatabase,
  Git: faGitAlt,
  GitHub: faGitAlt,
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
        key={skill}
        initial="initial"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variants={fadeInAnimationVartients}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center justify-center w-full max-w-[220px] min-h-[64px] px-3 py-2 overflow-hidden font-bold text-center bg-[#FEFAF6] rounded-lg shadow-md"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={index}
      >
        <FontAwesomeIcon
          icon={skillToIcon[skill] || faCode}
          className="flex-shrink-0 mr-2"
        />
        <span className="text-base leading-tight text-gray-800 break-words">
          {skill}
        </span>
      </motion.div>
    ))}
  </div>
);

function Skills() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-auto p-5">
      <h2 className="mb-8 text-4xl font-bold text-center text-white md:text-6xl">
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
          <div className="md:col-span-2">
            <h3 className="flex justify-center mb-4 text-2xl font-semibold text-center text-white">
              Bioinformatics & Genomic Analysis
            </h3>
            <hr className="w-11/12 mx-auto mb-4 border-t-2 border-gray-300 md:w-1/2" />
            {renderSkills(bioinformatics)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
