import { motion } from "framer-motion";
import { ArrowRight, Sun } from "lucide-react";
import { FC } from "react";

const BrightnessIndicator: FC = () => {
  return (
    <div className="w-full max-w-sm h-screen flex flex-col justify-center">
      <div className="flex items-center gap-2">
        <ArrowRight strokeWidth={4} className="stroke-zinc-400" size={18} />
        <p className="text-2xl font-bold tracking-tighter">
          Brightness Slider.
        </p>
      </div>
      <br />
      <div className="w-full max-w-sm  h-[40rem] isolate relative">
        <img
          src="/images/building.jpg"
          alt=""
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 w-full h-full bg-black/30 p-10">
          <div className="w-full rounded-full h-12 bg-zinc-800 relative overflow-hidden">
            <div className="h-full rounded-full relative z-10 grid place-items-center aspect-square pointer-events-none select-none">
              <Sun stroke="#fff" size={24} />
            </div>
            <motion.div
              drag="x"
              dragMomentum={false}
              dragConstraints={{
                right: 255,
                left: 0,
              }}
              dragElastic={0}
              className="absolute w-full h-full bg-zinc-700 top-0 rounded-full right-[84%] cursor-grab active:cursor-grabbing"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrightnessIndicator;
