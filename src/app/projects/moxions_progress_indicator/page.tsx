"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { motion, useScroll } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const Steps = [
  {
    task: "Schedule",
    description: "Reserve online or give us a call.",
  },
  {
    task: "Deliver",
    description: "We'll get it wheree you need it, all charged up.",
  },
  {
    task: "Monitor",
    description: "Gain real-time insight from remote telematics.",
  },
  {
    task: "Swap",
    description: "We'll make sure you never run out of power.",
  },
  {
    task: "Pickup",
    description: "We'll pick it up when your job is done.",
  },
];

const page = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-70%", "end center"],
  });

  return (
    <ReactLenis root options={{ duration: 1.5 }}>
      <section>
        <section className="w-full h-screen grid place-items-center">
          <header className="lg:fixed flex top-0 left-0  z-50 w-full items-center justify-between lg:px-10 lg:py-6">
            <Link href="/" className="flex items-center gap-1">
              <ArrowLeft size={16} />
              Back
            </Link>
            <p className="text-sm font-semibold tracking-tight hidden lg:block text-zinc-600">
              <a
                href="
                https://moxion-preprod.rejouice.io/
              "
                target="_blank"
                className="underline text-black"
              >
                Moxion's
              </a>{" "}
              progress indicator.
            </p>
          </header>
          <p>[ scroll ]</p>
        </section>
        <section className="w-full min-h-screen pb-32">
          <header className="w-full h-[20vh]"></header>
          <div ref={ref} className="w-full grid grid-cols-12 h-full">
            <div className="col-span-2 h-full grid place-items-center w-full">
              <div className="w-[2px] h-full bg-zinc-300 relative rounded-full">
                <div className="absolute size-2 rounded-full left-2/4 -translate-x-2/4 top-0 bg-black z-20"></div>
                <motion.div
                  style={{ scaleY: scrollYProgress }}
                  className="absolute inset-0 origin-top bg-black w-full rounded-full"
                ></motion.div>
                <div className="absolute size-2 rounded-full left-2/4 -translate-x-2/4 bottom-0 bg-black z-20"></div>
              </div>
            </div>
            <div className="col-span-10 flex flex-col gap-32 lg:gap-44">
              {Steps.map((step, index) => {
                return (
                  <div
                    key={index}
                    className="flex pt-4 lg:pt-8 max-w-7xl lg:text-2xl border-t border-black font-bold relative w-full"
                  >
                    <div className="w-full flex justify-between max-w-4xl tracking-tighter">
                      <div className="flex gap-10 lg:gap-20 relative">
                        <p>0{index}.</p>
                        <p>{step.task}</p>
                      </div>
                      <div className="lg:w-[30rem]">{step.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="w-full h-[50vh] grid place-items-center"></section>
      </section>
    </ReactLenis>
  );
};

export default page;
