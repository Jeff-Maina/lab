import { ArrowUp, Reply, X } from "lucide-react";
import { FC } from "react";
import { InputProps } from "./Interfaces";
import { motion } from "framer-motion";

const InputBox: FC<InputProps> = ({ closeInputBox, isReplying, replyText }) => {
  return (
    <div className="w-96 rounded-xl overflow-hidden">
      {/* {isReplying && ( */}
      <motion.div
        initial={{
          height: 0,
        }}
        animate={{
          height: isReplying ? "auto" : 0,
        }}
        transition={{
          height: {
            duration: 0.2,
          },
        }}
        className="flex w-full bg-[#3a3a3a] gap-2 overflow-hidden"
      >
        <div className="p-4  flex w-full h-full gap-2">
          <div>
            <Reply
              className="rotate-[180deg]"
              stroke="#999"
              size={16}
              strokeWidth={3}
            />
          </div>
          <div className="w-full max-h-24  overflow-y-scroll reply_box">
            <p className="text-white text-sm  leading-relaxed pr-2">
              {replyText}
            </p>
          </div>
          <div onClick={closeInputBox} className="cursor-pointer">
            <X stroke="#999" size={16} strokeWidth={3} />
          </div>
        </div>
      </motion.div>
      {/* )} */}
      <div className="bg-[#2a2a2a]  flex p-2 items-center shadow-xl relative z-10">
        <input
          type="text"
          placeholder="Message ChatGPT..."
          className="p-2 text-white outline-none bg-transparent w-full"
        />
        <button className="size-9 aspect-square bg-[#4a4a4a] rounded-[0.5rem] grid place-items-center">
          <ArrowUp stroke="white" size={16} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default InputBox;
