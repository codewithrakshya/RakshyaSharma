import React from "react";

const technicalSkills = [
  "Python",
  "R",
  "Bash",
  "SQL",
  "JavaScript",
  "C++",
  "pandas",
  "NumPy",
  "SciPy",
  "tidyverse",
  "data.table",
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
  "Machine Learning",
  "Artificial Intelligence",
  "Predictive Modeling",
  "Computer Vision",
  "Image Analysis",
  "scikit-learn",
  "Dimensionality Reduction",
  "Polygenic Risk Scores",
  "Mendelian Randomization",
  "Genetic Correlation",
  "GWAS Summary Statistics",
  "RNA-seq",
  "Whole-Exome Sequencing",
  "Genotype & Phenotype Harmonization",
  "Variant Interpretation",
];

function Skills() {
  return (
    <section className="w-full px-5">
      <div className="max-w-6xl p-6 mx-auto border border-indigo-100 bg-indigo-50 rounded-2xl md:p-8">
        <h2 className="mb-6 text-4xl font-bold text-center text-gray-900 md:text-5xl">
          My Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {technicalSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm font-semibold text-indigo-900 bg-white border border-indigo-100 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
