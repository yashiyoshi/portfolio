import Link from "next/link";
import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="text-main2 font-bold text-3xl py-8 md:pb-24 md:pt-16 opacity-0 animate-fade-in-delay-1">
      <span className="text-yellow pr-2 absolute -translate-x-3 -translate-y-0.5">
        |
      </span>
      <span className="tracking-wider">{title}</span>
    </div>
  );
};

export default SectionTitle;
