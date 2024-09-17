"use client";

import { cn } from "@/app/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { div } from "framer-motion/client";
import { Camera, Image, Mic, Reply, Sticker, X } from "lucide-react";
import { useState } from "react";

type TMessageProps = {
  setHasReplied: (value: boolean) => void;
  message: string;
  className?: string;
  setMessage: (value: string) => void;
};

const MessageComp = ({
  setHasReplied,
  className,
  message,
  setMessage,
}: TMessageProps) => {
  const [xMotion, setX] = useState(0);
  const x = useMotionValue(0);

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
    <>
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
        <motion.svg height="32" width="32" xmlns="http://www.w3.org/2000/svg">
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
            setMessage(message);
          }
        }}
        className={cn(
          "bg-neutral-200/70 relative  rounded-3xl text-sm text-neutral-700 px-4 py-3 max-w-72",
          className
        )}
      >
        <p className="">{message}</p>
      </motion.div>
    </>
  );
};

const IgReplyMessage = () => {
  const [hasReplied, setHasReplied] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center gap-4">
      <p className="w-96 text-xs"> <span className="text-red-600">*</span> Drag a message</p>
      <div className="w-96 h-[28rem] border rounded-xl p-3 flex flex-col justify-between relative">
        {/* message */}
        <div className="flex flex-col gap-1">
          <p className="text-xs text-neutral-500 mb-3 text-center">
            July 17, 20:44
          </p>
          <div className="flex items-center gap-3 relative">
            <div className="size-7 rounded-full bg-transparent"></div>
            <MessageComp
              message="Even under the best of circumstances"
              setMessage={setMessage}
              setHasReplied={setHasReplied}
              className="rounded-bl-sm"
            />
          </div>

          <div className="flex items-end gap-3 relative">
            <div className="size-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>

            <MessageComp
              setMessage={setMessage}
              message="there's something so damn tragic about growing up"
              setHasReplied={setHasReplied}
              className="rounded-tl-sm"
            />
          </div>
        </div>

        {/* search input */}
        <div className="relative z-10">
          <div className="flex p-1.5 bg-neutral-200 rounded-full justify-between">
            <div className="size-7 min-w-7 rounded-full bg-black grid place-items-center">
              <Camera fill="#fff" size={18} className="stroke-black" />
            </div>
            {/* <input type="text" className="w-40 bg-transparent outline-none" /> */}
            {/* <div className="flex items-center gap-3 pr-2 !min-w-fit flex-shrink-0">
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
            </div> */}
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
              className="absolute w-full h-[3.8rem] left-0 bottom-0 border-t border-neutral-200 py-2 flex flex-col gap-1 px-4 pl-6"
            >
              <p className="text-xs text-neutral-500">Replying to 🦋reen🦋</p>
              <p className="text-xs text-neutral-800">{message}</p>
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
    </div>
  );
};

export default IgReplyMessage;
