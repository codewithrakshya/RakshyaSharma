import React, { useState, useEffect } from "react";
import blogData from "./blog.json";
import { Link } from "react-router-dom";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  return (
    <div className="container px-6 py-10 pt-24 mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="overflow-hidden transition-transform transform border border-gray-300 rounded-lg shadow-md hover:scale-105"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-600">{blog.date}</p>

              <Link
                to={`/blog/${blog.id}`}
                className="inline-block mt-3 font-bold text-blue-500 hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
