"use client";
import MotionNumber from "motion-number";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Counter from "./counter";
import { useState } from "react";

const TelegramSlider = () => {
  const x = useMotionValue(0);
  const [xState, setX] = useState(0);
  const range = useTransform(x, [-200, 0], [1, 5]);

  return (
    <div className="w-64 bg-neutral-200 rounded-md overflow-hidden relative">
      <div className="absolute top-0 left-0 h-[56px] aspect-square z-10 grid place-items-center pointer-events-none">
        {/* <Counter value={range.get()} /> */}
        <MotionNumber
          value={range.get()}
          format={{ notation: "standard" }}
          locales="en-US"
          style={{
            lineHeight: "1rem",
          }}
          transition={{
            layout: { type: "spring", duration: 0.5, bounce: 0 },
            y: { type: "spring", duration: 0.5, bounce: 0.25 },
          }}
          className="text-white text-[1rem] font-semibold"
        />
      </div>
      <motion.div
        style={{ x }}
        drag="x"
        dragMomentum={false}
        dragElastic={0}
        dragConstraints={{
          right: 0,
          left: -200,
        }}
        onDrag={(event, info) => {
          setX(info.point.x);
        }}
        className="w-64 h-12 bg-blue-500 cursor-grab active:cursor-grabbing overflow-hidden"
      ></motion.div>
    </div>
  );
};

export default TelegramSlider;
