import AWSInterview from "./AWS_Interview";
import { useParams } from "react-router-dom";
import React from "react";

const blogComponents = {
  "aws-interview": AWSInterview,
};

const BlogPost = () => {
  const { id } = useParams();
  const SelectedBlog = blogComponents[id];

  if (!SelectedBlog) {
    return <div>Blog post not found.</div>;
  }

  return <SelectedBlog />;
};

export default BlogPost;
