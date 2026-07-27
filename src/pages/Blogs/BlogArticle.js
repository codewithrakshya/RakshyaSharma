import React from "react";

const BlogArticle = ({
  category,
  title,
  introduction,
  sections,
  keyTakeaways = [],
}) => (
  <article className="max-w-4xl min-h-screen px-6 pt-28 pb-16 mx-auto">
    <p className="font-semibold tracking-widest text-indigo-700 uppercase">
      {category}
    </p>
    <h1 className="mt-3 text-4xl font-bold md:text-5xl">{title}</h1>
    <p className="mt-3 text-gray-500">July 2026 · Rakshya U. Sharma</p>

    <div className="mt-10 space-y-7 text-lg leading-relaxed text-gray-700">
      <p>{introduction}</p>
      {keyTakeaways.length > 0 && (
        <aside className="p-6 border border-indigo-200 bg-indigo-50 rounded-2xl">
          <h2 className="text-xl font-bold text-indigo-950">
            Key considerations
          </h2>
          <ul className="mt-3 space-y-2 list-disc list-inside text-indigo-950">
            {keyTakeaways.map((takeaway) => (
              <li key={takeaway}>{takeaway}</li>
            ))}
          </ul>
        </aside>
      )}
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            {section.heading}
          </h2>
          <p>{section.body}</p>
        </section>
      ))}
    </div>
  </article>
);

export default BlogArticle;
