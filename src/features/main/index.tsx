import React from "react";
import { TypeAnimation } from "react-type-animation";

const MainSection: React.FC = () => {
  return (
    <section
      id="Home"
      className="min-h-dvh flex flex-col justify-center items-center gap-y-4 bg-black"
    >
      <div className="border border-titleWhite px-10 py-2">
        <TypeAnimation
          sequence={[
            "도전하는",
            2000,
            "소통을 중시하는",
            2000,
            "사용자 경험이 최우선인",
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="inline-block text-white mainText text-center"
        />
      </div>
      <p className="text-titleWhite mainText text-center">프론트엔드 개발자</p>
      <p className="text-titleWhite mainText text-center">
        <span className="font-bold">정진혁</span>입니다.
      </p>
    </section>
  );
};

export default MainSection;
