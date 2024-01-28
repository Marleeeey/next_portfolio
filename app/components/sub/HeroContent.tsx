"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row justify-center items-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex-col flex gap-5 justify-center m-auto text-start ">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box p-[15px] px-[7px] border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="welcome-text text-[13px]">
            Hello Im brahim Elmliji a Full Stack Developer{" "}
          </h1>
        </motion.div>

        {/* the header section */}

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto "
        >
          <span>
            Delivering
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best
            </span>{" "}
            project experience{" "}
          </span>
        </motion.div>
        {/* the paragraphe section  */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Hello, I'm Brahim, a dedicated web developer with a passion for
          transforming ideas into captivating online experiences. I specialize
          in both front-end and back-end development, ensuring websites not only
          look impressive but also function seamlessly. Let's collaborate to
          bring your digital vision to life through innovative design and
          top-notch performance.
        </motion.p>
        {/* the buttoun learn More */}
        <motion.a
          variants={slideInFromLeft(0.9)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn more!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.9)}
        className="w-full h-full flex items-center justify-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="main-Icons"
          width={650}
          height={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
