import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  projectNumber: string;
  imageSource: string;
  tech1: string;
  tech2: string;
  tech3: string;
  githubLink: string;
  liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  projectNumber,
  imageSource,
  tech1,
  tech2,
  tech3,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="mb-40 md:mb-60 flex flex-col text-main2">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
        <div className="w-[400px] md:w-[350px] lg:w-2/3 lg:max-w-[400px] flex flex-row justify-start py-4 md:py-0 mr-4">
          <p className="left-10"></p>
          <img
            src={imageSource}
            alt="Project Image"
            width={600}
            height={600}
            style={{ flexGrow: 0 }}
          />
        </div>
        <div className="flex flex-col text-5xl md:items-end">
          <p className="font-extrabold text-8xl lg:text-9xl opacity-50 text-left md:text-center hidden md:block">
            {projectNumber}
          </p>
          <div className="flex text-sm border-solid text-yellow opacity-50 md:mt-4  md:justify-center">
            <p className="border-solid border-yellow border-2 py-1 px-2 mr-2 rounded-md min-w-20 my-1">
              {tech1}
            </p>
            <p className="border-solid border-yellow border-2 py-1 px-2 mx-2 rounded-md min-w-24 my-1 ">
              {tech2}
            </p>
            <p className="border-solid border-yellow border-2 py-1 px-2 ml-2 rounded-md min-w-20 my-1">
              {tech3}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="md:flex text-left md:flex-col">
          <p className="text-white font-bold text-xl sm:text-3xl mt-4">
            {title}
          </p>
          <div className="md:flex-row">
            <p className="text-sm sm:text-base opacity-75">{description}</p>
            <ul className="flex md:justify-end space-x-5 text-sm text-yellow mt-4">
              <li>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity duration-300 hover:opacity-75"
                >
                  <div className="flex items-center text-center justify-center w-8 h-8 sm:w-12 sm:h-12 sm:text-xl md:text-2xl rounded-full bg-secondary1">
                    <FontAwesomeIcon icon={faGithub} size="xs" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity duration-300 hover:opacity-75"
                >
                  <div className="flex items-center text-center justify-center w-8 h-8 sm:w-12 sm:h-12 sm:text-xl md:text-2xl rounded-full bg-secondary1">
                    <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
