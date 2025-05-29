import React from "react";
import { SkillItems } from "../data/skill-item";
import SkillItemComponent from "./SkillItem";

const SkillListComponent: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-8">
      {SkillItems.map((data) => (
        <SkillItemComponent data={data} />
      ))}
    </div>
  );
};

export default SkillListComponent;
