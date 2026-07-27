import React from "react";
import BlogArticle from "./BlogArticle";

const sections = [
  {
    heading: "Express resources per rule",
    body: "Each workflow step should declare the memory, runtime, threads, and temporary storage it needs. A cluster profile or executor plugin can translate those declarations into scheduler requests while keeping infrastructure details out of the scientific logic.",
  },
  {
    heading: "Keep compute close to the data",
    body: "Large genomic files are expensive to copy repeatedly. Organizing intermediate files on appropriate shared or scratch storage and minimizing unnecessary reads can improve both performance and reliability.",
  },
  {
    heading: "Control environments explicitly",
    body: "Conda environments and containers help ensure that cluster jobs use known versions of analytical software. This becomes especially important when different rules require incompatible dependencies or when results must be reproduced later.",
  },
  {
    heading: "Design for failure",
    body: "Cluster jobs may fail because of resource limits, transient filesystem issues, or malformed inputs. Logs, benchmark files, retries for appropriate steps, and validation of expected outputs make failures diagnosable rather than mysterious.",
  },
];

const SnakemakeOnHPC = () => (
  <BlogArticle
    category="Research Computing"
    title="Running Snakemake Workflows on HPC"
    introduction="High-performance computing makes it possible to process large biomedical datasets, but a shared cluster adds scheduling, storage, and environment-management concerns. Snakemake provides a useful boundary between the scientific workflow and the system that executes it."
    tips={[
      "Declare memory, runtime, threads, and software environments for every workflow rule.",
      "Keep detailed logs and benchmark records so failed cluster jobs can be diagnosed quickly.",
    ]}
    learningOutcomes={[
      "Understand how Snakemake separates scientific workflow logic from cluster execution.",
      "Recognize how schedulers, shared storage, environments, and retries affect pipeline reliability.",
    ]}
    useCases={[
      "Scaling genomic and biomedical pipelines from local testing to a shared computing cluster.",
      "Running reproducible analyses that collaborators can rerun, audit, and extend.",
    ]}
    sections={sections}
  />
);

export default SnakemakeOnHPC;
