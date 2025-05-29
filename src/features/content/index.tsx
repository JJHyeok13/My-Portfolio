import React from "react";
import SkillSection from "../skill/Skill";
import ProjectSection from "../project";
import QualificationSection from "../qualification";
import AboutMeSection from "../aboutMe";

const ContentSection: React.FC = () => {
  return (
    <section className="flex flex-col mx-auto bg-mainColor max-w-7xl py-16 gap-y-24 gap-x-6 lg:px-20">
      <AboutMeSection />
      <QualificationSection />
      <SkillSection />
      <ProjectSection />
    </section>
  );
};

export default ContentSection;
