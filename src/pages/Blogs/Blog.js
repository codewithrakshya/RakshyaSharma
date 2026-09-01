import React from "react";
import blogData from "./blog.json";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container px-6 py-10 pt-24 mx-auto">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="font-semibold tracking-widest text-indigo-700 uppercase">
          Ideas, evidence & perspective
        </p>
        <h1 className="mt-2 text-4xl font-bold md:text-5xl">
          Writing
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Essays and technical notes connecting biomedical research, data,
          public health, and the broader forces that shape health and equity.
        </p>
        <a
          href="https://rakshyau.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-5 font-bold text-indigo-700 hover:text-indigo-900 hover:underline"
        >
          Follow my writing on Substack ↗
        </a>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((blog) => (
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
              {blog.platform && (
                <p className="mb-2 text-xs font-bold tracking-widest text-indigo-700 uppercase">
                  Published on {blog.platform}
                </p>
              )}
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="mt-1 text-sm text-gray-500">{blog.date}</p>
              <p className="mt-3 leading-relaxed text-gray-600">
                {blog.excerpt}
              </p>

              {blog.externalUrl ? (
                <a
                  href={blog.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 font-bold text-indigo-700 hover:underline"
                >
                  Read on {blog.platform} ↗
                </a>
              ) : (
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-block mt-5 font-bold text-indigo-700 hover:underline"
                >
                  Read article →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
