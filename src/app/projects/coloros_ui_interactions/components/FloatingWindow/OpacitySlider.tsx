import { XCircle } from "lucide-react";
import { FC, useState } from "react";
import { opacitySliderProps } from "./interfaces";
import { motion } from "framer-motion";

const OpacitySlider: FC<opacitySliderProps> = ({ closeOpacitySlider, x }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="w-full grid grid-cols-6 p-6">
      <div className="col-span-5 w-full flex items-center">
        <div className="w-full h-3 flex items-center overflow-hidden rounded-full">
          <motion.div
            initial={{
              height: 4,
            }}
            animate={{
              height: isDragging ? 12 : 4,
            }}
            transition={{
              duration: 0.25,
            }}
            className="w-full rounded-full bg-[#3a3a3a] relative flex items-center h-1"
          >
            <motion.div
              initial={{
                height: 4,
              }}
              animate={{
                height: isDragging ? 12 : 4,
              }}
              transition={{
                duration: 0.25,
              }}
              style={{ x }}
              drag="x"
              dragMomentum={false}
              dragElastic={0}
              dragConstraints={{
                right: 250,
                left: 2,
              }}
              onDragStart={() => {
                setIsDragging(true);
              }}
              onDragEnd={() => {
                setIsDragging(false);
                closeOpacitySlider();
              }}
              className="w-[150%] absolute right-[98%] bg-orange-500 rounded-l-full"
            >
              <div className="absolute top-2/4 -translate-y-2/4 size-3 rounded-full left-[98%] bg-orange-500"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="col-span-1 w-full flex items-center justify-end">
        <button onClick={closeOpacitySlider}>
          <XCircle stroke="#fff" size={17} />
        </button>
      </div>
    </div>
  );
};

export default OpacitySlider;
