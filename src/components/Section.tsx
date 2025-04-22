import React from "react";
import SectionTitle from "./SectionTitle";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <SectionTitle title={title} />
      <div className="w-full">{children}</div>
    </section>
  );
};

export default Section;
