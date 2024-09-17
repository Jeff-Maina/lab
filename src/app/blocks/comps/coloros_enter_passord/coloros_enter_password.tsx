"use client";

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { Delete, Lock } from "lucide-react";
import React, { ReactNode } from "react";

const LockSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 26426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8Z"
      fill="#fff"
    />
  </svg>
);

const Num = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const animateBubble = () => {
    const button = buttonRef.current;
    if (button) {
      const bubble = document.createElement("div");
      bubble.className =
        "size-10 rounded-full absolute bg-white/20 origin-center";
      button.appendChild(bubble);

      console.log("clicking")

      bubble.animate(
        { scale: 2, opacity: 0 },
        { duration: 250, fill: "forwards" }
      );

      setTimeout(() => {
        bubble.remove();
      }, 300);
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={(e) => {
        animateBubble();
        props.onClick?.(e);
      }}
      // {...props}
      className="text-white text-xl font-medium grid place-items-center relative"
    >
      <div className="size-12 grid place-items-center rounded-full  relative z-10">
        {children}
      </div>
    </button>
  );
};

const InputNum = ({
  index,
  inputLength,
  isPassEntered,
}: {
  index: number;
  inputLength: number;
  isPassEntered: boolean;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const elem = ref.current;
    if (!elem) return;
    const ghostNum = document.createElement("div");
    ghostNum.className = "size-2.5 rounded-full bg-white ghost";
    if (index < inputLength) {
      elem.querySelector(".ghost")?.remove();
      elem.appendChild(ghostNum);
    } else {
      elem.querySelector(".ghost")?.remove();
    }

    if (isPassEntered) {
      ghostNum.animate(
        {
          transform: "translateY(150px)",
          opacity: 0,
        },
        {
          duration: 500,
          fill: "forwards",
          delay: index === 2 ? 150 : index === 3 ? 100 : index * 50,
        }
      );
    }
  }, [isPassEntered, inputLength]);

  return (
    <div
      ref={ref}
      className={cn("size-2.5 rounded-full bg-[#535252] relative")}
    ></div>
  );
};

const ColorOsEnterPassword = () => {
  const password = 1964;
  const [passArr, setPassArr] = React.useState<number[]>([]);

  const isPassEntered = passArr.length === 4;

  const enterDigit = (digit: number) => {
    if (passArr.length < 4) {
      setPassArr([...passArr, digit]);
    } else {
      setPassArr([]);
      setPassArr([digit]);
    }
  };

  const deleteDigit = () => {
    setPassArr(passArr.slice(0, -1));
  };

  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center">
      <div className="w-[22rem] h-[36rem] relative rounded-[20px] border shadow p-3">
        {/* background image */}
        <div className="rounded-[px] overflow-hidden absolute top-0 left-0 w-full h-full p-3">
          <img
            src="images/building.jpg"
            className="h-full w-full object-cover rounded-[8px]"
            alt=""
          />
        </div>

        {/* actual screen / overlay */}
        <div className="w-full h-full bg-black/80 relative z-10 rounded-[8px] flex flex-col justify-between items-center p-6">
          <div className="w-full flex flex-col items-center gap-5">
            <div>{LockSvg}</div>
            <p className="t text-white font-medium text-center">
              {isPassEntered
                ? "Incorrect Password. Try again."
                : "Enter password"}
            </p>
            <motion.div
              initial={{
                x: 0,
              }}
              animate={{
                x: isPassEntered ? [10, -10, 10, 0] : 0,
              }}
              transition={{
                x: {
                  duration: 0.7,
                },
              }}
              className="flex items-center gap-2"
            >
              {[...Array(4)].map((_, index) => (
                <InputNum
                  key={index}
                  index={index}
                  inputLength={passArr.length}
                  isPassEntered={isPassEntered}
                />
              ))}
            </motion.div>
          </div>
          {/* numpad */}
          <div className="w-full">
            <div className="grid grid-cols-3 w-full h-56 gap-2">
              {[...Array(9)].map((_, index) => (
                <Num onClick={() => enterDigit(index + 1)} key={index}>
                  {index + 1}
                </Num>
              ))}
              <div></div>
              <Num onClick={() => enterDigit(0)}>0</Num>
              <Num onClick={deleteDigit}>
                <Delete className="stroke-white" />
              </Num>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorOsEnterPassword;
