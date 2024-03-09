"use client";

import { FC, useEffect, useRef } from "react";
import { SectionProps } from "../Interface";
import { useInView } from "framer-motion";

const Section: FC<SectionProps> = ({
  section,
  index,
  updateActiveSectionIndices,
  removeIndex,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      updateActiveSectionIndices(index);
    } else {
      removeIndex(index);
    }
  }, [isInView]);

  return (
    <section
      id={section}
      ref={ref}
      className="w-full grid place-items-center h-[60vh] md:h-screen"
    >
      <div className="w-full grid md:gap-10 gap-4 relative ">
        <p className="md:text-3xl text-black font-bold tracking-tighter">
          <span className="text-zinc-400">#</span> {section}
        </p>
        <div className="w-full bg-zinc-200 rounded-[0.3rem] aspect-square md:aspect-video relative z-10"></div>
      </div>
    </section>
  );
};

export default Section;
