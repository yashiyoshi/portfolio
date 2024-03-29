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
    <div className="mb-60 mt-20">
      <div className="bg-secondary2 w-1/3 h-80 items-center flex justify-between">
        <div className="items-center flex absolute left-80">
          <Image
            src="https://cdn.discordapp.com/attachments/555743204327030784/1222188037346168934/2AE14CDD-1265-470C-9B15F49024186C10_source.png?ex=66154e4f&is=6602d94f&hm=344a14d1f6835a63c39451bcd223d69463cb6b56b117a360ad0608bfaa087877&"
            alt={"Project Image"}
            width={400}
            height={250}
          ></Image>

        </div>
      </div>
      <div className=" text-left relative flex justify-between ">
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
      </div>
    </div>
  );
};
export default ProjectCard;