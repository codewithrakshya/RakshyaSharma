import React from "react";
import {
  HiChevronDown,
  HiOutlineSpeakerWave,
  HiSparkles,
} from "react-icons/hi2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import profilePhoto from "../Images/rakshya-sharma.png";
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
      className="relative flex items-center justify-center w-full min-h-[calc(100vh-5rem)] px-6 py-16 overflow-hidden text-center bg-gradient-to-b from-white via-white to-indigo-50/60"
    >
      <div className="flex flex-col items-center w-full max-w-6xl gap-6 pb-12 md:gap-7">
        {/* Profile Image */}
        <div className="overflow-hidden border-4 border-indigo-950 rounded-full shadow-lg h-52 w-52 md:w-72 md:h-72 lg:w-80 lg:h-80">
          <img
            src={profilePhoto}
            alt="Rakshya Sharma"
            className="object-cover object-center w-full h-full"
          />
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl text-4xl font-bold leading-tight md:text-6xl"
        >
          Hi, I'm Rakshya Sharma
          <button
            onClick={handlePronounce}
            className="inline-flex items-center ml-2 align-middle transition-colors hover:text-indigo-700"
            aria-label="Hear how Rakshya Sharma is pronounced"
            title="Hear pronunciation"
          >
            <HiOutlineSpeakerWave className="w-6 h-6" />
          </button>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl text-lg leading-relaxed text-gray-700 md:text-xl"
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
