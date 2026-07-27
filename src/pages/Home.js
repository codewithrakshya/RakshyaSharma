import React from "react";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { faDownload, faFile } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const handlePronounce = () => {
    const utterance = new SpeechSynthesisUtterance("Rakshya U. Sharma");
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      id="MyBioPage"
      className="relative z-50 flex flex-col items-center w-full min-h-screen space-y-6 overflow-hidden text-center bg-white "
    >
      {/* Profile Image */}
      <div className="overflow-hidden border-4 border-black rounded-full h-52 w-52 md:w-80 md:h-80 hover:border-blue-950">
        <img
          src="https://github.com/codewithrakshya.png"
          alt="Rakshya U. Sharma"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold md:text-6xl"
      >
        Hi, I'm Rakshya U. Sharma
        <button
          onClick={handlePronounce}
          className="inline-flex items-center ml-2"
        >
          <HiOutlineSpeakerWave className="w-6 h-6" />
        </button>
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-lg md:text-xl"
      >
        Data analyst and bioinformatician translating complex biomedical data
        into reproducible, interpretable insights.
      </motion.h2>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        {/* Resume Button */}
        <motion.a
          href="/RakshyaSharma_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 font-bold transition transform border-2 border-black rounded-3xl hover:scale-110"
        >
          Resume <FontAwesomeIcon icon={faDownload} className="ml-2" />
        </motion.a>

        {/* Contact Button */}
        <ScrollLink to="letsconnect" spy smooth duration={500}>
          <motion.div className="flex items-center px-4 py-2 font-bold transition transform border-2 border-black rounded-3xl hover:scale-110">
            <FontAwesomeIcon icon={faFile} className="mr-2" />
            Contact
          </motion.div>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Home;
