import { FC } from "react";
import { ButtonProps } from "./interfaces";
import { Layers } from "lucide-react";

const Button: FC<ButtonProps> = ({ openProjects }) => {
  return (
    <div className="relative group/button">
      <button
        onClick={openProjects}
        className="p-4 rounded-[1rem] shadow-inner shadow-[#3d3c3f] bg-gradient-to-br from-[#262629] to-[#1b1b1e] relative group-hover/button:-translate-y-1 transition-all duration-300"
      >
        <div className="absolute -top-1 -right-1 size-4 rounded-full bg-white"></div>
        <Layers stroke="white" size={24} />
      </button>
      <p className="text-white text-xs text-center w-full absolute -bottom-8 pointer-events-none select-none translate-y-2 opacity-0 group-hover/button:translate-y-0 group-hover/button:opacity-100 transition-all duration-300">
        Projects
      </p>
    </div>
  );
};

export default Button;
