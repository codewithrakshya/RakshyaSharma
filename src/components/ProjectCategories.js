import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faPython } from "@fortawesome/free-brands-svg-icons";
import { faDna, faMicroscope } from "@fortawesome/free-solid-svg-icons";

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

const cardVariants = {
  initial: { opacity: 0, y: 24 },
  enter: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: index * 0.1 },
  }),
};

function ProjectCategories() {
  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="font-semibold tracking-widest text-indigo-700 uppercase">
            Selected work
          </p>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Research & Open-Source Projects
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Reproducible computational work across genomics, biomedical data,
            and scientific software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
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
      </div>
    </section>
  );
}

export default ProjectCategories;
