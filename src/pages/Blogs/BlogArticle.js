import React from "react";

const BlogArticle = ({
  category,
  title,
  date = "July 2026",
  introduction,
  sections,
  tips = [],
  learningOutcomes = [],
  useCases = [],
}) => (
  <article className="max-w-4xl min-h-screen px-6 pt-28 pb-16 mx-auto">
    <p className="font-semibold tracking-widest text-indigo-700 uppercase">
      {category}
    </p>
    <h1 className="mt-3 text-4xl font-bold md:text-5xl">{title}</h1>
    <p className="mt-3 text-gray-500">
      {date} · Rakshya Sharma
    </p>

    <div className="mt-10 space-y-7 text-lg leading-relaxed text-gray-700">
      <p>{introduction}</p>
      {(tips.length > 0 ||
        learningOutcomes.length > 0 ||
        useCases.length > 0) && (
        <aside className="p-6 border border-indigo-200 bg-indigo-50 rounded-2xl">
          {tips.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-indigo-950">
                Practical tips
              </h2>
              <ul className="mt-3 space-y-2 list-disc list-inside text-indigo-950">
                {tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
          {learningOutcomes.length > 0 && (
            <div className="mt-5">
              <h2 className="text-xl font-bold text-indigo-950">
                Learning outcomes
              </h2>
              <ul className="mt-3 space-y-2 list-disc list-inside text-indigo-950">
                {learningOutcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          )}
          {useCases.length > 0 && (
            <div className="mt-5">
              <h2 className="text-xl font-bold text-indigo-950">
                Where this is useful
              </h2>
              <ul className="mt-3 space-y-2 list-disc list-inside text-indigo-950">
                {useCases.map((useCase) => (
                  <li key={useCase}>{useCase}</li>
                ))}
              </ul>
            </div>
          )}
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
