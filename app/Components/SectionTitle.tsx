import Link from "next/link";
import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="text-main2 font-bold text-3xl py-16 md:py-32">
      <span className="text-yellow pr-2 absolute -translate-x-3 -translate-y-0.5">
        |
      </span>
      <span className="tracking-wider">{title}</span>
    </div>
  );
};

export default SectionTitle;
