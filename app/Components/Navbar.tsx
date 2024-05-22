"use client";
import React from "react";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-main1 flex justify-between items-center my-4 sm:my-6 font-bold text-main2">
      <p className="text-4xl font-bold hover:text-yellow transition duration-300 ease-in-out">
        <span className="text-yellow text-4xl -translate-y-0.5 mr-0.5">.</span>
        yassir
      </p>

      <ul className="flex md:space-x-16 sm:space-x-12">
        <li className="hidden sm:flex">
          <span className="text-yellow text-xl -translate-y-0.5 mr-0.5">.</span>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-yellow transition duration-300 ease-in-out focus:outline-none"
          >
            projects
          </button>
        </li>
        <li className="hidden sm:flex">
          <span className="text-yellow text-xl -translate-y-0.5 mr-0.5">.</span>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-yellow transition duration-300 ease-in-out focus:outline-none"
          >
            skills
          </button>
        </li>
        <li className="hidden sm:flex">
          <span className="text-yellow text-xl -translate-y-0.5 mr-0.5">.</span>
          <button
            onClick={() => scrollToSection("contacts")}
            className="hover:text-yellow transition duration-300 ease-in-out focus:outline-none"
          >
            contacts
          </button>
        </li>
        {/* <li className="sm:hidden">
          <Link href="#">
            <div>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </div>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
