import React from "react";
import BlogArticle from "./BlogArticle";

const sections = [
  {
    heading: "Start with the analytical question",
    body: "Quality control is most useful when it is connected to the study design. The appropriate checks depend on whether the data will be used for association testing, polygenic risk scoring, ancestry analysis, variant interpretation, or another purpose. Defining the intended analysis first helps distinguish meaningful exclusions from arbitrary thresholds.",
  },
  {
    heading: "Evaluate samples and variants separately",
    body: "Sample-level checks can reveal high missingness, unexpected relatedness, ancestry outliers, sex discrepancies, or contamination. Variant-level checks often include call rate, allele frequency, Hardy–Weinberg equilibrium, imputation quality, and consistency across batches. Examining both levels prevents a small number of problematic samples or variants from distorting downstream results.",
  },
  {
    heading: "Look for technical structure",
    body: "Batch, array, sequencing center, processing date, and study site can introduce patterns unrelated to biology. Comparing missingness, allele frequencies, and principal components across technical groups can expose these effects. Technical covariates may need to be modeled, corrected, or investigated before datasets are combined.",
  },
  {
    heading: "Document every decision",
    body: "A reliable quality-control workflow records the original sample and variant counts, the threshold used at each step, and the number of records removed. Version-controlled code, summary tables, and diagnostic plots make exclusions auditable and allow the same process to be applied consistently when new data arrive.",
  },
  {
    heading: "Validate the analysis-ready dataset",
    body: "Quality control does not end after filtering. Recalculate summary statistics, inspect principal components and distributions, confirm identifiers and genome build, and verify that expected samples and variants remain. These final checks establish a trustworthy starting point for downstream inference.",
  },
];

const GenomicDataQualityControl = () => (
  <BlogArticle
    category="Genomic Data Analysis"
    title="Quality Control for Genomic Data: From Raw Variants to Reliable Analysis"
    date="July 27, 2026"
    introduction="Genomic datasets can contain missing calls, batch effects, sample mix-ups, population structure, and low-confidence variants. Quality control is the process of identifying these issues before they influence scientific conclusions. A strong workflow does more than filter data: it connects each decision to the study design and creates a transparent record of how the analysis-ready dataset was produced."
    tips={[
      "Record sample and variant counts before and after every quality-control step.",
      "Review diagnostic distributions and plots instead of applying thresholds without context.",
      "Keep exclusions reproducible through version-controlled code and configuration files.",
    ]}
    learningOutcomes={[
      "Distinguish sample-level, variant-level, and batch-related quality concerns.",
      "Understand why quality-control thresholds should reflect the dataset and analytical goal.",
      "Recognize the importance of validating the dataset again after filtering.",
    ]}
    useCases={[
      "Preparing genotype or sequencing data for GWAS, polygenic risk scores, or statistical genetics.",
      "Combining cohorts, genotyping arrays, sequencing batches, or study sites.",
      "Creating an auditable analysis-ready dataset for collaborative biomedical research.",
    ]}
    sections={sections}
  />
);

export default GenomicDataQualityControl;
