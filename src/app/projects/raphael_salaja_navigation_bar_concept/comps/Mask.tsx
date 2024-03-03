import { MaskProps } from "./Interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { MaskVariants } from "./Variants";
import { FC } from "react";

const Mask: FC<MaskProps> = ({ isMaskActive, resetAll }) => {
  return (
    <AnimatePresence mode="wait">
      {isMaskActive ? (
        <motion.div
          variants={MaskVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          onClick={resetAll}
          className="absolute inset-0 w-full h-full bg-black/20 backdrop-blur-lg z-20"
        ></motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Mask;
