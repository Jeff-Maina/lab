"use client";

import { FC, useRef, useState } from "react";
import Section from "./comps/Section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Scrollspy from "./comps/Scrollspy";
import { PageSections } from "./data";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
const page: FC = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const [top, setTop] = useState(0);
  const translate = useTransform(scrollYProgress, [0, 1], [-2, 96]);
  const [activeSectionsIndices, setActiveSectionIndices] = useState([0]);

  const updateActiveSectionIndices = (index: number) =>
    setActiveSectionIndices([...activeSectionsIndices, index]);

  useMotionValueEvent(translate, "change", (latest) => {
    setTop(latest);
  });

  const removeIndex = (index: number) => {
    const newIndices = activeSectionsIndices.filter((i) => i !== index);
    setActiveSectionIndices(newIndices);
  };

  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      <main className="max-w-5xl m-auto w-full min-h-screen pt-10 lg:pt-0 flex flex-col gap-10 lg:gap-0 p-6 lg:p-0">
        <header className="lg:fixed flex top-4 left-4 z-50 w-full items-center justify-between lg:px-10">
          <Link href="/" className="flex items-center gap-1">
            <ArrowLeft size={16} />
            Back
          </Link>
          <p className="text-sm font-semibold tracking-tight hidden lg:block">
            Recreating the Scrollspy from{" "}
            <a
              href="https://mrpops.ua/en"
              target="_blank"
              className="underline decoration-zinc-400 "
            >
              Andreas Antonsson's Website
            </a>
          </p>
        </header>
        <section
          ref={containerRef}
          className="lg:flex flex-col w-full lg:gap-32 m-auto hidden"
        >
          {PageSections.map((section, index) => (
            <Section
              key={index}
              section={section}
              index={index}
              updateActiveSectionIndices={updateActiveSectionIndices}
              removeIndex={removeIndex}
            />
          ))}
        </section>
        <Scrollspy top={top} activeSectionsIndices={activeSectionsIndices} />
        <div className="lg:hidden">
          <p className="text-sm">
            [ Not optimized for small screens. Please switch to a larger
            screen.]
          </p>
        </div>
      </main>
    </ReactLenis>
  );
};

export default page;
