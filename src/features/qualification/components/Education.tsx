import React from "react";
import { EducationItems } from "../data/educationItem";

const EducationComponent: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {EducationItems.map((item) => (
        <div key={item.name} className="flex flex-row gap-x-4">
          <p className="textMd text-contentWhite whitespace-nowrap">
            {item.date}
          </p>
          <p className="textMd text-contentWhite">
            {item.name} {item.major && item.major} {item.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EducationComponent;
