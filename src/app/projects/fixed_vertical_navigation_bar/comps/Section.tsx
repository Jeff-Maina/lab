import { FC, useRef, useEffect } from "react";
import { SectionProps } from "../Interfaces";
import { useInView } from "framer-motion";

const Section: FC<SectionProps> = ({ section, index, updateActiveSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      updateActiveSection(index);
    }
  }, [isInView]);

  return (
    <div ref={ref} key={index} className="w-full grid gap-4 relative">
      <div id={section} className="absolute"></div>
      <h1 className="text-3xl font-semibold tracking-tighter">{section}</h1>
      <div className="w-full flex flex-col gap-4 ">
        {[1, 2, 3].map((_, index) => {
          return (
            <div key={index} className="grid gap-2">
              <div className="w-full aspect-video my-4 bg-neutral-200 rounded-md"></div>
              <div className="bg-neutral-200/80 rounded-md h-4 w-3/4"></div>
              <div className="bg-neutral-200/80 rounded-md h-4"></div>
              <div className="bg-neutral-200/80 rounded-md h-4 w-2/4"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Section;
