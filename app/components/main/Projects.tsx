"use client"
import React from "react";
import ProjectsCard from "../sub/ProjectsCard";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-1">
        <ProjectsCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero
          ea omnis architecto facilis quaerat consequatur repudiandae reiciendis
          minus accusantium."
        />
        <ProjectsCard
          src="/CardImage.png"
          title="ModernCardImage Next.js"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero
          ea omnis architecto facilis quaerat consequatur repudiandae reiciendis
          minus accusantium."
        />
        <ProjectsCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero
          ea omnis architecto facilis quaerat consequatur repudiandae reiciendis
          minus accusantium."
        />
      </div>
      <motion.div
      variants={slideInFromRight(0.8)}
      className="cursive text-[20px] text-gray-200 mb-3 mt-[22px] text-center"
      >
        Those Are my projects
      </motion.div>
    </div>
  );
};

export default Projects;
