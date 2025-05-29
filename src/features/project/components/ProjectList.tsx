import React from "react";
import { ProjectItems } from "../data/projectItem";
import ProjectItemComponent from "./ProjectItem";
import { filteringAtom } from "../../../shared/atom/filteringAtom";
import { useAtomValue } from "jotai";

const ProjectListComponent: React.FC = () => {
  const filtering = useAtomValue(filteringAtom);

  const filteredItems = ProjectItems.filter((item) => {
    if (filtering === "ALL") return true;
    return item.type === filtering;
  });

  return (
    <div className="grid gap-x-8 gap-y-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      {filteredItems.map((item) => (
        <ProjectItemComponent item={item} />
      ))}
    </div>
  );
};

export default ProjectListComponent;
