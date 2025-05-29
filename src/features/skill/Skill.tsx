import React from "react";
import MotionComponent from "../../shared/ui/motion";
import SkillListComponent from "./components/SkillList";

const SkillSection: React.FC = () => {
  return (
    // <MotionComponent>
    <section id="Skill" className="min-h-dvh mx-8 lg:mx-auto py-16">
      <p className="titleMd text-titleWhite mb-6">⚒️ My Skills</p>
      <SkillListComponent />
    </section>
    // </MotionComponent>
  );
};

export default SkillSection;
