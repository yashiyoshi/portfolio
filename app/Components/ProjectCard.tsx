import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface ProjectCardProps {
  // title: string;
  // description: string;
  // projectNumber: number;
  // imageSource: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (
  {
    // title,
    // description,
    // projectNumber,
    // imageSource,
  }
) => {
  return (
    <div className="mb-60 flex flex-col text-main2">
      <div>
        <p className="left-10"></p>
        <Image
          src="https://placehold.co/800x600/png"
          alt="Project Image"
          width={800}
          height={600}
          className="md:w-[600px] md:h-[400px]"
        />
      </div>
      <div>
        <div className="md:flex text-left md:flex-col ">
          <p className="text-white font-semibold text-xl sm:text-3xl mt-4">
            Chi Boards Product Catalog Page
          </p>
          <div className="md:flex-row md:flex">
            <p className="text-sm sm:text-base opacity-75 sm:text-green-500 md:text-red-500">
              A product catalog page for the small business -- Chi Boards (owned
              by yours truly) :) Lorem ipsum dolor sit amet consectetur. Arcu
              volutpat posuere tristique proin. Mi donec iaculis ullamcorper
              posuere ligula. dlasjdlasjd dslaj dlkasjl kjdas dsa da djsah
              djaskd ahskjd hajk dah
            </p>
            <ul className="flex md:justify-end space-x-5 text-sm text-yellow mt-4">
              <li>
                <div className="flex items-center text-center justify-center w-8 h-8 sm:w-12 sm:h-12 sm:text-xl md:text-2xl md:ml-12 rounded-full bg-secondary1">
                  <FontAwesomeIcon icon={faGithub} size="xs" />
                </div>
              </li>
              <li>
                <div className="flex items-center text-center justify-center w-8 h-8 sm:w-12 sm:h-12 sm:text-xl md:text-2xl rounded-full bg-secondary1">
                  <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className=" text-left relative flex justify-between ">
        <h1 className=" text-3xl font-semibold flex">Lorem ipsum dolor sit</h1>
        <p className="absolute mr-40 top-6 -mt-3 indent-80 text-sm text-main2 opacity-75 flex">
          Lorem ipsum dolor sit amet consectetur. Arcu volutpat posuere
          tristique proin. Mi donec iaculis ullamcorper posuere ligula.
          dlasjdlasjd dslaj dlkasjl kjdas dsa da djsah djaskd ahskjd hajk dah
        </p>
        <ul className="flex space-x-5 text-sm text-yellow ">
          <li>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary1">
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary1">
              <FontAwesomeIcon icon={faUpRightFromSquare} size="1x" />
            </div>
          </li>
        </ul>
      </div> */}
    </div>
  );
};
export default ProjectCard;
