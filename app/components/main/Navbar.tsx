import { Socials } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md bg-transparent z-50 px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex items-center">
          <Image
            alt="Nav_Logo"
            src="/NavLogo.png"
            width={70}
            height={70}
            className="curssor-pointer hover:aimmate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300 text-md">
            Ibra Tech
          </span>
        </a>
        {/* Navbar Items */}
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about me" className="cursor-pointer ">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              projects
            </a>
          </div>
        </div>
        {/* Socials icons */}
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image src={social.src} alt={social.name} key={social.name} width={24} height={24} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
