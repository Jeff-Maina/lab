import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { AddMenuProps } from "./Interfaces";
import { AddMenuVariants, opacityVariants } from "./Variants";
import { X } from "lucide-react";

const AddMenu: FC<AddMenuProps> = ({ isAddMenuActive, closeAddMenu }) => {
  return (
    <AnimatePresence>
      {isAddMenuActive ? (
        <motion.div
          variants={AddMenuVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="absolute bg-[#0e0d0d] bottom-0 right-0 rounded-[30px] shadow-xl p-6 overflow-hidden origin-bottom-right"
        >
          <motion.div
            variants={opacityVariants}
            initial="initial"
            animate="active"
            exit="inactive"
            className="h-full w-full flex flex-col items-start justify-between overflow-hidden"
          >
            <div className="flex items-center w-full justify-between mb-3">
              <p className="text-white text-lg font-semibold">Create a new Bit</p>
              <button
                onClick={closeAddMenu}
                className="bg-[#2a2a2a] p-2 rounded-full"
              >
                <X stroke="white" size={18} strokeWidth={3} />
              </button>
            </div>
            <div>
              <p className="text-zinc-500 text-left">
                Proident elit exercitation in deserunt enim veniam aliquip
                mollit cupidatat occaecat laborum sunt laborum.
              </p>
            </div>
            <div className="w-full bg-[#2a2a2a] rounded-[10px]">
              <input
                type="text"
                className="p-3 w-full bg-transparent text-white placeholder:text-[#6a6a6a] rounded-[10px] outline-none focus:border"
                placeholder="Enter url"
              />
            </div>
            <button
              onClick={closeAddMenu}
              className="p-3 bg-blue-600 w-full rounded-[10px] text-white font-medium hover:bg-blue-800 transition-all duration-200"
            >
              continue
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default AddMenu;
