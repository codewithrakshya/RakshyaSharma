import React from "react";
import BlogArticle from "./BlogArticle";

const sections = [
  {
    heading: "From variants to a score",
    body: "A polygenic risk score combines effect estimates from many genetic variants with an individual’s genotype dosages. Before scoring, summary statistics and target genotypes must be aligned by genome build, allele orientation, variant identity, and quality-control criteria.",
  },
  {
    heading: "Why shrinkage and linkage disequilibrium matter",
    body: "Nearby variants are often correlated through linkage disequilibrium. Methods such as PRS-CS model those correlations and shrink uncertain effects, helping avoid the instability that can arise when thousands of noisy estimates are combined directly.",
  },
  {
    heading: "Validation is essential",
    body: "A score should be evaluated in data that were not used to estimate its weights. Useful checks include predictive performance, calibration, confidence intervals, and comparisons across demographic or ancestry groups.",
  },
  {
    heading: "Interpretation requires restraint",
    body: "A polygenic score is neither a diagnosis nor a deterministic prediction. Its meaning depends on the population, phenotype definition, reference data, and non-genetic context. Transparent reporting is as important as the calculation itself.",
  },
];

const PolygenicRiskScores = () => (
  <BlogArticle
    category="Statistical Genetics"
    title="Understanding Polygenic Risk Scores"
    introduction="Complex traits are influenced by many genetic variants, each usually contributing a small amount. Polygenic risk scores summarize those distributed effects into one measure, but producing a reliable score requires careful data preparation, modeling, and validation."
    tips={[
      "Confirm genome build, effect alleles, and variant identifiers before calculating a score.",
      "Validate performance and calibration in data that were not used to estimate the variant weights.",
    ]}
    learningOutcomes={[
      "Understand how many small genetic effects are combined into one score.",
      "Recognize how linkage disequilibrium, ancestry, and reference data affect performance.",
    ]}
    useCases={[
      "Risk stratification and research into complex traits or disease susceptibility.",
      "Comparing genetic risk distributions across cohorts while accounting for population context.",
    ]}
    sections={sections}
  />
);

export default PolygenicRiskScores;
