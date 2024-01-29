import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full bg-transparent h-full text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex items-center justify-around flex-wrap">
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                <div className="font-bold text-[16px]">Community</div>
                <p className="flex items-center my-[15px] cursor-pointer">
                    <RxGithubLogo />
                    <span className="text-[15px] ml-[6px]">Github</span>
                </p>
                {/* Instagram */}
                <p className="flex items-center my-[15px] cursor-pointer">
                    <RxInstagramLogo />
                    <span className="text-[15px] ml-[6px]">Instagram</span>
                </p>
                {/* LinkdIn */}
                <p className="flex items-center my-[15px] cursor-pointer">
                    <RxLinkedinLogo />
                    <span className="text-[15px] ml-[6px]">Linkdin</span>
                </p>
                {/* Discord */}
                <p className="flex items-center my-[15px] cursor-pointer">
                    <RxDiscordLogo />
                    <span className="text-[15px] ml-[6px]">Discord</span>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
