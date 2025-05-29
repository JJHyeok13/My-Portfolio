import React from "react";
import { ActivityItems } from "../data/activityItem";

const ActivityComponent: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {ActivityItems.map((item) => (
        <div className="flex flex-col gap-y-4">
          <p className="textXlgBold text-subTitleWhite">{item.title}</p>
          <div className="flex flex-col gap-y-4">
            {item.list.map((value, index) => (
              <div key={index} className="flex flex-row gap-x-4">
                <p className="textMd text-contentWhite whitespace-nowrap">
                  {value.date}
                </p>
                <p className="textMd text-contentWhite">
                  {value.period}th {value.part && `${value.part} 파트 수료`}
                  {value.part && value.admin && " 및 "}
                  {value.admin && value.admin}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityComponent;
