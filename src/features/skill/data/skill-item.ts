import { Skill } from "../type/skill";

export const SkillItems: Skill[] = [
  {
    title: "Language",
    items: [
      { name: "C++", percentage: 60, icon: "./skill/C++.png" },
      { name: "HTML", percentage: 80, icon: "./skill/HTML.png" },
      { name: "CSS", percentage: 75, icon: "./skill/CSS.png" },
      { name: "JavaScript", percentage: 80, icon: "./skill/JavaScript.png" },
      { name: "TypeScript", percentage: 80, icon: "./skill/TypeScript.png" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", percentage: 90, icon: "./skill/React.png" },
      { name: "Next.js", percentage: 60, icon: "./skill/Next.png" },
      { name: "Gatsby.js", percentage: 60, icon: "./skill/Gatsby.png" },
      {
        name: "React Native",
        percentage: 80,
        icon: "./skill/React Native.png",
      },
      { name: "expo", percentage: 75, icon: "./skill/expo.png" },
      { name: "shadcn/ui", percentage: 50, icon: "./skill/shadcn.png" },
      { name: "tailwindcss", percentage: 85, icon: "./skill/tailwindcss.png" },
      {
        name: "styled-components",
        percentage: 80,
        icon: "./skill/styled-components.png",
      },
      {
        name: "TanStack Query",
        percentage: 70,
        icon: "./skill/Tanstack Query.png",
      },
      { name: "zustand", percentage: 75, icon: "./skill/zustand.png" },
      { name: "Recoil", percentage: 70, icon: "./skill/Recoil.png" },
      { name: "Redux", percentage: 70, icon: "./skill/Redux.png" },
      { name: "jotai", percentage: 30, icon: "./skill/jotai.png" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "express", percentage: 50, icon: "./skill/express.png" },
      { name: "MySQL", percentage: 50, icon: "./skill/MySQL.png" },
    ],
  },
  {
    title: "Tools & Collaboration",
    items: [
      { name: "Git", percentage: 70, icon: "./skill/Git.png" },
      { name: "Github", percentage: 70, icon: "./skill/Github.png" },
      { name: "Jira", percentage: 40, icon: "./skill/Jira.png" },
      { name: "Notion", percentage: 80, icon: "./skill/Notion.png" },
      { name: "Figma", percentage: 70, icon: "./skill/Figma.png" },
      { name: "vite", percentage: 80, icon: "./skill/vite.png" },
      { name: "Vercel", percentage: 70, icon: "./skill/Vercel.png" },
    ],
  },
];
