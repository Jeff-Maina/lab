import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { ArrowRight, Sun } from "lucide-react";
import { FC } from "react";

const BrightnessIndicator: FC = () => {
  const x = useMotionValue(0);

  const backgroundColor = useTransform(x, [0, 255], ["#000000c5", "#0000003a"]);
  const rotate = useTransform(x, [0, 258], [0, 540]);

  useMotionValueEvent(x, "change", (latest) => {
    // console.log(opacity.get());
  });
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
        <motion.div
          style={{
            backgroundColor,
          }}
          className="relative z-10 w-full h-full p-10"
        >
          <div className="w-full rounded-full h-12 bg-zinc-700 relative overflow-hidden">
            <motion.div
              style={{
                rotate,
              }}
              className="h-full rounded-full relative z-10 grid place-items-center aspect-square pointer-events-none select-none"
            >
              <Sun stroke="#fff" size={24} />
            </motion.div>
            <motion.div
              drag="x"
              style={{ x }}
              dragMomentum={false}
              dragConstraints={{
                right: 258,
                left: 0,
              }}
              dragElastic={0}
              className="absolute w-[105%] h-full bg-zinc-500 top-0 rounded-full right-[84%] cursor-grab active:cursor-grabbing"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrightnessIndicator;
