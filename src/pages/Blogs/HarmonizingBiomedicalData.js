import React from "react";

const HarmonizingBiomedicalData = () => {
  return (
    <article className="max-w-4xl min-h-screen px-6 pt-28 pb-16 mx-auto">
      <p className="font-semibold tracking-widest text-indigo-700 uppercase">
        Data Analysis
      </p>
      <h1 className="mt-3 text-4xl font-bold md:text-5xl">
        A Practical Approach to Harmonizing Biomedical Data
      </h1>
      <p className="mt-3 text-gray-500">
        July 2026 · Rakshya Ujhanthachhen Sharma
      </p>

      <div className="mt-10 space-y-7 text-lg leading-relaxed text-gray-700">
        <p>
          Combining clinical, phenotype, biomarker, and genomic datasets often
          requires more work than the final statistical analysis. Variables
          that appear equivalent may use different definitions, units, coding
          systems, or collection windows across studies.
        </p>

        <aside className="p-6 border border-indigo-200 bg-indigo-50 rounded-2xl">
          <h2 className="text-xl font-bold text-indigo-950">
            Applied perspective
          </h2>
          <ul className="mt-3 space-y-2 list-disc list-inside text-indigo-950">
            <li>I have harmonized and validated more than 30 heterogeneous datasets.</li>
            <li>I document variable definitions, transformations, and merge diagnostics.</li>
            <li>I treat data quality as a scientific question, not only a preprocessing task.</li>
          </ul>
        </aside>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Begin with a data dictionary
          </h2>
          <p>
            Record each variable’s source name, intended meaning, type, units,
            missing-value codes, and transformation rules. This creates an
            auditable map between the original datasets and the harmonized
            analytical variables.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Standardize identifiers carefully
          </h2>
          <p>
            Sample and participant identifiers should be checked for duplicate
            values, formatting changes, and one-to-many relationships before
            joining tables. Merge diagnostics are essential: every unmatched
            or duplicated record should have an explainable reason.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Make transformations explicit
          </h2>
          <p>
            Unit conversions, category mappings, derived variables, and
            exclusion criteria should be implemented as version-controlled
            code. Preserving the raw fields alongside transformed versions
            makes review and troubleshooting much easier.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Validate before modeling
          </h2>
          <p>
            Compare distributions and missingness by source dataset, inspect
            implausible values, and summarize how many records are affected by
            each processing decision. These checks reveal study-specific
            artifacts that a pooled analysis might otherwise hide.
          </p>
        </section>
      </div>
    </article>
  );
};

export default HarmonizingBiomedicalData;
