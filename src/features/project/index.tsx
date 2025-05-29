import React from "react";
import MotionComponent from "../../shared/ui/motion";
import ProjectListComponent from "./components/ProjectList";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { filteringAtom } from "../../shared/atom/filteringAtom";

const ProjectSection: React.FC = () => {
  const [filtering, setFiltering] = useAtom(filteringAtom);

  return (
    <MotionComponent>
      <section
        id="Project"
        className="min-h-dvh mx-8 lg:mx-auto py-16 flex flex-col"
      >
        <div className="flex flex-col gap-y-4 sm:flex-row sm:justify-between mb-6">
          <p className="titleMd text-titleWhite">💻 Projects</p>
          <div className="relative flex justify-between gap-x-2 bg-[#1f1f1f] p-2 rounded-3xl">
            {["ALL", "PERSONAL", "TEAM"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  setFiltering(item as "ALL" | "PERSONAL" | "TEAM")
                }
                className={`relative z-10 px-4 py-1 text-sm font-medium rounded-3xl transition-colors duration-200
                    ${filtering === item ? "text-white" : "text-gray-400"}`}
              >
                {item}
                {filtering === item && (
                  <motion.div
                    layoutId="toggle-bg"
                    className="absolute inset-0 z-[-1] bg-sky-500 rounded-3xl"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        <ProjectListComponent />
      </section>
    </MotionComponent>
  );
};

export default ProjectSection;
