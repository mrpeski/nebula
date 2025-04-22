import React from "react";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <h1 className="text-xl sm:text-[28px] font-semibold text-center sm:text-left text-gray-800">
      {title}
    </h1>
  );
};

export default PageTitle;
