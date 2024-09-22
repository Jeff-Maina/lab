"use client";

import { cn } from "@/app/lib/utils";
import { LayoutGroup, motion } from "framer-motion";
import { Grip } from "lucide-react";
import { useState } from "react";

const GRID_ROWS = 4;
const GRID_COLS = 5;

const UbuntuAppDirectory = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const calculateDelay = (row: number, col: number, reverse: boolean) => {
    const maxRow = GRID_ROWS - 1;
    const maxCol = GRID_COLS - 1;
    const distance = Math.sqrt(
      Math.pow(maxRow - row, 2) + Math.pow(maxCol - col, 2)
    );

    if (reverse) {
      return (
        (1 - distance / Math.sqrt(Math.pow(maxRow, 2) + Math.pow(maxCol, 2))) *
        0.5
      );
    } else {
      return distance * 0.1;
    }
  };

  return (
    <div className="w-full min-h-[70vh] grid place-items-center">
      <div className="w-3/4 h-[30rem] border rounded-md overflow-hidden">
        <div className="h-[27rem] relative w-full grid place-items-center">
          <motion.div
            className={cn(
              "w-3/4 h-[350px] flex  flex-wrap gap-3",
              isMenuOpen
                ? "items-start justify-start"
                : "items-start justify-start"
            )}
          >
            <LayoutGroup>
              {[...Array(20).keys()].map((_, i) => (
                <motion.div
                  key={i}
                  layout
                  transition={{
                    delay: calculateDelay(
                      Math.floor(i / GRID_COLS),
                      i % GRID_COLS,
                      !isMenuOpen
                    ),
                    duration: 0.2,
                  }}
                  className={cn(
                    "bg-neutral-300 hover:bg-neutral-300 rounded-[10%] cursor-pointer",
                    isMenuOpen
                      ? "size-[5px] absolute top-[100.5%] left-[93.5%] "
                      : "size-20 relative top-0 left-0 "
                  )}
                ></motion.div>
              ))}
            </LayoutGroup>
          </motion.div>
        </div>
        <div className="h-[3rem] w-full flex justify-end border-t relative z-20 bg-white">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="h-full aspect-square grid place-items-center"
          >
            <Grip />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UbuntuAppDirectory;
