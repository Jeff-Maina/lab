"use client";

import { useAnimate } from "framer-motion";
import { Delete, Lock } from "lucide-react";
import { FC, useState } from "react";

const numbers = [1, 2, 3, 4, 6, 5, 7, 8, 9];

interface ButtonProps {
  children: JSX.Element;
  updateActiveIndex?: (index: number) => void;
  activeIndex: number;
  isDelete: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  updateActiveIndex,
  activeIndex,
  isDelete,
}) => {
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
        // scale: 5,
      },
      {
        duration: 0.4,
      }
    );
  };

  const clickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const bubble = document.createElement("div");
    bubble.className = bubbleClass;
    const el = e.currentTarget as HTMLElement;
    el.appendChild(bubble);
    animateBubbleClick(bubble);

    if (updateActiveIndex && !isDelete) {
      const newIndex = activeIndex < 4 ? activeIndex + 1 : activeIndex;
      updateActiveIndex(newIndex);
    } 
    if (isDelete === true) {
      const newIndex = activeIndex > 0 ? activeIndex - 1 : activeIndex;
      if (updateActiveIndex) {
        updateActiveIndex(newIndex);
        console.log(newIndex);
      }
    }
    setTimeout(() => {
      bubble.remove();
    }, 310);
  };
  return (
    <button
      onClick={(e) => clickButton(e)}
      className="grid place-items-center w-10 aspect-square rounded-full relative isolate"
    >
      {children}
    </button>
  );
};

const ErrorInput = () => {
  const [pin, setPin] = useState([0, 0, 0, 0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const updateActiveIndex = (index: number) => setActiveIndex(index);

  return (
    <div className="w-full max-w-sm">
      <p className="text-2xl font-bold tracking-tighter">
        Password input.{activeIndex}
      </p>
      <br />
      <div className="w-full max-w-sm  h-[40rem] isolate relative">
        <img
          src="/images/building.jpg"
          className="absolute inset-0 h-full w-full object-cover -z-[10] select-none pointer-events-none"
          alt=""
          draggable="false"
        />
        <div className="w-full h-full bg-black/80 flex flex-col items-center p-10 justify-between pb-6">
          <div className="flex flex-col gap-6 items-center">
            <Lock stroke="#fff" fill="transparent" strokeWidth={3} />
            <p className="text-[#e4e4e4] font-medium text-lg">Enter Password</p>
            <div className="flex items-center gap-2 mt-4">
              {pin.map((_, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: index < activeIndex ? "#fff" : "000",
                    }}
                    className="size-3 rounded-full bg-[#234b53]"
                  ></div>
                );
              })}
            </div>
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
                      <Button
                        isDelete={false}
                        activeIndex={activeIndex}
                        updateActiveIndex={updateActiveIndex}
                      >
                        <span>{number}</span>
                      </Button>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-3 mt-6 gap-4">
                <div></div>
                <div className="w-full flex justify-center">
                  <Button
                    isDelete={false}
                    activeIndex={activeIndex}
                    updateActiveIndex={updateActiveIndex}
                  >
                    <span className="text-2xl">0</span>
                  </Button>
                </div>
                <div className="w-full flex justify-center">
                  <Button activeIndex={activeIndex} isDelete={true}>
                    <Delete size={20} />
                  </Button>
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
