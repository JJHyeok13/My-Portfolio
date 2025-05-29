import React from "react";

export const renderSkillIcons = (
  skill: string,
  width: number,
  height: number
) => {
  if (skill === "shadcn/ui") {
    return <img src={`/skill/shadcn.png`} width={width} height={height} />;
  }

  return <img src={`/skill/${skill}.png`} width={width} height={height} />;
};
