import { FC } from "react";
import { IndicatorProps } from "../Interfaces";
import { motion } from "framer-motion";

const Indicator: FC<IndicatorProps> = ({ layoutId }) => {
  return (
    <motion.div
      layoutId={layoutId}
      transition={{
        duration: 0.2,
      }}
      className="absolute inset-0 w-full h-full bg-[#2a2a2a] z-[5] rounded-[0.3rem]"
    ></motion.div>
  );
};

export default Indicator;
