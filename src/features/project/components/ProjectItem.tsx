import React from "react";
import { Link } from "gatsby";
import { Project } from "../type/project";
import { renderProjectImages } from "../../../shared/utils/renderProjectImage";

interface ProjectItemComponentProps {
  item: Project;
}

const ProjectItemComponent: React.FC<ProjectItemComponentProps> = ({
  item,
}) => {
  return (
    <Link to={`/projects/${item.title}`}>
      <div className="shadow-custom rounded-2xl bg-white pb-5 flex flex-col gap-y-4 hover:scale-105 transition-transform ease-in-out duration-500">
        {renderProjectImages(item.title)}

        <div className="flex flex-col px-5 gap-y-5">
          <div>
            <p className="titleSm">{item.title}</p>
            <p className="textLg text-[#777777] h-[54px]">{item.subtitle}</p>
          </div>

          <div className="flex flex-row flex-wrap gap-1">
            {item.skills.map((skill) => (
              <div
                key={skill}
                className="bg-[#808997] text-white caption px-3 py-1.5 rounded-xl"
              >
                #{skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItemComponent;
