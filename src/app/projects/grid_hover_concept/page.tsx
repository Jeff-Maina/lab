"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const page = () => {
  const [activeIndex, setActiveIndex] = useState(1000);
  const updateActiveIndex = (index: number) => setActiveIndex(index);

  return (
    <main className="max-w-5xl m-auto w-full min-h-screen pt-10 lg:pt-32 flex flex-col gap-10 p-6">
      <header>
        <Link href="/" className="flex items-center gap-1 max-w-fit">
          <ArrowLeft size={16} />
          Back
        </Link>
        <br />
        <p className="text-xl font-semibold tracking-tight">
          Grid hover concept.
        </p>
        <small className="text-zinc-500">Monday, 11 March 2024</small>
      </header>
      {/* for mobile screens */}

      <div
        onMouseLeave={() => updateActiveIndex(1000)}
        className="hidden md:grid grid-cols-6 w-full gap-1 group/grid"
      >
        {arr.map((_, index) => (
          <div
            onMouseEnter={() => {
              updateActiveIndex(index);
            }}
            className="w-full aspect-square relative grid place-items-center bg-zinc-100 cursor-pointer group/card"
          >
            <img
              src="/images/clove.png"
              className="h-2/4 w-2/4 object-cover select-none group-hover/card:scale-125 transition-all duration-300"
              alt=""
            />
            {index === activeIndex && (
              <motion.div
                layoutId="indicator"
                transition={{ duration: 0.3 }}
                className="absolute w-full h-full inset-0 z-10 select-none pointer-events-none flex flex-col justify-between opacity-0 group-hover/grid:opacity-100 transition-opacity duration-200"
              >
                <div className="w-full justify-between flex">
                  <div className="size-4 border-t border-l border-black"></div>
                  <div className="size-4  border-t border-r border-black"></div>
                </div>
                <div className="w-full justify-between flex">
                  <div className="size-4 border-b border-l border-black"></div>
                  <div className="size-4 border-b border-r border-black"></div>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <p className="text-sm">
          [ Not optimized for small screens. Please switch to a larger screen. ]
        </p>
      </div>
    </main>
  );
};

export default page;
