
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex items-center justify-between flex-col">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box p-[15px] px-[7px] border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="welcome-text text-[13px]">
          Think Better with next js 14{" "}
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.8)}
        className="text-white font-bold text-[30px] text-center mb-[15px]"
      >
        Making apps with new Technologies
      </motion.div>
      <motion.div
      variants={slideInFromRight(0.8)}
      className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task deadline or idea

      </motion.div>
    </div>
  );
};

export default SkillText;
