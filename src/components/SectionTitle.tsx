import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="sm:text-[22px] font-semibold text-soar-dark-blue mb-5">
      {title}
    </h2>
  );
};

export default SectionTitle;
