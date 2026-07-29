import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const publications = [
  {
    year: "2026",
    type: "Preprint",
    title:
      "Orthogonal Contributions of Genetic, Clinical, and Social Determinants of Health Risk Burdens on Alzheimer’s Disease Pathophysiology",
    authors:
      "Meri Okorie, Xiaqing Jiang, Paulina Tolosa-Tort, Rakshya U. Sharma, Alexandra L. Clark, Kristine Yaffe, Jennifer S. Yokoyama, Shea Andrews, and the Health and Aging Brain Study–Health Disparities",
    journal: "medRxiv",
    url: "https://doi.org/10.64898/2026.07.07.26357509",
    doi: "10.64898/2026.07.07.26357509",
  },
  {
    year: "2026",
    type: "Peer-reviewed article",
    title:
      "Evaluating the causal effect of mitochondrial dysfunction on Alzheimer’s and Parkinson’s disease using Polygenic Risk Scores and Mendelian Randomization",
    authors:
      "Aadrita Chatterjee, Brian Alvarez Alvarez, Rakshya U. Sharma, et al.",
    journal: "Alzheimer’s & Dementia",
    url: "https://doi.org/10.1002/alz.71469",
    doi: "10.1002/alz.71469",
  },
  {
    year: "2025",
    type: "Peer-reviewed article",
    title:
      "Diagnosing missed cases of spinal muscular atrophy in genome, exome, and panel sequencing data sets",
    authors: "Ben Weisburd, Rakshya Sharma, Villem Pata, et al.",
    journal: "Genetics in Medicine",
    url: "https://doi.org/10.1016/j.gim.2024.101336",
    doi: "10.1016/j.gim.2024.101336",
  },
  {
    year: "2025",
    type: "Preprint",
    title:
      "Integrative effects of Telomere Length, Epigenetic Age, and Mitochondrial DNA abundance in Alzheimer’s Disease",
    authors: "Shea J. Andrews, Rakshya U. Sharma, Brendan A. Mitchell, et al.",
    journal: "medRxiv",
    url: "https://doi.org/10.1101/2025.07.16.25331683",
    doi: "10.1101/2025.07.16.25331683",
  },
  {
    year: "2025",
    type: "Article",
    title:
      "Toward Personalized Medicine in AD/ADRD Through Genetic-Exposome Dementia Risk Assessments",
    authors:
      "Paulina Tolosa-Tort, Meri Okorie, Aadrita Chatterjee, Ana I. Borieu, Rakshya U. Sharma, and Shea J. Andrews",
    journal: "npj Dementia",
  },
];

const Publications = () => {
  return (
    <main className="min-h-screen px-6 pt-28 pb-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <p className="font-semibold tracking-widest text-indigo-700 uppercase">
            Scholarly work
          </p>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Publications & Preprints
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Peer-reviewed and preprint research spanning statistical genetics,
            neurodegenerative disease, genomic diagnostics, and precision
            health.
          </p>
          <a
            href="https://orcid.org/0000-0002-7026-6598"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-5 font-bold text-indigo-700 hover:text-indigo-900"
          >
            View ORCID record
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="ml-2"
            />
          </a>
        </div>

        <div className="mt-12 space-y-6">
          {publications.map((publication) => (
            <article
              key={publication.title}
              className="p-6 bg-white border border-gray-200 shadow-sm md:p-8 rounded-2xl"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 text-sm font-bold text-white bg-indigo-800 rounded-full">
                  {publication.year}
                </span>
                <span className="text-sm font-semibold text-gray-500">
                  {publication.type}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-gray-900">
                {publication.title}
              </h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                {publication.authors}
              </p>
              <p className="mt-2 font-semibold text-gray-800">
                {publication.journal}
              </p>
              {publication.url ? (
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-5 font-bold text-indigo-700 hover:text-indigo-900"
                >
                  <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                  DOI: {publication.doi}
                </a>
              ) : (
                <p className="mt-5 text-sm italic text-gray-500">
                  Citation listed in the CV; a public article link was not
                  provided.
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Publications;
