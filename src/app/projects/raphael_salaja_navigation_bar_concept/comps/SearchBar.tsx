import { FC } from "react";
import { SearchBarVariants, opacityVariants } from "./Variants";
import { SearchbarProps } from "./Interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const SearchBar: FC<SearchbarProps> = ({
  isSearchBarActive,
  closeSearchBar,
}) => {
  return (
    <AnimatePresence mode="wait">
      {isSearchBarActive ? (
        <motion.div
          variants={SearchBarVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="absolute left-2/4 shadow-xl -translate-x-2/4 bg-[#0e0d0d] top-2/4 -translate-y-2/4 rounded-full"
        >
          <motion.div
            variants={opacityVariants}
            initial="initial"
            animate="active"
            exit="inactive"
            className="w-full h-full rounded-full z-20 flex items-center justify-between p-4"
          >
            <div className="w-3/4">
              <input
                type="text"
                className="outline-none bg-transparent h-full w-full text-white placeholder:text-[#6a6a6a] p-2 pl-4"
                placeholder="Search"
              />
            </div>
            <div
              onClick={closeSearchBar}
              className="bg-[#2a2a2a] p-2 rounded-full"
            >
              <X stroke="white" size={14} strokeWidth={3} />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default SearchBar;
