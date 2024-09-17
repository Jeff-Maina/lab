"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Camera, Image, Mic, Reply, Sticker, X } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [xMotion, setX] = useState(0);
  const x = useMotionValue(0);

  const [hasReplied, setHasReplied] = useState<boolean>(false);

  const translatX = useTransform(x, [0, 50], [-10, 0]);
  const opacity = useTransform(x, [0, 40], [0, 1]);
  const pathLength = useTransform(x, [0, 50], [0, 1]);
  const scale = useTransform(x, [0, 40], [0, 1]);
  const fill = useTransform(
    x,
    [49, 50],
    ["rgb(255,255,255,0)", "rgb(212,212,212)"]
  );
  return (
    <main className="w-full flex flex-col items-center justify-center h-screen gap-4">
      {/* metrics */}
      <p className="p-4 absolute top-0 right-0">{x.get()}</p>
      <p className="text-xs w-96">
        <span className="text-red-500">* </span>Drag a message
      </p>
      <div className="w-96 h-[20rem] border rounded-3xl p-4 flex flex-col justify-between relative">
        <div className="flex items-center gap-3 relative">
          <div className="size-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
          <motion.div
            style={{
              x: translatX,
              opacity,
            }}
            className="size-8 absolute left-10 grid place-items-center"
          >
            <motion.div style={{ scale }} className="absolute">
              <Reply className="stroke-neutral-800" size={20} />
            </motion.div>
            <motion.svg
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                r="15"
                cx="50%"
                cy="50%"
                fill={fill}
                pathLength={pathLength}
                stroke="rgb(212,212,212)"
                strokeWidth="2"
              />
            </motion.svg>
          </motion.div>
          <motion.div
            style={{ x }}
            drag="x"
            dragConstraints={{
              left: 0,
              right: 30,
            }}
            dragMomentum={false}
            dragSnapToOrigin
            dragTransition={{
              //   bounceDamping: 40,
              bounceStiffness: 1000,
            }}
            dragElastic={{
              left: 0,
              right: 0.1,
            }}
            onDrag={(event, info) => {
              setX(info.point.x);
            }}
            onDragEnd={(event, info) => {
              if (x.get() > 50) {
                setHasReplied(true);
              }
            }}
            className="bg-neutral-200 relative  rounded-3xl text-sm text-neutral-800 px-4 p-2"
          >
            <p className="">Paths are made by walking 🖤</p>
          </motion.div>
        </div>

        {/* search input */}
        <div className="relative z-10">
          <div className="flex p-2 bg-neutral-200 rounded-full justify-between">
            <div className="size-8 min-w-8 rounded-full bg-blue-600 grid place-items-center">
              <Camera fill="#fff" className="stroke-blue-600" />
            </div>
            <input type="text" className="w-40 bg-transparent outline-none" />
            <div className="flex items-center gap-3 pr-2 !min-w-fit flex-shrink-0">
              <div>
                <Mic
                  strokeLinecap="round"
                  className="stroke-neutral-700"
                  size={20}
                />
              </div>
              <div>
                <Image
                  strokeLinecap="round"
                  className="stroke-neutral-700"
                  size={20}
                />
              </div>
              <div>
                <Sticker
                  strokeLinecap="round"
                  className="stroke-neutral-700"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>

        {/* reply box */}
        <AnimatePresence mode="wait">
          {hasReplied ? (
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -50, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{
                type: "tween",
                duration: 0.15,
              }}
              className="absolute w-full h-[4.5rem] left-0 bottom-0 border-t border-neutral-200 py-2 flex flex-col gap-0.5 px-4 pl-6"
            >
              <p className="text-xs text-neutral-500">Replying to 🦋reen🦋</p>
              <p className="text-xs text-neutral-800">
                Paths are made by walking 🖤
              </p>
              <div
                onClick={() => setHasReplied(!hasReplied)}
                className="absolute right-4 top-2 "
              >
                <X className="stroke-neutral-400 hover:stroke-neutral-800 cursor-pointer transition-all" />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Page;
