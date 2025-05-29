import React from "react";
import { AwardItems } from "../data/awardItem";

const AwardComponent: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {AwardItems.map((item) => (
        <div key={item.title} className="flex flex-row gap-x-4">
          <p className="textMd text-contentWhite whitespace-nowrap">
            {item.date}
          </p>
          <p className="textMd text-contentWhite">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AwardComponent;
