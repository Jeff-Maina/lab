"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

import { Camera, Image, Mic, Sticker } from "lucide-react";
import { useState } from "react";

const InstagramVanishMode = () => {
  const [yState, setYState] = useState(0);
  const y = useMotionValue(0);
  const pathLength = useTransform(y, [-20, -100], [0, 1]);
  const stroke = useTransform(y, [-95, -100], ["#999", "#dc2626"]);

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center gap-4">
      <div className="rounded-[32px] rounded-t-none border border-neutral-200 bg-black shadow p-2 pt-0  relative">
        <div className="w-[100%] absolute left-2/4 -translate-x-2/4 z-10 -top-10 h-24 via to-white px-2">
          <div className="w-2 bg-gradient-to-t from-black to-white h-full absolute left-0"></div>
          <div className="w-full h-full bg-gradient-to-t from-transparent to-white via-pink-100 "></div>
          <div className="w-2 bg-gradient-to-t from-black to-white h-full absolute right-0 top-0"></div>
        </div>
        <div className="w-96 m-auto h-[30rem] border border-pink-200 overflow-hidden rounded-t-none rounded-3xl relative bg-pink-200">
          <motion.div
            style={{ y }}
            drag="y"
            dragMomentum={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            onDrag={(event, info) => {
              setYState(info.point.y);
            }}
            dragSnapToOrigin
            className="flex flex-col gap-1 h-[33rem] w-full p-4 pt-8"
          >
            <p className="text-xs text-center text-pink-950 py-2">
              Today 10:16
            </p>
            <div className="w-full flex flex-col items-end gap-0.5">
              <div className="h-10 rounded-3xl w-56 rounded-br-md bg-pink-500"></div>
              <div className="h-10 rounded-3xl rounded-tr-md w-20 bg-pink-500"></div>
            </div>
            <div className="w-full flex flex-col items-start gap-1 mt-2">
              <div className="h-10 rounded-3xl w-56 bg-white"></div>
              <div>
                <span className="text-xs text-pink-950">Replied to you</span>
                <div className="px-1 border-l-2 border-pink-950">
                  <div className="h-10 w-20 bg-pink-300 rounded-3xl"></div>
                </div>
                <div className="h-16 bg-white rounded-3xl w-64 mt-1"></div>
              </div>
            </div>
            <div className="w-full flex flex-col items-end gap-0.5 mt-2">
              <span className="text-xs text-pink-950">You replied</span>
              <div className="h-10 rounded-3xl w-44 bg-pink-500"></div>
            </div>
            <div className="w-full h-20 p-4 mt-6 flex flex-col items-center gap-2">
              <div className="m-auto relative grid place-items-center">
                <motion.svg
                  height="32"
                  width="32"
                  className="relative z-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.circle
                    r="15"
                    cx="50%"
                    cy="50%"
                    fill="none"
                    //   fill={fill}
                    pathLength={pathLength}
                    stroke={stroke}
                    strokeWidth="2"
                  />
                </motion.svg>
                <svg
                  height="32"
                  width="32"
                  className="absolute"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.circle
                    r="15"
                    cx="50%"
                    cy="50%"
                    fill="none"
                    stroke={"#fff"}
                    strokeWidth="2"
                  />
                </svg>
              </div>
              {y.get() < -100 ? (
                <p className="text-center text-xs text-red-600">
                  Release to turn on vanish mode
                </p>
              ) : (
                <p className="text-center text-xs text-pink-950">
                  Swipe up to turn on vanish mode
                </p>
              )}{" "}
            </div>
          </motion.div>
          <div className="absolute bottom-0 left-0 w-full p-3 z-10 bg-pink-200">
            <div className="h-10 w-full bg-pink-300/60 rounded-full flex items-center justify-between px-1">
              <button className="size-8 bg-pink-600 grid place-items-center rounded-full cursor-not-allowed">
                <Camera className="stroke-pink-600 fill-white" size={24} />
              </button>
              {/* <div className="flex items-center gap-3 px-2">
            <button>
              <Mic size={20} className="stroke-black" />
            </button>
            <button>
              <Image size={20} className="stroke-black" />
            </button>
            <button>
              <Sticker size={20} className="stroke-black" />
            </button>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramVanishMode;
