"use client";

import {
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { MessageCircle, RotateCcw, Settings, Trash, User } from "lucide-react";
import { useRef, useState } from "react";

const page = () => {
  const [xMotion, setX] = useState<number>(0);
  const [scope, animate] = useAnimate();
  const notifRef = useRef(null);

  const x = useMotionValue(0);
  // opacity
  const settingsOpacity = useTransform(x, [-20, -150, -300], [0, 1, 0.4]);
  const deleteOpacity = useTransform(x, [-20, -150], [0, 1]);
  // translation x
  const settingsX = useTransform(x, [-160, -300], [0, -70]);
  const deleteX = useTransform(x, [-160, -300], [0, -100]);
  // bg-color
  const bg = useTransform(
    x,
    [-180, -300],
    ["rgb(214, 214, 214)", "rgb(214, 36, 78)"]
  );
  const strokeColor = useTransform(
    x,
    [-180, -300],
    ["rgb(0, 0, 0)", "rgb(255, 255, 255)"]
  );
  // Rotation;
  const rotate = useTransform(x, [-180, -300], [0, 15]);

  return (
    <>
      <p className="p-4 absolute top-4 right-4"> {x.get()}</p>

      <main className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <p className="w-96 text-xs"><span className="text-red-500">*</span> Drag the notification</p>
        <div className="w-96 h-[32rem] rounded-3xl relative">
          <div className="w-full bg-neutral-200/60 h-[25rem] border border-neutral-300 rounded-3xl p-4 overflow-hidden">
            {/* notification */}
            <div className="relative">
              <motion.div
                ref={scope}
                style={{
                  x,
                }}
                drag="x"
                dragConstraints={{
                  right: 100,
                }}
                dragSnapToOrigin={xMotion < 820 || xMotion > 920}
                dragMomentum={false}
                dragElastic={0.2}
                onDrag={(event, info) => {
                  setX(info.point.x);
                }}
                onDragEnd={() => {
                  if (xMotion < 900 && xMotion > 820) {
                    animate(
                      scope.current,
                      {
                        x: -160,
                      },
                      {
                        duration: 0.25,
                      }
                    );
                  }
                }}
                className="bg-white p-4 shadow rounded-xl flex flex-col gap-4 cursor-grab active:cursor-grabbing relative z-10"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle size={14} className="mr-2" />
                  <p className="text-xs">Message</p>
                  <div className="size-[3px] bg-black rounded-full"></div>
                  <p className="text-xs">Safaricom</p>
                  <div className="size-[3px] bg-black rounded-full"></div>
                  <p className="text-xs">16m</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="size-10 rounded-full bg-orange-400 grid place-items-center min-w-10">
                    <User size={20} fill={"black"} />
                  </div>
                  <div>
                    <p className="text-xs leading-relaxed text-neutral-600">
                      Dear customer, you do not have an active data bundle.
                      Please dial <span>*544#</span> to buy data bundle for you
                      to browse the internet
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* controls */}
              <div className="absolute right-0 top-0 h-full flex items-center gap-4 px-4">
                <motion.button
                  style={{
                    opacity: deleteOpacity,
                    x: deleteX,
                    backgroundColor: bg,
                    color: strokeColor,
                    rotate,
                  }}
                  className="size-12 bg-neutral-300 rounded-full grid place-items-center hover:!bg-neutral-400"
                >
                  <Trash size={20} />
                </motion.button>
                <motion.button
                  style={{
                    opacity: settingsOpacity,
                    x: settingsX,
                  }}
                  className="size-12 bg-neutral-300 rounded-full grid place-items-center"
                >
                  <Settings size={20} className="stroke-neutral-700" />
                </motion.button>
              </div>
            </div>
          </div>
          <div className="w-full absolute h-2/4 top-2/4 left- bg-gradient-to-b from-neutral-200/10 via-white to-white"></div>
        </div>
      </main>
    </>
  );
};

export default page;
