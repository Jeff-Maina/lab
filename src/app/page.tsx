"use client";

import { useEffect, useState } from "react";
import Recreations from "./components/homepage/Recreations";
import { motion } from "framer-motion";
import Concepts from "./components/homepage/Concepts";
import Archived from "./components/homepage/Archived";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin); // (or in the top-level file in your React app)

export default function Home() {
  const types = ["Recreations", "Concepts", "Archived"];
  const [activeTypeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const updateActiveSection = (value: number) => setActiveIndex(value);

  const scrollPage = (id: string) => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: { y: `#${id}`, offsetY: 200, autoKill: true },
      ease: "power2",
    });
  };

  useEffect(() => {
    (CSS as any).paintWorklet.addModule("squircle.min.js");
  }, []);

  return (
    <main className="w-full min-h-screen">
      <section className="w-full max-w-3xl m-auto p-6 pt-0 flex flex-col gap-20">
        <nav className="max-w-2xl m-auto w-full sticky h-28 bg-gradient-to-b from-white via-white/90 to-transparent  flex items-center justify-between top-0 z-[999] ">
          <div>
            <a
              href="/blocks"
              className="px-4 p-2 bg-purple-200/60 text-purple-600 hover:bg-purple-200/80 transition-all hover rounded-lg "
            >
              Blocks
            </a>
          </div>
          <div
            onMouseLeave={() => setHoveredIndex(activeTypeIndex)}
            className="flex justify-end gap-2"
          >
            {types.map((type, index) => {
              return (
                <div className="relative max-w-fit px-4 p-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault;
                      scrollPage(type.toLowerCase());
                      setActiveIndex(index);
                    }}
                    className="lowercase max-w-fit text-neutral-600 hover:text-black transition-all duration-200 relative z-10"
                  >
                    {type}
                  </button>
                  {index === activeTypeIndex && (
                    <motion.div
                      layoutId="indi"
                      transition={{
                        duration: 0.25,
                      }}
                      className="absolute flex w-full h-full items-center justify-between top-0 text-2xl left-0  pointer-events-none bg-zinc-100 rounded-lg font-thin leading-none"
                    >
                      <div></div>
                      <div></div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
        <section className="flex flex-col gap-10">
          <Recreations updateActiveSection={updateActiveSection} />
          <Concepts updateActiveSection={updateActiveSection} />
          <Archived updateActiveSection={updateActiveSection} />
        </section>
      </section>
    </main>
  );
}
