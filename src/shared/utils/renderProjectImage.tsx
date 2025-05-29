import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const renderProjectImages = (title: string) => {
  switch (title) {
    case "포트폴리오 사이트":
      return (
        <StaticImage
          src="../../assets/images/projects/portfolio/main.png"
          alt="portfolio"
          style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
        />
      );
    case "dice":
      return (
        <StaticImage
          src="../../assets/images/projects/dice/title.png"
          alt="dice"
          style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
        />
      );
    case "cozymate":
      return (
        <StaticImage
          src="../../assets/images/projects/cozymate/title.png"
          alt="cozymate"
          style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
        />
      );
    case "READ.ME":
      return (
        <StaticImage
          src="../../assets/images/projects/READ.ME/title.png"
          alt="READ.ME"
          style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
        />
      );
    case "gradu-inha":
      return (
        <StaticImage
          src="../../assets/images/projects/gradu-inha/title.png"
          alt="READ.ME"
          style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
        />
      );
    case "Tube Slice":
      return (
        <StaticImage
          src="../../assets/images/projects/TubeSlice/title.png"
          alt="READ.ME"
          style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
        />
      );
    default:
      return null;
  }
};
