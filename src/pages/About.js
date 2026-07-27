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
                I work with genomic, clinical, public-health, and research data
                to build reproducible analyses and communicate interpretable
                findings.
              </p>
              <p className="mb-4">
                At the University of California, San Francisco, I analyze
                genetic, clinical, phenotype, and biomarker datasets to study
                modifiable risk factors and health outcomes in Alzheimer’s
                disease and aging populations. My work includes data
                harmonization, statistical modeling, polygenic risk-score
                analysis, workflow automation, and scientific reporting.
              </p>
              <p className="mb-4">
                As a UCSF PROPEL Post-Baccalaureate Scholar, I also participate
                in structured research mentorship, scientific communication,
                and professional development while preparing for advanced
                training in biomedical data science and statistical genetics.
              </p>
              <p className="mb-4">
                I earned a B.S. in Computer Science with a minor in
                Bioinformatics from UC Santa Cruz. Across UCSF, the UCSC
                Genomics Institute, the Broad Institute, and Lawrence Berkeley
                National Laboratory, I’ve collaborated with interdisciplinary
                teams on biomedical and computational research.
              </p>
              <div className="p-5 mt-3 border border-indigo-100 bg-indigo-50 rounded-2xl">
                <h3 className="mb-3 text-xl font-bold text-indigo-950">
                  Current Focus
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Alzheimer’s disease & aging",
                    "Statistical genetics",
                    "Polygenic risk scores",
                    "Biomedical data harmonization",
                    "Reproducible workflows",
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
