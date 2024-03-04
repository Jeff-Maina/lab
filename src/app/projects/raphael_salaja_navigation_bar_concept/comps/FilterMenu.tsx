import { FC } from "react";
import { FilterMenuProps } from "./Interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { FilterMenuVariants, opacityVariants } from "./Variants";
import { ALargeSmall, Calendar, Languages, X } from "lucide-react";

const FilterMenu: FC<FilterMenuProps> = ({
  isFIlterMenuActive,
  closeFilterMenu,
}) => {
  return (
    <AnimatePresence mode="wait">
      {isFIlterMenuActive ? (
        <motion.div
          variants={FilterMenuVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="w-[350px] h-[300px] bg-[#0e0d0d] rounded-[30px]  absolute bottom-0 left-2/4 -translate-x-2/4 p-6 cursor-default"
        >
          <motion.div
            variants={opacityVariants}
            initial="initial"
            animate="active"
            exit="inactive"
            className="w-full h-full flex flex-col justify-between"
          >
            <div className="w-full flex items-center justify-between mb-3">
              <p className="text-white text-lg font-semibold">Sorting</p>
              <button
                onClick={closeFilterMenu}
                className="bg-[#2a2a2a] p-2 rounded-full"
              >
                <X stroke="white" size={18} strokeWidth={3} />
              </button>
            </div>
            <div className="w-full h-[80%]  flex flex-col justify-between text-white text-sm">
              <div className="grid gap-3">
                <div className="w-full bg-[#2a2a2a] p-4 rounded-[0.7rem] flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[#7a7a7a] font-medium">
                    <Calendar stroke={"#7a7a7a"} size={18} />
                    <p>Date Created</p>
                  </div>
                  <div></div>
                </div>
                <div className="w-full bg-[#2a2a2a] p-4 rounded-[0.7rem] flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[#7a7a7a] font-medium">
                    <Languages stroke={"#7a7a7a"} size={18} />
                    <p>Language</p>
                  </div>
                  <div></div>
                </div>
                <div className="w-full bg-[#2a2a2a] p-4 rounded-[0.7rem] flex items-center justify-between">
                  <div className="flex gap-2 text-[#7a7a7a] font-medium">
                    <ALargeSmall stroke={"#7a7a7a"} size={20} />
                    <p>Title</p>
                  </div>
                  <div></div>
                </div>
              </div>

              <button
                onClick={closeFilterMenu}
                className="p-4 bg-blue-600 w-full rounded-[16px] text-white font-medium hover:bg-blue-800 transition-all duration-200"
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default FilterMenu;
