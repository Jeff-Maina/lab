"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const page = () => {
  const [currNumber, setNumber] = useState([0, 0, 0, 0]);
  const nextNumber = () => {
    const newNumber = [...currNumber];
    for (let i = newNumber.length - 1; i >= 0; i--) {
      if (newNumber[i] < 9) {
        newNumber[i] += 1;
        setNumber(newNumber);
        return;
      } else {
        newNumber[i] = 0;
      }
    }
    setNumber(newNumber);
  };

  const previousNumber = () => {};
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-14">
        <div className="nunito-font font-bold text-9xl tracking-tighter flex justify-end gap-1">
          <div className="h-[10rem] w-[5rem] relative   overflow-hidden">
            <div className="absolute w-full flex flex-col">
              {numbers.map((n, i) => (
                <div
                  style={{
                    transform: n === currNumber[0] ? `scale(1)` : "scale(0.5)",
                    opacity: n === currNumber[0] ? 1 : 0,
                  }}
                  className="transition-all duration-300 h-[10rem] flex items-center"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
          <div className="h-[10rem] w-[5rem] relative   overflow-hidden">
            <div className="absolute w-full flex flex-col">
              {numbers.map((n, i) => (
                <div
                  style={{
                    transform: n === currNumber[1] ? `scale(1)` : "scale(0.5)",
                    opacity: n === currNumber[1] ? 1 : 0,
                  }}
                  className="transition-all duration-300 h-[10rem] flex items-center"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
          <div className="h-[10rem] w-[5rem] relative   overflow-hidden">
            <div
              style={{
                transform: `translate(0,-${currNumber[2] * 10}%)`,
              }}
              className="absolute w-full flex flex-col  transition-all duration-300 "
            >
              {numbers.map((n, i) => (
                <div
                  style={{
                    transform: n === currNumber[2] ? `scale(1)` : "scale(0.5)",
                    opacity: n === currNumber[2] ? 1 : 0,
                  }}
                  className="transition-all duration-300 h-[10rem] flex items-center"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
          <div className="h-[10rem] w-[5rem] relative   overflow-hidde">
            <div
              style={{
                transform: `translate(0,-${currNumber[3] * 10}%)`,
              }}
              className="absolute w-full flex flex-col transition-all duration-300 bg-neutral-500"
            >
              {numbers.map((n, i) => (
                <div
                  style={{
                    transform: n === currNumber[3] ? `scale(1)` : "scale(0.5)",
                    opacity: n === currNumber[3] ? 1 : 0,
                  }}
                  className="transition-all duration-300 h-[10rem] flex items-center"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-1">
          <button
            onClick={() => {
              previousNumber();
            }}
            className="size-12 rounded-full bg-neutral-300 grid place-items-center"
          >
            <Minus strokeWidth={3} />
          </button>
          <button
            onClick={() => {
              nextNumber();
            }}
            className="size-12 rounded-full bg-neutral-300 grid place-items-center"
          >
            <Plus strokeWidth={3} />
          </button>
        </div>
        {currNumber.toLocaleString()}
      </div>
    </main>
  );
};

export default page;
