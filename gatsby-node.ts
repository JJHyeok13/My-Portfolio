import path from "path";
import type { GatsbyNode } from "gatsby";
import { ProjectDetailItems } from "./src/features/projectDetail/data/projectItem";

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve(
    "./src/features/projectDetail/index.tsx"
  );

  ProjectDetailItems.forEach((project) => {
    createPage({
      path: `/projects/${project.slug}`,
      component: projectTemplate,
      context: {
        slug: project.slug,
        mainColor: project.mainColor,
        icon: project.icon,
        title: project.title,
        description: project.description,
        date: project.date,
        member: project.member,
        background: project.background,
        skills: project.skills,
        role: project.role,
        references: project.references,
      },
    });
  });
};
