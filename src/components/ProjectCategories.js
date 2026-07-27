import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faPython } from "@fortawesome/free-brands-svg-icons";
import {
  faChartLine,
  faDatabase,
  faDna,
  faMicroscope,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    name: "RBPSig",
    description:
      "Computational research exploring RNA-binding protein signatures in genomic data.",
    link: "https://github.com/codewithrakshya/RBPSig",
    tech: ["Jupyter Notebook", "Python", "Genomics"],
    icon: faDna,
  },
  {
    name: "SMN Analysis",
    description:
      "Analysis code for studying SMN1 and SMN2, supporting computational genomics research into spinal muscular atrophy.",
    link: "https://github.com/broadinstitute/smn_analysis",
    tech: ["Python", "Sequencing Data", "Bioinformatics"],
    icon: faMicroscope,
  },
  {
    name: "Rosalind Solutions",
    description:
      "Python solutions to bioinformatics and computational biology problems from the Rosalind platform.",
    link: "https://github.com/codewithrakshya/rosalind-solutions",
    tech: ["Python", "Algorithms", "Bioinformatics"],
    icon: faPython,
  },
];

const openSourceTools = [
  {
    name: "OpenSignal PH",
    description:
      "An open-source public-health safety surveillance platform for reproducible adverse-event signal detection using public FDA data, observable data-quality checks, statistical and machine-learning detectors, historical backtesting, and an explainable API.",
    link: "https://github.com/codewithrakshya/opensignal-ph",
    tech: ["Python", "FastAPI", "Public Health", "Machine Learning"],
    icon: faChartLine,
    context: "Independent open-source project · Early scaffold",
  },
  {
    name: "Clinical Data Warehouse",
    description:
      "A portfolio-scale clinical data warehouse using synthetic Synthea records, PostgreSQL, and Python to demonstrate reproducible ETL, dimensional modeling, data-quality testing, and audit logging without exposing patient information.",
    link: "https://github.com/codewithrakshya/clinical-data-warehouse",
    tech: ["Python", "PostgreSQL", "ETL", "Docker"],
    icon: faDatabase,
    context: "Independent open-source project",
  },
  {
    name: "PRS-CS-Auto",
    description:
      "A reproducible Snakemake pipeline for calculating polygenic risk scores with PRS-CS Auto, including genotype preparation, HapMap3 filtering, APOE-region removal, and PLINK scoring.",
    link: "https://github.com/AndrewsLabUCSF/PRS-CS-Auto",
    tech: ["Snakemake", "Python", "R", "PLINK"],
    icon: faChartLine,
    context: "Andrews Lab UCSF open-source repository",
  },
  {
    name: "SGE Wynton Executor",
    description:
      "A Snakemake executor plugin that submits and manages workflow jobs on UCSF's Wynton high-performance computing cluster through Sun Grid Engine.",
    link:
      "https://github.com/AndrewsLabUCSF/snakemake-executor-plugin-sge-wynton",
    tech: ["Python", "Snakemake", "SGE", "HPC"],
    icon: faServer,
    context: "Andrews Lab UCSF open-source repository",
  },
  {
    name: "MR",
    description:
      "Open-source workflows and analysis code for Mendelian randomization research in the Andrews Lab at UCSF.",
    link: "https://github.com/AndrewsLabUCSF/MR",
    tech: ["R", "Genetics", "Causal Inference"],
    icon: faDna,
    context: "Andrews Lab UCSF open-source repository",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 24 },
  enter: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: index * 0.1 },
  }),
};

function ProjectGrid({ items }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {items.map((project, index) => (
        <motion.article
          key={project.name}
          custom={index}
          variants={cardVariants}
          initial="initial"
          animate="enter"
          whileHover={{ y: -6 }}
          className="flex flex-col p-7 border border-gray-200 shadow-sm rounded-2xl bg-white"
        >
          <div className="flex items-center justify-center w-14 h-14 text-2xl text-white bg-indigo-800 rounded-xl">
            <FontAwesomeIcon icon={project.icon} />
          </div>
          <h2 className="mt-6 text-2xl font-bold">{project.name}</h2>
          {project.context && (
            <p className="mt-1 text-sm font-semibold text-indigo-700">
              {project.context}
            </p>
          )}
          <p className="flex-grow mt-3 leading-relaxed text-gray-600">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-medium text-indigo-900 bg-indigo-50 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-6 font-semibold text-indigo-700 hover:text-indigo-900"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            View on GitHub
          </a>
        </motion.article>
      ))}
    </div>
  );
}

function ProjectCategories() {
  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="font-semibold tracking-widest text-indigo-700 uppercase">
            Scientific software
          </p>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Open-Source Tools
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Reusable pipelines and infrastructure for genetic analysis,
            clinical data engineering, and high-performance research computing.
          </p>
        </div>

        <ProjectGrid items={openSourceTools} />

        <div className="mt-20 mb-10 text-center">
          <p className="font-semibold tracking-widest text-indigo-700 uppercase">
            Selected work
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Research & Open-Source Projects
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Reproducible computational work across genomics, biomedical data,
            and scientific software.
          </p>
        </div>
        <ProjectGrid items={projects} />
      </div>
    </section>
  );
}

export default ProjectCategories;
