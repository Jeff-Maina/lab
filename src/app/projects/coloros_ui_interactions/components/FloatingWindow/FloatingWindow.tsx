"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ArrowRight, Settings2, X } from "lucide-react";
import { useRef, useState } from "react";
import OpacitySlider from "./OpacitySlider";

const resizeSvg = (
  <svg
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m14.228 16.227a1 1 0 0 1 -.707-1.707l1-1a1 1 0 0 1 1.416 1.414l-1 1a1 1 0 0 1 -.707.293zm-5.638 0a1 1 0 0 1 -.707-1.707l6.638-6.638a1 1 0 0 1 1.416 1.414l-6.638 6.638a1 1 0 0 1 -.707.293zm-5.84 0a1 1 0 0 1 -.707-1.707l12.477-12.477a1 1 0 1 1 1.415 1.414l-12.478 12.477a1 1 0 0 1 -.707.293z"
      fill="#fff"
    />
  </svg>
);

const FloatingWindow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  const [isChangingOpacity, setIsChangingOpacity] = useState(false);
  const closeOpacitySlider = () => setIsChangingOpacity(false);

  const x = useMotionValue(0);
  const backgroundColor = useTransform(x, [0, 187], ["#000", "#0000008e"]);

  const [dimensions, setDimensions] = useState({ height: 320, width: 288 });
  const [ghostDimensions, setGhostDimensions] = useState({
    height: 320,
    width: 288,
  });

  const distanceX = useMotionValue(0);
  const distanceY = useMotionValue(0);
  const ghostHeight = useTransform(
    distanceY,
    [-50, 100],
    [ghostDimensions.height, 420]
  );
  const ghostWidth = useTransform(
    distanceX,
    [50, -50],
    [ghostDimensions.width, 338]
  );

  const [isDragging, setIsDragging] = useState(false);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div className="w-full max-w-sm h-screen flex flex-col justify-center">
      <div className="flex items-center gap-2">
        <ArrowRight strokeWidth={4} className="stroke-zinc-400" size={18} />
        <p className="text-2xl font-bold tracking-tighter">Floating window.</p>
      </div>
      <br />
      <div
        ref={screenRef}
        className="w-full max-w-sm  h-[40rem] isolate relative overflow-hidden"
      >
        <img
          draggable="false"
          src="/images/building.jpg"
          alt=""
          className="absolute inset-0 w-full h-full"
        />
        <div ref={containerRef} className="w-full h-full relative z-10">
          <motion.div
            drag
            dragPropagation={false}
            dragMomentum={false}
            dragConstraints={containerRef} //
            dragElastic={0}
            style={{
              backgroundColor,
              height: dimensions.height,
              width: dimensions.width,
            }}
            className="absolute rounded-xl cursor-grab active:cursor-grabbing flex flex-col justify-between right-0 top-0 transition-[height,width] duration-200"
          >
            <div className="w-full flex">
              {isChangingOpacity ? (
                <OpacitySlider x={x} closeOpacitySlider={closeOpacitySlider} />
              ) : (
                <div className="w-full flex items-center justify-between p-6">
                  <button onClick={() => setIsChangingOpacity(true)}>
                    <Settings2 stroke="#fff" size={20} strokeWidth={3} />
                  </button>
                  <button>
                    <X stroke="#fff" size={20} strokeWidth={3} />
                  </button>
                </div>
              )}
            </div>
            <div className="size-10 grid place-items-center">
              <button className="rotate-[90deg]">{resizeSvg}</button>
            </div>

            <motion.div
              drag
              dragPropagation={false}
              dragMomentum={false}
              dragConstraints={{
                top: -50,
                right: 50,
                left: -50,
                bottom: 100,
              }} //
              style={{
                x: distanceX,
                y: distanceY,
              }}
              dragElastic={0}
              onDragStart={() => {
                setIsDragging(true);
              }}
              onDragEnd={() => {
                setGhostDimensions({
                  height: ghostHeight.get(),
                  width: ghostWidth.get(),
                });
                setDimensions({
                  height: ghostHeight.get(),
                  width: ghostWidth.get(),
                });
                setIsDragging(false);
                console.log(pos);
                setTimeout(
                  () => [
                    setGhostDimensions({
                      height: 320,
                      width: 288,
                    }),
                  ],
                  500
                );
              }}
              dragSnapToOrigin
              className="size-10 absolute bottom-0 left-0 cursor-sw-resize"
            ></motion.div>
            <AnimatePresence mode="wait">
              {isDragging && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      opacity: {
                        duration: 0.2,
                        delay: 0.2,
                      },
                    },
                  }}
                  style={{
                    height: ghostHeight,
                    width: ghostWidth,
                  }}
                  className="absolute top-0 right-0 bg-orange-500/20 z-10 rounded-xl border-2 border-orange-500 pointer-events-none"
                ></motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <br />
      <div className="text-sm">
        <p className="mb-2 font-semibold">[ work in progress ]</p>
        <div className="flex flex-col gap-1 text-zinc-700">
          <div className="flex items-center gap-2">
            <div className="w-4">
              <ArrowRight size={14} />
            </div>
            Polish "ghostDiv" entry and exit animations.
          </div>
          <div className="flex items-start gap-2">
            <div className="w-4 pt-1">
              <ArrowRight size={14} />
            </div>{" "}
            <p>
              Add bounds to prevent user from adjusting the dimensions when at
              the edges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingWindow;
