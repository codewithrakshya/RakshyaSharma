import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we are at the very top of the page
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`absolute top-0 left-0 z-30 w-full transition-opacity duration-300  border-b-2 border-gray-200 border-dashed bg-gray-50 `}
    >
      <div className="flex justify-center p-4 ">
        <div className="flex justify-center">
          <ul className="flex flex-row gap-10">
            {["home", "blog", "portfolio"].map((link) => (
              <li key={link}>
                <Link
                  to={link === "home" ? "/" : `/${link}`}
                  className="pl-6 text-xl font-bold cursor-pointer hover:text-sky-700"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="justify-end flex-1 hidden gap-4 pr-4 md:flex">
          <a href="mailto:rakshyasharma09@gmail.com" aria-label="Email Rakshya">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl hover:text-blue-600" />
          </a>
          <a
            href="https://github.com/codewithrakshya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-xl hover:text-gray-700"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rakshyausharma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-xl hover:text-blue-700"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
