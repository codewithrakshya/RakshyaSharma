import ReproducibleWorkflows from "./ReproducibleWorkflows";
import HarmonizingBiomedicalData from "./HarmonizingBiomedicalData";
import PolygenicRiskScores from "./PolygenicRiskScores";
import SnakemakeOnHPC from "./SnakemakeOnHPC";
import MendelianRandomization from "./MendelianRandomization";
import GenomicDataQualityControl from "./GenomicDataQualityControl";
import ReliableGenomicWorkflows from "./ReliableGenomicWorkflows";
import { useParams } from "react-router-dom";
import React from "react";

const blogComponents = {
  "reliable-scalable-genomic-workflows": ReliableGenomicWorkflows,
  "reproducible-bioinformatics-workflows": ReproducibleWorkflows,
  "harmonizing-biomedical-data": HarmonizingBiomedicalData,
  "understanding-polygenic-risk-scores": PolygenicRiskScores,
  "snakemake-on-hpc": SnakemakeOnHPC,
  "mendelian-randomization-basics": MendelianRandomization,
  "genomic-data-quality-control": GenomicDataQualityControl,
};

const BlogPost = () => {
  const { id } = useParams();
  const SelectedBlog = blogComponents[id];

  if (!SelectedBlog) {
    return <div className="min-h-screen pt-32 text-center">Blog post not found.</div>;
  }

  return <SelectedBlog />;
};

export default BlogPost;
