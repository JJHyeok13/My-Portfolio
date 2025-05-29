import React from "react";
import { InfoItems } from "./data/infoItem";
import MotionComponent from "../../shared/ui/motion";
import { IntroduceItems } from "./data/introduceItem";
import { renderIcons } from "../../shared/utils/renderIcon";

const AboutMeSection: React.FC = () => {
  return (
    // <MotionComponent>
    <section
      id="AboutMe"
      className="min-h-dvh mx-8 lg:mx-auto py-16 space-y-16"
    >
      <div className="flex flex-col sm:flex-row gap-y-8 gap-x-16">
        {/* 사진 */}
        <img
          src="./picture.jpeg"
          className="aspect-[3/4] w-1/2 max-w-[300px] object-cover self-center"
          alt="사진"
        />
        <div className="flex flex-col justify-between">
          <div>
            <p className="titleMd text-titleWhite mb-6">🧑🏻‍💻 About Me</p>
            <div className="flex flex-col gap-y-4">
              {InfoItems.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-row items-center gap-x-4"
                >
                  <p className="textLgBold text-subTitleWhite">{item.title}</p>
                  <p className="textMd text-contentWhite">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-x-4 mt-6">
            <a href={"https://github.com/JJHyeok13"} target="_blank">
              <div className="bg-white p-1 rounded-lg">
                {renderIcons("Github")}
              </div>
            </a>
            <a href={"https://velog.io/@jjinh0213/posts"} target="_blank">
              <div className="bg-white p-1 rounded-lg">
                {renderIcons("velog")}
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col sm:flex-row gap-x-6">
        <div className="flex-1 flex flex-col gap-y-8">
          {IntroduceItems.map((item) => (
            <div key={item.title} className="flex flex-col py-4">
              <p className="titleMd text-titleWhite mb-6">{item.title}</p>
              <p className="textMd text-contentWhite">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    // </MotionComponent>
  );
};

export default AboutMeSection;
