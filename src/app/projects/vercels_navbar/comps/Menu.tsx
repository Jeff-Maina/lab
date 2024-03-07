import { motion, AnimatePresence } from "framer-motion";
import { MenuVariants } from "./Variants";
import { FC } from "react";
import { Menuprops } from "./Interfaces";

const Menu: FC<Menuprops> = ({ isAnyLinkHovered }) => {
  return (
    <AnimatePresence mode="wait">
      {isAnyLinkHovered && (
        <motion.div
          variants={MenuVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="absolute top-full left-0 h-72 bg-white border w-[30rem] rounded-2xl origin-top border-zinc-200"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
