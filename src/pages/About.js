import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const slideVariants = {
    hidden: { x: 0, width: "100%" },
    visible: {
      x: "100%",
      width: "0%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // Animation controls and intersection observer hooks
  const controls = useAnimation();
  const controls1 = useAnimation();
  const Slidecontrols = useAnimation();
  const Slidecontrols1 = useAnimation();
  const [ref, inView] = useInView();
  const [refDesc, inViewDesc] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
      Slidecontrols.start("visible");
    }
    if (inViewDesc) {
      controls1.start("visible");
      Slidecontrols1.start("visible");
    }
  }, [controls, inView, inViewDesc, Slidecontrols, Slidecontrols1]);

  return (
    <section
      id="About"
      className="flex-row items-center min-h-screen px-4 py-8"
    >
      <div className="relative flex justify-center overflow-hidden">
        <div>
          <motion.h1
            className="flex justify-center mb-4 text-4xl font-bold md:text-5xl"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.25, delay: 0.3 }}
          >
            <div>About Me</div>
          </motion.h1>
          <motion.div
            initial="hidden"
            animate={Slidecontrols}
            variants={slideVariants}
            className="absolute top-0 bottom-0 left-0"
          ></motion.div>
        </div>
      </div>
      <div className="flex justify-center">
        {/* About Me Text */}
        <div className="w-full max-w-5xl">
          <div className="flex flex-col p-8">
            <motion.h2
              ref={refDesc}
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 0.25, delay: 0.3 }}
              className="flex flex-col font-sans text-lg "
            >
              <p className="mb-4">
                I’m a data analyst and bioinformatician based in San Francisco.
                My work brings together genomic, clinical, public-health, and
                research data to answer complex biomedical questions. I develop
                analyses from the initial data strategy, harmonization, and
                quality control through statistical modeling, validation,
                visualization, and scientific reporting.
              </p>
              <p className="mb-4">
                At the University of California, San Francisco, I develop and
                execute analyses that integrate genetic, clinical, phenotype,
                and biomarker datasets to investigate modifiable risk factors
                and health outcomes in Alzheimer’s disease and aging
                populations. I build reusable analytical workflows, establish
                data-quality and validation practices, conduct statistical and
                polygenic risk-score analyses, and translate findings for
                interdisciplinary collaborators and scientific audiences.
              </p>
              <p className="mb-4">
                My work has spanned UCSF, the UCSC Genomics Institute, the Broad
                Institute, and Lawrence Berkeley National Laboratory. These
                projects have included computational genomics, biomedical data
                analysis, scientific software, and image analysis, often
                requiring methods to be adapted across datasets, research
                settings, and computing environments. I collaborate with
                biological, clinical, and technical experts to move from raw
                data to well-supported results.
              </p>
              <p className="mb-4">
                I hold a B.S. in Computer Science with a minor in Bioinformatics
                from UC Santa Cruz, with a technical foundation spanning
                artificial intelligence, machine learning, predictive
                modeling, computer vision, and high-performance computing. I am
                also a UCSF PROPEL Post-Baccalaureate Scholar, where advanced
                research mentorship and scientific communication complement my
                work in biomedical data science and statistical genetics.
              </p>
              <div className="p-5 mt-3 border border-indigo-100 bg-indigo-50 rounded-2xl">
                <h3 className="mb-3 text-xl font-bold text-indigo-950">
                  Current Focus
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Computational biology",
                    "Population health data science",
                    "Epidemiologic data analysis",
                    "Statistical genetics",
                    "Prevention science",
                    "Aging & neurodegenerative disease",
                    "Health disparities",
                    "Biomedical data harmonization",
                    "Clinical, EHR & cohort data",
                    "Reproducible workflows",
                    "Multi-omics & high-dimensional data",
                    "Artificial intelligence & machine learning",
                    "Computer vision & image analysis",
                    "Predictive modeling",
                    "Translational genomics",
                    "Precision & public health",
                    "Implementation research",
                    "Global health research",
                    "High-performance computing",
                  ].map((focus) => (
                    <span
                      key={focus}
                      className="px-3 py-1 text-sm font-semibold text-indigo-900 bg-white rounded-full"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </motion.h2>
            <motion.div
              variants={{
                hidden: { left: 0 },
                visible: { left: "100%" },
              }}
              initial="hidden"
              animate={Slidecontrols1}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute left-0 right-0 top-4 bottom-4"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
