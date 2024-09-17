"use client";

import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";
import { AnimVariants, HeartAnim } from "./variants";

const MESSAGES = [
  {
    type: "r",
    message: "The sun will rise and we will try again.",
  },
  {
    type: "s",
    message: "Paths are made by walking",
  },
];

const Message = ({
  message,
}: {
  message: { type: string; message: string };
}) => {
  const [isLiked, setItemLiked] = useState<Boolean>(false);
  const likeComment = () => setItemLiked(!isLiked);

  const custom_class =
    message.type === "r"
      ? "bg-neutral-200/70 text-neutral-600"
      : "ml-auto bg-blue-500 text-white";

  return (
    <>
      <div
        onDoubleClick={likeComment}
        className={` p-2 px-4 font-medium max-w-fit rounded-3xl relative ${custom_class} cursor-pointer`}
      >
        <p className="select-none text-sm">{message.message}</p>
        {/* reaction */}
        <AnimatePresence mode="wait">
          {isLiked ? (
            <motion.div
              variants={AnimVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-neutral-200 h-8 w-10 grid place-items-center border-2 border-white rounded-full absolute left-2 top-[90%] pointer-events-none"
            >
              <motion.div
                variants={HeartAnim}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-xs select-none"
              >
                ❤️
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        {isLiked ? (
          <motion.div
            initial={{
              height: 0,
            }}
            animate={{
              height: 10,
            }}
            exit={{
              height: 0,
            }}
            transition={{
              duration: 0.2,
            }}
          ></motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

const Page = () => {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <p className="w-full max-w-96 text-sm text-neutral-600">
        {" "}
        <span className="text-red-600">*</span> Double click to like message.
      </p>
      <div className="w-full max-w-96 rounded-3xl h-96  border p-6 flex flex-col gap-2">
        <p className="text-center mb-4 text-xs text-neutral-500 select-none">
          Today 11:23
        </p>
        {MESSAGES.map((message, i) => (
          <Message message={message} key={i} />
        ))}
        <p className="text-xs mt-2 text-neutral-500 text-right select-none">
          Seen 2h ago
        </p>
      </div>
      <div className="w-full max-w-96">
        <a href="" className="text-sm underline">
          source code
        </a>
      </div>
    </main>
  );
};

export default Page;
