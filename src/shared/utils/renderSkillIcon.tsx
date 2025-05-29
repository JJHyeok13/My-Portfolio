import React from "react";
import { withPrefix } from "gatsby";

export const renderSkillIcons = (
  skill: string,
  width: number,
  height: number
) => {
  if (skill === "shadcn/ui") {
    return (
      <img
        src={withPrefix(`/skill/shadcn.png`)}
        width={width}
        height={height}
      />
    );
  }

  if (skill === "Tanstack Query") {
    return (
      <img
        src={withPrefix(`/skill/TanstackQuery.png`)}
        width={width}
        height={height}
      />
    );
  }

  return (
    <img
      src={withPrefix(`/skill/${skill}.png`)}
      width={width}
      height={height}
    />
  );
};
