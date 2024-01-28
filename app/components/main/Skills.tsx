import React from "react";
import { Frontend_skill } from "@/constants";
import SkillsDataProvider from "../sub/SkillsDataProvider";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="relative flex flex-col items-center justify-center gap-3 h-full overflow-hidden py-20"
    >
      <div className="flex flex-row justify-between flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
            <SkillsDataProvider 
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
        ))}
      </div>
    </section>
  );
};

export default Skills;
