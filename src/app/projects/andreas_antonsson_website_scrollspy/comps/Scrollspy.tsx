"use client";

import { PageSections } from "../data";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { FC, useRef, useState } from "react";
import { ScrollSpyProps } from "../Interface";

gsap.registerPlugin(ScrollToPlugin); // (or in the top-level file in your React app)

const Scrollspy: FC<ScrollSpyProps> = ({ top, activeSectionsIndices }) => {
  const indicatorRef = useRef(null);

  const scrollPage = (id: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, autoKill: true },
      ease: "power2",
    });
  };

  return (
    <div className="hidden fixed bottom-6 md:bottom-10 lg:bottom-20 lg:h-32 right-6 md:right-10 lg:right-20 lg:flex flex-col z-20  lg:justify-evenly w-10 md:w-auto items-center">
      {PageSections.map((section, index) => {
        const isSectionActive = activeSectionsIndices.includes(index);

        return (
          <div
            onClick={() => scrollPage(section)}
            className={`h-3 lg:h-4 w-4 lg:w-7  rounded-[0.2rem] border ${
              isSectionActive ? "border-black" : "border-zinc-300"
            } hover:border-black cursor-pointer transition-all duration-300`}
          ></div>
        );
      })}
      <div
        ref={indicatorRef}
        style={{
          transform: `translate(0px,${top}px)`,
        }}
        className="w-10 lg:w-14 h-[30px] lg:h-[36px] z-10 absolute top-0  border border-black pointer-events-none"
      ></div>
    </div>
  );
};

export default Scrollspy;
