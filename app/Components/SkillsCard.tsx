import React from "react";

interface SkillsCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="w-4/5 shadow-lg overflow-hidden bg-main3 align-middle text-center mx-auto rounded-md mb-40 hover:-translate-x-2 hover:-translate-y-2 transition duration-300 ease-in-out">
      <div
        className="h-48 w-3/4 mx-auto mt-4 bg-center"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "200px", // Set fixed width
          height: "200px", // Set fixed height
        }}
      ></div>
      <div className="p-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>{" "}
        {/* Title section */}
        <p className="text-main2 text-sm text-center align-middle mx-6 my-8">
          {description}
        </p>{" "}
        {/* Description section */}
      </div>
    </div>
  );
};

export default SkillsCard;
