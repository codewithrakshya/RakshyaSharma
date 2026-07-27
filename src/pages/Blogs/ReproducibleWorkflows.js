import React from "react";

const ReproducibleWorkflows = () => {
  return (
    <article className="max-w-4xl min-h-screen px-6 pt-28 pb-16 mx-auto">
      <p className="font-semibold tracking-widest text-indigo-700 uppercase">
        Scientific Computing
      </p>
      <h1 className="mt-3 text-4xl font-bold md:text-5xl">
        Building Reproducible Bioinformatics Workflows
      </h1>
      <p className="mt-3 text-gray-500">July 2026 · Rakshya U. Sharma</p>

      <div className="mt-10 space-y-7 text-lg leading-relaxed text-gray-700">
        <p>
          A bioinformatics analysis is more valuable when another researcher
          can understand it, rerun it, and obtain the same result. As datasets
          and pipelines grow, reproducibility depends on more than keeping a
          collection of scripts in the right order.
        </p>

        <aside className="p-6 border border-indigo-200 bg-indigo-50 rounded-2xl">
          <h2 className="text-xl font-bold text-indigo-950">
            Applied perspective
          </h2>
          <ul className="mt-3 space-y-2 list-disc list-inside text-indigo-950">
            <li>I make analytical dependencies and parameters explicit.</li>
            <li>I use versioned environments, logging, and validation to make results auditable.</li>
            <li>I design workflows that can move from local testing to high-performance computing.</li>
          </ul>
        </aside>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Describe the workflow as a dependency graph
          </h2>
          <p>
            Workflow engines such as Snakemake and Nextflow connect inputs,
            outputs, resources, and software requirements explicitly. This
            makes it possible to rerun only the steps affected by a change,
            parallelize independent jobs, and preserve a readable record of
            how the final results were produced.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Separate configuration from code
          </h2>
          <p>
            Cohort names, file locations, reference panels, and analysis
            parameters should live in versioned configuration files rather
            than being scattered through scripts. A clear configuration makes
            a workflow portable while keeping study-specific decisions visible.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Capture the computational environment
          </h2>
          <p>
            Conda environments and containers pin software dependencies and
            reduce differences between laptops, shared clusters, and future
            reruns. Combined with Git version control, they connect an analysis
            result to both the code and the environment that generated it.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Treat validation as part of the pipeline
          </h2>
          <p>
            Good workflows verify expected columns, sample counts, file
            formats, and output completeness at each stage. Logging and summary
            reports make failures easier to diagnose and help collaborators
            evaluate data quality before interpreting a result.
          </p>
        </section>
      </div>
    </article>
  );
};

export default ReproducibleWorkflows;
