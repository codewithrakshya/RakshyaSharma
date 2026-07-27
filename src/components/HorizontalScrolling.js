import React from "react";
import { useViewportScroll, useTransform, motion } from "framer-motion";

const HorizontalScroll = () => {
  const { scrollYProgress } = useViewportScroll();
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;

  const moveRight = useTransform(
    scrollYProgress,
    [0, 1],
    [-screenWidth, screenWidth - 400]
  );
  const moveLeft = useTransform(
    scrollYProgress,
    [0, 1],
    [screenWidth - 400, -screenWidth]
  );

  const wordsRight = Array(20).fill("Code Design Solve Build ").join("");
  const wordsLeft = Array(20).fill("Innovate Learn Discover Advance ").join("");

  return (
    <div className="pb-48 bg-black ">
      <div className="w-full pb-10 overflow-hidden">
        <motion.div
          style={{ x: moveRight }}
          className="font-serif text-5xl text-white duration-75 ease-in-out lg:text-8xl whitespace-nowrap"
        >
          {wordsRight}
        </motion.div>
      </div>
      <div className="w-full overflow-hidden">
        <motion.div
          style={{ x: moveLeft }}
          className="font-serif text-5xl text-white duration-75 ease-in-out lg:text-8xl whitespace-nowrap"
        >
          {wordsLeft}
        </motion.div>
      </div>
    </div>
  );
};

//export default HorizontalScroll;
