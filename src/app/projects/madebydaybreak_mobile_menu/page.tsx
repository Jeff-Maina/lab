"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CreditCard,
  File,
  LogOut,
  MessageCircle,
  Plus,
} from "lucide-react";
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
              <Plus className="relative z-10 select-none pointer-events-none" />
            </motion.button>
            <motion.div
              variants={MenuVariants}
              initial="initial"
              animate={isMenuActive ? "active" : "inactive"}
              className=" absolute bg-white bottom-0 rounded-[2rem] overflow-hidden"
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: isMenuActive ? 1 : 0,
                }}
                transition={{
                  delay: isMenuActive ? 0.35 : 0,
                  duration: isMenuActive ? 0.25 : 0,
                }}
                className="w-full h-full  p-6 flex flex-col justify-between"
              >
                <div className="w-full h-full bg-white">
                  <div className="w-full grid grid-cols-2 gap-2">
                    <div className="w-full h-[7rem] rounded-lg bg-neutral-100 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-neutral-200 transition">
                      <span>
                        <ArrowRight size={18} />
                      </span>
                      <p className="tracking-tight text-neutral-700">
                        Send Money
                      </p>
                    </div>
                    <div className="w-full h-[7rem] rounded-lg bg-neutral-100 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-neutral-200 transition">
                      <span>
                        <Plus size={18} />
                      </span>
                      <p className="tracking-tight text-neutral-700">
                        Add Money
                      </p>
                    </div>
                    <div className="w-full h-[7rem] rounded-lg bg-neutral-100 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-neutral-200 transition">
                      <span>
                        <File size={18} />
                      </span>
                      <p className="tracking-tight text-neutral-700">
                        Invoices
                      </p>
                    </div>
                    <div className="w-full h-[7rem] rounded-lg bg-neutral-100 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-neutral-200 transition-200">
                      <span>
                        <CreditCard size={18} />
                      </span>
                      <p className="tracking-tight text-neutral-700">My Card</p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="size-10 rounded-full bg-neutral-100 grid place-items-center cursor-pointer hover:bg-neutral-200 transition-200">
                    <MessageCircle size={16} />
                  </div>
                  <div className="size-10 rounded-full bg-neutral-100 grid place-items-center cursor-pointer hover:bg-neutral-200 transition-200">
                    <LogOut size={16} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
