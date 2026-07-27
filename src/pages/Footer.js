import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="flex justify-center pt-4">
      <footer className="flex flex-col items-center justify-around w-full md:flex-row">
        <h1 className="text-lg font-medium md:p-5">
          © {new Date().getFullYear()} Rakshya U. Sharma
        </h1>
        <div className="flex items-center gap-5 p-5">
          <a href="mailto:rakshyasharma09@gmail.com" aria-label="Email Rakshya">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/rakshyausharma"
            aria-label="Rakshya on LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
          </a>
          <a
            href="https://github.com/codewithrakshya"
            aria-label="Rakshya on GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
