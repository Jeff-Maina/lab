"use client";

import { motion } from "framer-motion";
import React from "react";

type TAppIconProps = {
  centerPoint: { x: number; y: number };
};

const AppIcon = ({ centerPoint }: TAppIconProps) => {
  const appRef = React.useRef<HTMLDivElement>(null);
  const checkCoordinates = (e: any) => {
    console.log(centerPoint);
    const bounds = e.target.getBoundingClientRect();
    const { width, height, x, y } = bounds;
    const cPoint = { x: x + width / 2, y: y + height / 2 };
    console.log(cPoint);
  };

  React.useEffect(() => {}, [
    
  ]);

  return (
    <motion.div
      ref={appRef}
      onClick={(e) => checkCoordinates(e)}
      className="h-full w-full bg-pink-400 rounded-full"
    ></motion.div>
  );
};

const AppleWatchApps = () => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const [centerPoint, setCenterPoint] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (!parentRef.current) return;
    const { width, height, x, y } = parentRef.current.getBoundingClientRect();
    setCenterPoint({ x: x + width / 2, y: y + height / 2 });
  }, [parentRef]);

  return (
    <div
      ref={parentRef}
      className="relative size-64 bg-black rounded-2xl grid place-items-center overflow-hidden"
    >
      <motion.div
        drag
        dragMomentum={false}
        dragConstraints={parentRef}
        dragElastic={0.1}
        className="h-[25rem] absolute aspect-square bg-black"
      >
        <div className="w-full h-full grid grid-cols-7 grid-rows-7 p-3 gap-2">
          {[...Array(49).keys()].map((_, i) => {
            return <AppIcon centerPoint={centerPoint} key={i} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default AppleWatchApps;
