"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { usePointerPosition } from "./usePointerPosition";

const Page = () => {
  const cursorRef = useRef(null);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setMouseX(clientX);
    setMouseY(clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const xValue = useMotionValue(mouseX);
  const yValue = useMotionValue(mouseY);

  const xVelocity = useVelocity(xValue);
  const yVelocity = useVelocity(yValue);

  const mouseVelocity = useTransform<number, number>(
    [xVelocity, yVelocity],
    ([latestX, latestY]) => Math.abs(latestX) + Math.abs(latestY)
  );

  // const maskSize = useTransform(
  //   mouseVelocity,
  //   [-3000, 0, 3000],
  //   [500, 200, 500],
  //   {
  //     clamp: false,
  //   }
  // );

  const maskSize = isHovering ? 500 : 40;

  useEffect(() => {
    xValue.set(mouseX);
    yValue.set(mouseY);
  }, [mouseX, mouseY]);

  const hover = () => setIsHovering(true);
  const unhover = () => setIsHovering(false);

  return (
    <section className="w-full h-screen grid place-items-center relative">
      {/* <motion.div
        ref={cursorRef}
        style={{ x: xValue, y: yValue, scale }}
        transition={{
          duration: 0.4,
        }}
        className="size-8 rounded-full bg-black fixed inset-0 transition-transform duration-500 ease-out"
      ></motion.div> */}

      <div
        onMouseEnter={hover}
        onMouseMove={unhover}
        className="w-full h-full relative z-10 bg-white grid place-items-center"
      >
        <div className="max-w-2xl m-auto">
          <div className="bg-blue-200 w-full h-full">
            <img
              src="/images/butterfly.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <motion.div
        id="mask"
        animate={{
          WebkitMaskPosition: `${mouseX}px ${mouseY}px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        className="w-full h-full absolute bg-red-500 inset-0 pointer-events-none z-20"
      ></motion.div>
    </section>
  );
};

export default Page;
