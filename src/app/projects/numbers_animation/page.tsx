"use client";

import { Delete } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { animationVariants } from "./variants";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Char = ({
  char,
  key,
  activeEffect,
}: {
  char: number | string;
  key: number | string;
  activeEffect: string;
}) => {


  return (
    <motion.li
      layout
      key={key}
      variants={animationVariants[activeEffect]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.2,
      }}
      className="text-[3rem] font-extrabold nunito-font px-[2px] flex"
    >
      {char}
    </motion.li>
  );
};

const Effects = [
  {
    label: "Slide",
    variants: animationVariants["Slide"],
  },
  {
    label: "Fade",
    variants: animationVariants["Fade"],
  },
  { label: "Expand", variants: animationVariants["Expand"] },
];

const Counter = () => {
  // states
  const [inputNumbers, setInputNumbers] = useState<Array<number | string>>([]);
  const [activeEffect, setActiveEffect] = useState("Slide");

  const addNumber = (value: number) => {
    if (inputNumbers.length < 7) {
      setInputNumbers([...inputNumbers, value]);
    }
  };

  const removeNumber = () => {
    inputNumbers.pop();
    setInputNumbers([...inputNumbers]);
  };

  // Check if the index is before a position where a comma should be added
  const checkPosition = (index: number) => {
    return (
      (inputNumbers.length - index) % 3 === 1 &&
      index !== inputNumbers.length - 1
    );
  };

  return (
    <main className="w-full h-screen grid place-items-center">
      <div className="flex flex-col gap-14 max-w-64 w-full">
        <div className="w-full grid grid-cols-3 gap-1 text-sm">
          {Effects.map((e, i) => (
            <button
              className={`${
                e.label === activeEffect ? "bg-neutral-200" : "bg-neutral-100"
              } p-3 rounded-[0.5rem] hover:bg-neutral-200 transition`}
              onClick={() => setActiveEffect(e.label)}
            >
              {e.label}
            </button>
          ))}
        </div>
        <div className="w-full ">
          <ul className="flex justify-end w-full">
            <AnimatePresence initial={false} mode="popLayout">
              {inputNumbers.length > 0 ? (
                inputNumbers.map((n, i) => (
                  <>
                    <Char key={i} char={n} activeEffect={activeEffect} />
                    {checkPosition(i) ? (
                      <Char
                        key={i + "comma"}
                        char={","}
                        activeEffect={activeEffect}
                      />
                    ) : null}
                  </>
                ))
              ) : (
                <li className="text-[3rem] font-extrabold nunito-font text-neutral-300">
                  0
                </li>
              )}
            </AnimatePresence>
          </ul>
        </div>
        <div className="gap-1 w-64 h-[15rem] grid grid-cols-3 grid-rows-4 ">
          {numbers.map((n, i) => (
            <button
              key={i}
              onClick={() => addNumber(n)}
              className="w-full h-full bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300  rounded-[0.5rem]"
            >
              {n}
            </button>
          ))}
          <div className="w-full col-span-3 grid grid-cols-3 gap-1">
            <button
              onClick={() => addNumber(0)}
              className="w-full col-start-2 h-full bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300  rounded-[0.5rem]"
            >
              0
            </button>
            <button
              onClick={() => removeNumber()}
              className="w-full h-full bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 text-neutral-800  rounded-[0.5rem] grid place-items-center"
            >
              <Delete />
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <a
            href="underline"
            className="underline text-neutral-600 decoration-black text-sm hover:text-black"
          >
            Source code
          </a>
        </div>
      </div>
    </main>
  );
};

export default Counter;
