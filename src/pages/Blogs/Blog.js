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
            className="overflow-hidden transition-transform transform bg-white border border-gray-200 shadow-md rounded-2xl hover:-translate-y-1"
          >
            <div className="flex items-end h-40 p-6 bg-gradient-to-br from-indigo-900 via-indigo-700 to-sky-600">
              <span className="px-3 py-1 text-sm font-semibold text-indigo-900 bg-white rounded-full">
                {blog.category}
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="mt-1 text-sm text-gray-500">{blog.date}</p>
              <p className="mt-3 leading-relaxed text-gray-600">
                {blog.excerpt}
              </p>

              <Link
                to={`/blog/${blog.id}`}
                className="inline-block mt-5 font-bold text-indigo-700 hover:underline"
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
