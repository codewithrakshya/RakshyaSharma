import ReproducibleWorkflows from "./ReproducibleWorkflows";
import HarmonizingBiomedicalData from "./HarmonizingBiomedicalData";
import { useParams } from "react-router-dom";
import React from "react";

const blogComponents = {
  "reproducible-bioinformatics-workflows": ReproducibleWorkflows,
  "harmonizing-biomedical-data": HarmonizingBiomedicalData,
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
