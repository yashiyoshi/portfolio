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
    <div className="mb-40 md:mb-40 flex flex-col text-main2 p-4 rounded-lg transition duration-500 ease-in-out transform hover:bg-secondary1 hover:bg-opacity-50">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="w-[400px] md:w-[350px] lg:w-2/3 lg:max-w-[400px] flex flex-row justify-start py-4 md:py-0 mr-4 md:shadow-lg md:shadow-yellow/25 relative">
          {projectNumber === "01" && (
            <div className="absolute invisible lg:visible text-white -rotate-12 -translate-x-2 -translate-y-20">
              <p>my latest work!</p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                className="h-6 w-6 min-w-[24px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M212,32a12,12,0,0,1-12,12,84.09,84.09,0,0,0-84,84v67l27.51-27.52a12,12,0,0,1,17,17l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,0,1,17-17L92,195V128A108.12,108.12,0,0,1,200,20,12,12,0,0,1,212,32Z"></path>
              </svg>
            </div>
          )}
          <Image
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
          <div className="flex text-sm border-solid text-yellow md:mt-4 md:justify-center">
            {tech1 && (
              <p className="hover:opacity-100 opacity-50 transition duration-300 ease-in-out border-solid border-yellow border-2 py-1 px-2 mr-2 rounded-md min-w-20 my-1">
                {tech1}
              </p>
            )}
            {tech2 && (
              <p className="hover:opacity-100 opacity-50 transition duration-300 ease-in-out border-solid border-yellow border-2 py-1 px-2 mx-2 rounded-md min-w-24 my-1">
                {tech2}
              </p>
            )}
            {tech3 && (
              <p className="hover:opacity-100 opacity-50 transition duration-300 ease-in-out border-solid border-yellow border-2 py-1 px-2 ml-2 rounded-md min-w-20 my-1">
                {tech3}
              </p>
            )}
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
                  <div className="flex items-center text-center justify-center w-8 h-8 sm:w-12 sm:h-12 sm:text-xl md:text-2xl rounded-full bg-secondary1 hover:shadow-main1 hover:shadow-lg transition duration-500 ease-in-out">
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
                  <div className="flex items-center text-center justify-center w-8 h-8 sm:w-12 sm:h-12 sm:text-xl md:text-2xl rounded-full bg-secondary1 hover:shadow-main1 hover:shadow-lg transition duration-500 ease-in-out">
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
