"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MouseEventHandler } from "react";
import { useAnimate } from "framer-motion";
const arr = [1, 2, 3, 4, 5, 6];

const page = () => {
  const [scope, animate] = useAnimate();

  const getDirection = (e: any) => {
    const item = e.currentTarget;
    const directions = ["top", "right", "bottom", "left"];

    // Width and height of current item.
    const w = item.offsetWidth;
    const h = item.offsetHeight;

    const x =
      (e.clientX - item.getBoundingClientRect().left - w / 2) *
      (w > h ? h / w : 1);
    const y =
      (e.clientY - item.getBoundingClientRect().top - h / 2) *
      (h > w ? w / h : 1);

    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    return directions[d];
  };

  const animateIn = async (el: any, translation: string) => {
    await animate(
      el,
      {
        transform: [translation, "translate(0%,0%)"],
      },
      {
        duration: 0.3,
      }
    );
  };

  const animateOut = async (el: any, translation: string) => {
    await animate(
      el,
      {
        transform: translation,
      },
      {
        duration: 0.3,
      }
    );
  };

  const hoverImage = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    const direction = getDirection(e);

    const el = e.currentTarget.childNodes[1] as HTMLElement;
    const translation =
      direction === "top"
        ? "translate(0%,-100%)"
        : direction === "bottom"
        ? "translate(0%,100%)"
        : direction === "left"
        ? "translate(-100%,0%)"
        : "translate(100%,0%)";

    el.classList.add("bg-yellow-100");
    el.style.transform = translation;
    animateIn(el, translation);
  };

  const unhoverImage = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    const direction = getDirection(e);
    const el = e.currentTarget.childNodes[1] as HTMLElement;
    const translation =
      direction === "top"
        ? "translate(0%,-100%)"
        : direction === "bottom"
        ? "translate(0%,100%)"
        : direction === "left"
        ? "translate(-100%,0%)"
        : "translate(100%,0%)";

    animateOut(el, translation);
  };

  return (
    <main className="max-w-5xl m-auto w-full min-h-screen pt-10 lg:pt-32 flex flex-col gap-10 p-6">
      <header>
        <Link href="/" className="flex items-center gap-1">
          <ArrowLeft size={16} />
          Back
        </Link>
        <br />
        <p className="text-xl font-semibold tracking-tight">
          Recreating the Gallery Hover Effect from{" "}
          <a href="https://mrpops.ua/en" target="_blank" className="underline decoration-yellow-400 ">
            Mr. Pops'
          </a>{" "}
          Website
        </p>
        <small className="text-zinc-500">Sunday, 3 March 2024</small>
      </header>
      <div className="hidden w-full rounded border border-yellow-300 bg-yellow-200 min-h-[80vh] p-10 lg:p-20 md:grid place-items-center">
        <div className="h-[90%] w-full max-w-3xl grid grid-cols-3 gap-1">
          {arr.map((_, index) => {
            return (
              <div
                onMouseEnter={(e) => hoverImage(e, index)}
                onMouseLeave={(e) => unhoverImage(e, index)}
                key={index}
                className="w-full h-full rounded-[0.4rem] p-6 bg-white flex items-center justify-center relative overflow-hidden cursor-pointer"
              >
                <img
                  src="/images/sunflower.png"
                  className="h-2/4 object-cover pointer-events-none relative z-10 select-none"
                  alt=""
                />
                <div className="w-full h-full absolute pointer-events-none rounded"></div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default page;
