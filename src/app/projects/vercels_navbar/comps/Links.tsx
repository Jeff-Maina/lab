import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { LinkProps } from "./Interfaces";
import { FC } from "react";

const links = ["products", "resources", "solutions"];

const Links: FC<LinkProps> = ({
  hoveredLinkIndex,
  hoverLink,
  updateDirection,
}) => {
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

  const handleLinkHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const direction = getDirection(e);
    updateDirection(direction);
  };

  return (
    <div className="flex h-16 items-center">
      {links.map((link, index) => {
        const isHovered = index === hoveredLinkIndex;
        return (
          <div key={index} className="rounded-full relative z-10">
            <div
              onMouseEnter={(e) => {
                hoverLink(index);
                handleLinkHover(e);
              }}
              className=" flex items-center gap-1 py-1 px-5 relative z-30 cursor-pointer"
            >
              <p
                className={`select-none capitalize ${
                  isHovered ? "text-black" : "text-zinc-500"
                } transition-all duration-200`}
              >
                {link}
              </p>
              <div>
                <ChevronDown
                  size={14}
                  className={`${
                    isHovered
                      ? "stroke-black rotate-180"
                      : "stroke-zinc-500 rotate-0"
                  } transition-all duration-200`}
                />
              </div>
            </div>

            {/* indicator */}
            {index === hoveredLinkIndex && (
              <>
                <motion.div
                  layoutId="indicator"
                  transition={{
                    duration: 0.2,
                  }}
                  className="absolute inset-0 h-full w-full rounded-full z-[0] bg-neutral-200/60 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-200"
                ></motion.div>
                <motion.div
                  layoutId="arrow"
                  transition={{
                    duration: 0.2,
                  }}
                  className="absolute top-[128%] w-full flex justify-center opacity-0 group-hover/nav:opacity-100 transition-opacity duration-200"
                >
                  <div className="size-4 rotate-[45deg] rounded-tl border-l border-t bg-white border-zinc-300"></div>
                </motion.div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Links;
