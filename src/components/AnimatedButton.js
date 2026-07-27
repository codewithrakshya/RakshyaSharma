import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ScrollLink } from "react-scroll";

function AnimatedButton({
  button_name,
  button_icon,
  button_link = "",
  isLink = false,
}) {
  const commonClasses =
    "flex items-center px-4 py-2 font-bold transition duration-500 ease-in-out transform border-2 border-black text-l lg:text-xl rounded-3xl bg-gradient-to-r hover:-translate-y-1 hover:scale-110";
  console.log("this is working");
  if (isLink) {
    // For scroll-based internal navigation, wrap the whole button in a ScrollLink.
    return (
      <ScrollLink
        to={button_link}
        spy={true}
        smooth={true}
        offset={-20}
        duration={500}
      >
        <motion.div
          className={commonClasses}
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          <FontAwesomeIcon icon={button_icon} className="mr-2" />
          {button_name}
        </motion.div>
      </ScrollLink>
    );
  } else {
    return (
      <motion.button
        className={commonClasses}
        onClick={() => {
          if (button_link) {
            window.open(button_link, "_blank");
          }
        }}
        whileHover={{
          scale: 1.2,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
      >
        <FontAwesomeIcon icon={button_icon} className="mr-2" />
        {button_name}
      </motion.button>
    );
  }
}

export default AnimatedButton;
