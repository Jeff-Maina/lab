"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";
import { useState, FC } from "react";
import { ButtonProps, MaskVariants, MenuVariants } from "./variants";

interface MaskProps {
  isMenuActive: boolean;
  closeMenu: () => void;
}

const Mask: FC<MaskProps> = ({ isMenuActive, closeMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {isMenuActive ? (
        <motion.div
          onClick={closeMenu}
          variants={MaskVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="absolute inset-0 w-full h-full bg-black/20 backdrop-blur-sm"
        ></motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const page = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(!isMenuActive);
  const closeMenu = () => setMenuActive(false);
  return (
    <main className="max-w-md m-auto w-full min-h-screen pt-10 lg:pt-32 flex flex-col gap-10 p-6">
      <header>
        <Link href="/" className="flex items-center gap-1 max-w-fit">
          <ArrowLeft size={16} />
          Back
        </Link>
        <br />
        <p className="text-xl font-semibold tracking-tight">
          Daybreak mobile menu from{" "}
          <a href="" target="_blank" className="underline decoration-zinc-400">
            {" "}
            X.
          </a>
        </p>
        <small className="text-zinc-500">Saturday, 2 March 2024</small>
      </header>
      <div className=" md:block w-full rounded-xl border bg-zinc-100/70 h-[42rem] flex items-end justify-center relative">
        <img
          draggable="false"
          src="/images/clove.png"
          alt=""
          className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 size-32"
        />

        <div className="w-full h-full flex items-end justify-center relative">
          <Mask closeMenu={closeMenu} isMenuActive={isMenuActive} />
          <div className="absolute bottom-24 w-full flex items-center justify-center z-20">
            <motion.button
              onClick={toggleMenu}
              variants={ButtonProps}
              initial="initial"
              animate={isMenuActive ? "active" : "inactive"}
              className="size-14 rounded-full grid place-items-center relative z-10"
            >
              <div
                className={`absolute center_absolute h-full w-full bg-black rounded-full ${
                  isMenuActive ? "scale-100" : "scale-0"
                } transition-transform duration-[500ms]`}
              ></div>
              <Plus className="relative z-10" />
            </motion.button>
            <motion.div
              variants={MenuVariants}
              initial="initial"
              animate={isMenuActive ? "active" : "inactive"}
              className=" absolute bg-white bottom-0 rounded-[2rem]"
            ></motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
