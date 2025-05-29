import React from "react";
import useScrollToSection from "../hooks/useScroll";
import { useAtom } from "jotai";

const HeaderComponent: React.FC = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <div className="fixed top-0 left-0 bg-titleWhite w-full flex justify-between gap-x-8 px-8 py-3 z-50">
      <button
        onClick={() => scrollToSection("Home")}
        className="text-[#68A4FF] font-Ibrand"
      >
        @JJHyeok13
      </button>

      <div className="hidden sm:flex sm:flex-row gap-x-8">
        {["AboutMe", "Qualification", "Skill", "Project"].map((item) => (
          <button
            onClick={() => scrollToSection(item)}
            className="textMd font-Ibrand text-mainColor hover:text-[#68A4FF]"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeaderComponent;
