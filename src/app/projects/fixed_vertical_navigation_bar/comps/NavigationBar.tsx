import { FC } from "react";
import { NavProps } from "../Interfaces";
import { Triangle } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin); // (or in the top-level file in your React app)

const NavigationBar: FC<NavProps> = ({
  sections,
  activeSectionIndex,
  updateActiveSection,
}) => {
  
  const scrollPage = (id: string) => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: { y: `#${id}`, offsetY: 200, autoKill: true },
      ease: "power2",
    });
  };

  return (
    <div className="fixed top-2/4 -translate-y-2/4 md:block hidden left-[0%] lg:left-[10%]">
      <div className="flex flex-col gap-[6px]">
        {sections.map((section, index) => {
          const isActive = activeSectionIndex === index;
          return (
            <div key={index} className="flex gap-3">
              <div className="flex gap-2 items-start translate-y-[10px]">
                <div className="flex items-start gap-1">
                  {!isActive && <div className="size-[7px]"></div>}
                  {isActive && (
                    <motion.div
                      layoutId="indicator"
                      transition={{
                        duration: 0.25,
                      }}
                      className=""
                    >
                      <Triangle size={7} fill="black" className="rotate-90" />
                    </motion.div>
                  )}
                </div>
                <div className="pl-1 flex flex-col items-start gap-[6px]">
                  <div
                    className={`w-3 h-[2px] ${
                      isActive ? "bg-black" : "bg-zinc-400"
                    } rounded-full transition-all duration-300`}
                  ></div>
                  {index !== sections.length - 1 && (
                    <>
                      <div className="w-1 h-[2px] bg-zinc-400 rounded-full"></div>
                      <div className="w-1 h-[2px] bg-zinc-400  rounded-full"></div>
                      <div className="w-1 h-[2px] bg-zinc-400  rounded-full"></div>
                    </>
                  )}
                </div>
              </div>
              <div>
                <p
                  // href={`#${section}`}
                  onClick={() => {
                    scrollPage(section);
                    updateActiveSection(index);
                  }}
                  className={`cursor-pointer ${
                    !isActive ? "text-zinc-500" : "text-black"
                  } hover:text-black transition-all select-none duration-300 uppercase text-sm font-medium`}
                >
                  {section}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationBar;
