import { Project } from "../type/project";

export const ProjectItems: Project[] = [
  {
    type: "PERSONAL",
    title: "포트폴리오 사이트",
    subtitle: "Gatsby 학습 및 개인 포트폴리오 제작",
    icon: "/project/portfolio.png",
    skills: ["TypeScript", "React", "Gatsby"],
  },
  {
    type: "TEAM",
    title: "dice",
    subtitle: "소상공인 · 자영업자를 위한 팝업 운영 올인원 솔루션",
    icon: "/project/dice.png",
    skills: ["TypeScript", "React", "expo"],
  },
  {
    type: "TEAM",
    title: "cozymate",
    subtitle: "룸메이트 매칭 및 생활 종합 관리 폐쇄형 커뮤니티 서비스",
    icon: "/project/cozymate.png",
    skills: ["TypeScript", "React", "expo"],
  },
  {
    type: "TEAM",
    title: "READ.ME",
    subtitle: "공지를 읽지 않는 멤버를 위한 서비스",
    description:
      "공지를 안 읽는 멤버들을 관리해 주는, 지친 운영진을 위한 공지 확인 서비스입니다.",
    icon: "/project/readme.png",
    skills: ["JavaScript", "express"],
  },
  {
    type: "TEAM",
    title: "gradu-inha",
    subtitle: "인하대학교 졸업 요건 확인 서비스",
    icon: "/project/gradu-inha.png",
    skills: ["TypeScript", "React", "vite"],
  },
  {
    type: "TEAM",
    title: "Tube Slice",
    subtitle: "Youtube 동영상 스크립트 생성 서비스",
    icon: "/project/tube-slice.png",
    skills: ["TypeScript", "React", "vite"],
  },
];
