"use client";

import { motion, useAnimate } from "framer-motion";
import { ArrowRight, Delete, Lock } from "lucide-react";
import { FC, useState } from "react";

const numbers = [1, 2, 3, 4, 6, 5, 7, 8, 9];
const pin = [0, 0, 0, 0];

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: JSX.Element;
}

interface InputProps {
  isPasswordCorrect: boolean;
  activeIndex: number;
}

const CharButton: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        onClick(e);
      }}
      className="grid place-items-center w-10 aspect-square rounded-full relative isolate select-none"
    >
      {children}
    </button>
  );
};

const PinInput: FC<InputProps> = ({ isPasswordCorrect, activeIndex }) => {
  return (
    <motion.div
      initial={{
        x: 0,
      }}
      animate={{
        x: isPasswordCorrect ? 0 : [15, -15, 5, -5, 0],
      }}
      transition={{
        duration: 0.6,
      }}
      className="flex items-center gap-2 mt-4"
    >
      {pin.map((_, index) => {
        const isThird = index === 2;
        const isFourth = index === 3;
        return (
          <div
            key={index}
            style={{
              backgroundColor: "#234b53",
            }}
            className="size-2 rounded-full relative grid place-items-center"
          >
            <motion.div
              initial={{
                y: 0,
                opacity: 1,
              }}
              animate={{
                y: isPasswordCorrect ? 0 : 60,
                opacity: isPasswordCorrect ? 1 : 0,
              }}
              transition={{
                duration: isPasswordCorrect ? 0 : 0.6,
                delay: isThird ? 0.3 : isFourth ? 0.2 : 0.1 * index,
              }}
              style={{
                backgroundColor: index < activeIndex ? "#fff" : "#234b53",
              }}
              className="w-full h-full rounded-full bg-white "
            ></motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

const ErrorInput = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateActiveIndex = (index: number) => setActiveIndex(index);
  const [isPasswordCorrect, setPasswordCorrect] = useState(true);
  const [isAnimationOn, setAnimationOn] = useState(false);

  const promptText = isPasswordCorrect
    ? "Enter password"
    : "Incorrect password.Try again.";

  // button animation;
  const [scope, animate] = useAnimate();

  const bubbleClass =
    "absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 size-14 rounded-full bg-white/30 pointer-events-none -z-10";

  const animateBubbleClick = async (el: any) => {
    await animate(
      el,
      {
        opacity: 0,
        height: 100,
        width: 100,
      },
      { duration: 0.4 }
    );
  };

  const animateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const bubble = document.createElement("div");
    bubble.className = bubbleClass;
    const el = e.currentTarget as HTMLElement;
    el.appendChild(bubble);
    animateBubbleClick(bubble);
    setTimeout(() => {
      bubble.remove();
    }, 310);
  };

  const clickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isAnimationOn) return;

    animateClick(e);

    if (isPasswordCorrect === false) {
      setPasswordCorrect(true);
      updateActiveIndex(1);
      return;
    }

    const newIndex = activeIndex < 4 ? activeIndex + 1 : activeIndex;
    updateActiveIndex(newIndex);

    if (activeIndex === 3) {
      setPasswordCorrect(false);
      setAnimationOn(true);
      setTimeout(() => {
        setAnimationOn(false);
      }, 600);
    }
  };

  // deleting a character;
  const deleteChar = (e: React.MouseEvent<HTMLButtonElement>) => {
    animateClick(e);
    const newIndex = activeIndex > 0 ? activeIndex - 1 : activeIndex;
    updateActiveIndex(newIndex);
  };

  return (
    <div className="w-full max-w-sm h-screen flex flex-col justify-center">
      <div className="flex items-center gap-2">
        <ArrowRight strokeWidth={4} className="stroke-zinc-400" size={16} />
        <p className="text-xl font-bold tracking-tighter">Password input.</p>
      </div>
      <br />
      <br />
      <div className="w-full max-w-sm  h-[42rem] isolate relative rounded-xl overflow-hidden">
        <img
          src="/images/building.jpg"
          className="absolute inset-0 h-full w-full object-cover -z-[10] select-none pointer-events-none"
          alt=""
          draggable="false"
        />
        <div className="w-full h-full bg-black/80 flex flex-col items-center p-10 justify-between pb-6">
          <div className="flex flex-col gap-6 items-center">
            <Lock stroke="#fff" fill="transparent" strokeWidth={3} size={20} />
            <p className="text-[#e4e4e4] font-medium text-lg w-full text-center leading-none">
              {promptText}
            </p>
            <PinInput
              isPasswordCorrect={isPasswordCorrect}
              activeIndex={activeIndex}
            />
          </div>
          <div className="w-full flex flex-col gap-6 text-[#e4e4e4]">
            <div className="w-full">
              <div className="grid grid-cols-3 grid-rows-3 w-full aspect-video gap-4 ">
                {numbers.map((number, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl grid place-items-center"
                    >
                      <CharButton onClick={clickButton}>
                        <span>{number}</span>
                      </CharButton>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-3 mt-6 gap-4">
                <div></div>
                <div className="w-full flex justify-center text-2xl">
                  <CharButton onClick={clickButton}>
                    <span>0</span>
                  </CharButton>
                </div>
                <div className="w-full flex justify-center">
                  <CharButton onClick={deleteChar}>
                    <Delete size={20} />
                  </CharButton>
                </div>
              </div>
            </div>
            <p className="text-[#e4e4e4] w-full text-center text-sm">
              Emergency call
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorInput;
