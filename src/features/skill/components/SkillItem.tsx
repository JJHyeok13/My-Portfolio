import React, { useEffect, useState } from "react";
import { Skill } from "../type/skill";
import { renderSkillIcons } from "../../../shared/utils/renderSkillIcon";

interface SkillItemComponentProps {
  data: Skill;
}

const SkillItemComponent: React.FC<SkillItemComponentProps> = ({ data }) => {
  const [iconSize, setIconSize] = useState(32); // 기본값 설정

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setIconSize(20); // 모바일
      } else if (width < 1024) {
        setIconSize(28); // 태블릿
      } else {
        setIconSize(32); // 데스크탑
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-y-4">
      <p className="textXlgBold text-subTitleWhite">{data.title}</p>
      <div className="flex flex-row flex-wrap gap-4">
        {data.items.map((item) => (
          <div className="flex flex-row items-center py-1.5 px-3 bg-[#F7F9FB] rounded-3xl ">
            {renderSkillIcons(item.name, iconSize, iconSize)}
            <div className="bg-gray-400 w-[1px] mx-2 py-3" />
            <p className="text-mainColor textMd font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillItemComponent;
