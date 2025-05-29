import React from "react";
import MotionComponent from "../../shared/ui/motion";

import EducationComponent from "./components/Education";
import AwardComponent from "./components/Award";
import ActivityComponent from "./components/Activity";
import CertificateComponent from "./components/Certificate";

const QualificationSection: React.FC = () => {
  return (
    <MotionComponent>
      <section
        id="Qualification"
        className="min-h-dvh py-16 flex flex-1 flex-col mx-8 lg:mx-0"
      >
        <div className="flex-1 flex flex-col gap-y-8">
          <div className="flex flex-col py-4">
            <p className="titleMd text-[#EFEFF1] mb-6">🎓 Education</p>
            <EducationComponent />
          </div>

          <div className="flex flex-col py-4">
            <p className="titleMd text-[#EFEFF1] mb-6">🎒 Activities</p>
            <ActivityComponent />
          </div>

          <div className="flex flex-col py-4">
            <p className="titleMd text-[#EFEFF1] mb-6">🪪 Certificates</p>
            <CertificateComponent />
          </div>

          <div className="flex flex-col py-4">
            <p className="titleMd text-[#EFEFF1] mb-6">🏅 Awards</p>
            <AwardComponent />
          </div>
        </div>
      </section>
    </MotionComponent>
  );
};

export default QualificationSection;
