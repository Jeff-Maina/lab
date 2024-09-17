"use client";

import {
  MotionValue,
  useMotionValue,
  useTransform,
  motion,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const CharButton = ({
  mouseY,
  char,
}: {
  mouseY: MotionValue;
  char: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  let height = useTransform(mouseY, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return (val - bounds.y)*0.7 ;
  });
  let xSync = useTransform(height, [-100, 0, 100], [0, -50, 0]);
  let x = useSpring(xSync, { stiffness: 500, damping: 20 });

  return (
    <motion.div
      ref={ref}
      style={{ x }}
      className="text-sm origin-center font-medium text-neutral-600 hover:text-black cursor-pointer size-4 aspect-square font-mon grid place-items-center"
    >
      {char}
    </motion.div>
  );
};

const Page = () => {
  const mouseY = useMotionValue(Infinity);

  return (
    <main className="w-ful h-screen flex flex-col items-center justify-center gap-4">
      <div className=" w-96 min-h-[30rem] border border-neutral-200 rounded-xl">
        <div
          onMouseMove={(e) => {
            mouseY.set(e.pageY);
          }}
          onMouseLeave={() => {
            mouseY.set(Infinity);
          }}
          className="h-full flex flex-col items-end ml-auto w-40 p-6 cursor-pointer"
        >
          {alphabet.map((char, i) => (
            <CharButton mouseY={mouseY} char={char} key={i} />
          ))}
        </div>
      </div>
      <p className="text-xs w-96">
        Work in progress. Animation is not as fluid as the original.
      </p>
    </main>
  );
};

export default Page;
