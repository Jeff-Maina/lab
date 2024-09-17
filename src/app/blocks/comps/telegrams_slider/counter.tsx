"use client";

import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

const fontSize = 30;
const height = 30;

const Counter = ({ value }: { value: number }) => {
  return (
    <div
      style={{ fontSize }}
      className="flex items-end gap-[6px] overflow-hidden rounded px-2 leading-none text-white -translate-y-[2px]"
    >
      <Digit place={10} value={value} />
      <div className="size-[3px] rounded-full bg-white -translate-y-[10px]" />
      <Digit place={1} value={value} />
      {/* <p className="text-base translate-y-[7px] leading-none tracking-tight font-semibold h-[30px]">x</p> */}
    </div>
  );
};

function Digit({ place, value }: { place: number; value: number }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useMotionValue(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative ">
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useSpring(
    useTransform(mv, (latest) => {
      let placeValue = latest % 10;
      let offset = (10 + number - placeValue) % 10;

      let memo = offset * height;

      if (offset > 5) {
        memo -= 10 * height;
      }

      return memo;
    }),
    { damping: 20, stiffness: 500 }
  );

  return (
    <>
      <motion.span
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center ring-red-500 nunito-font font-bold text-[1.2rem] transition-[scale]"
      >
        {number}
      </motion.span>
    </>
  );
}

export default Counter;
