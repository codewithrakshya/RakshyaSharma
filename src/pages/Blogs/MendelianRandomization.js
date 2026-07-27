import React from "react";
import BlogArticle from "./BlogArticle";

const sections = [
  {
    heading: "Genetic variants as instruments",
    body: "Mendelian randomization uses variants associated with an exposure as instrumental variables. Because alleles are assigned before most later-life behaviors and outcomes, they can sometimes reduce confounding that complicates conventional observational analyses.",
  },
  {
    heading: "Three assumptions support the design",
    body: "The instruments must predict the exposure, remain independent of exposure–outcome confounders, and affect the outcome only through the exposure. Violations—especially horizontal pleiotropy—can bias the causal estimate.",
  },
  {
    heading: "Harmonization comes before estimation",
    body: "Exposure and outcome summary statistics must refer to the same effect allele. Ambiguous variants, strand differences, incompatible genome builds, correlated instruments, and weak associations should be addressed before fitting a model.",
  },
  {
    heading: "Sensitivity analyses build credibility",
    body: "Comparing estimators, testing heterogeneity, checking for directional pleiotropy, and performing leave-one-out analyses can reveal whether a result depends on a particular assumption or influential variant. The strongest conclusions come from converging evidence.",
  },
];

const MendelianRandomization = () => (
  <BlogArticle
    category="Genetic Epidemiology"
    title="Mendelian Randomization: From Association to Causal Evidence"
    introduction="Observational associations do not automatically establish causality. Mendelian randomization uses genetic instruments to ask whether an exposure may causally influence an outcome, while making assumptions that must be examined carefully."
    tips={[
      "Check instrument strength, allele alignment, and sample overlap before estimating an effect.",
      "Use multiple sensitivity analyses rather than relying on one estimator.",
    ]}
    learningOutcomes={[
      "Distinguish observational association from evidence that supports a causal interpretation.",
      "Identify the core instrumental-variable assumptions and common sources of bias.",
    ]}
    useCases={[
      "Prioritizing potentially modifiable exposures for follow-up studies or clinical trials.",
      "Evaluating causal hypotheses with GWAS summary statistics when randomized trials are impractical.",
    ]}
    sections={sections}
  />
);

export default MendelianRandomization;
