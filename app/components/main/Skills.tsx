"use client"
import React from "react";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/constants";
import SkillsDataProvider from "../sub/SkillsDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="relative flex flex-col items-center justify-center gap-3 h-full overflow-hidden py-20"
    >
      <SkillText />
        {/* Front End Section */}
        <div className="flex flex-row justify-between flex-wrap mt-4 gap-5 items-center">
          {Frontend_skill.map((image, index) => (
            <SkillsDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              key={image.Image}
            />
          ))}
        </div>
        {/* BackEndSection */}
        <div className="flex flex-row justify-between flex-wrap mt-4 gap-5 items-center">
          {Backend_skill.map((image, index) => (
            <SkillsDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              key={image.Image}
            />
          ))}
        </div>
        {/* Full Stack Section */}
        <div className="flex flex-row justify-between flex-wrap mt-4 gap-5 items-center">
          {Full_stack.map((image, index) => (
            <SkillsDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              key={image.Image}
            />
          ))}
        </div>
        {/* other Skills Section */}
        <div className="flex flex-row justify-between flex-wrap mt-4 gap-5 items-center">
          {Other_skill.map((image, index) => (
            <SkillsDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              key={image.Image}
            />
          ))}
        </div>
        {/* Skills Video */}
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              playsInline
              autoPlay
              muted
              loop
              src="/cards-video.webm"
            />
          </div>
        </div>
    </section>
  );
};

export default Skills;
