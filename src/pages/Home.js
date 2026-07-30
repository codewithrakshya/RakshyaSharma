import React from "react";
import {
  HiChevronDown,
  HiOutlineSpeakerWave,
  HiSparkles,
} from "react-icons/hi2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import { faDownload, faFile } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const scrollTo = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
    });
  };

  const handlePronounce = () => {
    const utterance = new SpeechSynthesisUtterance(
      "Rakshya Sharma"
    );
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      id="MyBioPage"
      className="relative flex items-center justify-center w-full min-h-[calc(100vh-5rem)] px-6 py-20 overflow-hidden text-center bg-gradient-to-br from-white via-indigo-50/30 to-teal-50/50"
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 border rounded-full -left-24 top-24 border-indigo-200/60" />
        <div className="absolute w-96 h-96 border rounded-full -right-40 bottom-10 border-teal-200/60" />
        <div className="absolute w-3 h-3 bg-rose-400 rounded-full left-[12%] top-[38%] shadow-[34px_42px_0_#5eead4,72px_-18px_0_#c4b5fd]" />
        <div className="absolute w-3 h-3 bg-indigo-300 rounded-full right-[15%] top-[30%] shadow-[-42px_48px_0_#67e8f9,38px_72px_0_#fda4af]" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl gap-7 pb-12 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-xs font-bold tracking-widest text-indigo-900 uppercase bg-white border border-indigo-100 rounded-2xl shadow-sm sm:text-sm sm:rounded-full"
        >
          {["Data", "Bioinformatics", "Reproducibility"].map((label) => (
            <span key={label} className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full" />
              {label}
            </span>
          ))}
        </motion.div>

        <div className="max-w-5xl">
          <p className="mb-3 text-lg font-semibold tracking-wide text-indigo-700 md:text-xl">
            Hi, I’m
          </p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1.0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl font-bold leading-[0.95] tracking-tight text-indigo-950 md:text-7xl lg:text-8xl"
          >
            Rakshya Sharma
            <button
              onClick={handlePronounce}
              className="inline-flex items-center ml-3 align-middle transition-colors hover:text-indigo-700"
              aria-label="Hear how Rakshya Sharma is pronounced"
              title="Hear pronunciation"
            >
              <HiOutlineSpeakerWave className="w-7 h-7 md:w-9 md:h-9" />
            </button>
          </motion.h1>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl text-xl leading-relaxed text-gray-700 md:text-2xl"
        >
          Data analyst and bioinformatician translating complex biomedical data
          into reproducible, interpretable insights.
        </motion.h2>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Resume Button */}
          <motion.a
            href="/Rakshya_Sharma_CV_2026-07-28.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center min-w-[116px] px-5 py-2 font-bold text-white transition transform bg-indigo-900 border-2 border-indigo-900 rounded-full hover:scale-105 hover:bg-indigo-800"
          >
            CV <FontAwesomeIcon icon={faDownload} className="ml-2" />
          </motion.a>

          {/* Contact Button */}
          <motion.button
            type="button"
            onClick={() => scrollTo("letsconnect")}
            className="flex items-center justify-center min-w-[116px] px-5 py-2 font-bold text-indigo-950 transition transform bg-white border-2 border-indigo-900 rounded-full cursor-pointer hover:scale-105 hover:bg-indigo-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
          >
            <FontAwesomeIcon icon={faFile} className="mr-2" />
            Contact
          </motion.button>

          {/* AI Avatar Button */}
          <motion.button
            type="button"
            onClick={() => scrollTo("ai-avatar")}
            className="flex items-center justify-center min-w-[116px] px-5 py-2 font-bold text-indigo-950 transition transform bg-indigo-100 border-2 border-indigo-200 rounded-full cursor-pointer hover:scale-105 hover:bg-indigo-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
          >
            <HiSparkles className="w-5 h-5 mr-2" />
            Ask my AI
          </motion.button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo("about")}
        className="absolute flex flex-col items-center gap-1 text-sm font-semibold tracking-wide text-indigo-950 uppercase transition-colors cursor-pointer bottom-5 hover:text-indigo-700"
        aria-label="Scroll to About Me"
      >
        <span>Explore</span>
        <HiChevronDown className="w-7 h-7 animate-bounce" />
      </button>
    </div>
  );
};

export default Home;
