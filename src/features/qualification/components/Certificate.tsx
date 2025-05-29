import React from "react";
import { CertificateItems } from "../data/certificateItem";

const CertificateComponent: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {CertificateItems.map((item) => (
        <div key={item.title} className="flex flex-row gap-x-4">
          <p className="textMd text-contentWhite">{item.date}</p>
          <p className="textMd text-contentWhite">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CertificateComponent;
