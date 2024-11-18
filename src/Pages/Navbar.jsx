import React from "react";
import { Link } from "react-scroll";
import { NavbarLinks } from "../Constants";
import { motion } from "motion/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import MyIcon from "../assets/menu-grid.svg";

const Navbar = () => {
  return (
    <header className=" w-full p-3 ">
      <nav className="flex justify-between px-4 md:px-5 p-2 ">
        <div className="flex gap-2">
          <h2 className=" font-GreatVibes font-semibold text-xl">
            <span className=" text-blue-500 font-semibold text-4xl">Yash </span>{" "}
            Dev
          </h2>
        </div>
        <div className="gap-4 mr-5 hidden md:flex ">
          {NavbarLinks.map((item, index) => (
            <ul key={item.id}>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-lg group transition duration-300 hover:cursor-pointer"
              >
                <Link to={item.toLink} smooth={true} duration={500}>
                  {item.Link}
                </Link>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[4px] bg-sky-600"></span>
              </motion.li>
            </ul>
          ))}
        </div>
        <div className="md:hidden">
          <img src={MyIcon} className="h-10" />
        </div>

        <div className="flex mr-10 gap-3">
          <a
            href="https://linkedin.com/in/yaswanthpalivela"
            target="blank"
            className="text-white text-3xl hover:text-blue-700 mr-2"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/YaswanthPalivela"
            target="blank"
            className="text-white text-3xl hover:text-blue-700 mr-2s"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
