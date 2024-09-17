"use client";

import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

const fontSize = 30;
const padding = 15;
const height = 85;

const CounterAnimation = () => {
  let [count, setCount] = useState(0);

  return (
    <div className="w-full h-96 flex flex-col items-center justify-center gap-6 rounded-md ">
      <Counter value={count} />
      <div className="flex space-x-3">
        <button
          onClick={() => {
            if (count > 0) {
              setCount((prev) => prev - 1);
            }
          }}
          className="size-14 rounded-full grid place-items-center bg-red-100"
        >
          <Minus className="stroke-red-700" strokeWidth={3} />
        </button>
        <button
          onClick={() => {
            if (count < 99) {
              setCount((prev) => prev + 1);
            }
          }}
          className="size-14 rounded-full grid place-items-center bg-green-100"
        >
          <Plus className="stroke-green-700" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

const Counter = ({ value }: { value: number }) => {
  return (
    <div
      style={{ fontSize }}
      className="flex space-x-3 overflow-hidden rounded bg-white px-2 leading-none text-gray-900"
    >
      <Digit place={10} value={value} />
      <Digit place={1} value={value} />
    </div>
  );
};

function Digit({ place, value }: { place: number; value: number }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[3rem]">
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <>
      <motion.span
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center ring-red-500 nunito-font font-bold !leading-none text-[6rem]"
      >
        {number}
      </motion.span>
    </>
  );
}

export default CounterAnimation;
