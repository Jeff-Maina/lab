import { motion, AnimatePresence } from "framer-motion";
import { MenuVariants } from "./Variants";
import { FC } from "react";
import { Menuprops, submenuprops } from "./Interfaces";
import { Circle } from "lucide-react";

const TabVariants = {
  initial: (animationDirection: string) => ({
    x:
      animationDirection === "left"
        ? "80%"
        : animationDirection === "right"
        ? "-80%"
        : "0%",
    opacity: 0,
  }),
  active: {
    opacity: 1,
    x: "0%",
    transition: {
      x: {
        duration: 0.25,
      },
      opacity: {
        duration: 0.25,
      },
    },
  },
  inactive: {
    x: "0%",
    opacity: 0,
    transition: {
      x: {
        duration: 0.25,
      },
      opacity: {
        duration: 0.25,
      },
    },
  },
};

const ProductsMenu: FC = () => {
  return (
    <div className="w-full h-full p-6">
      <div>
        <p>Products</p>
        <br />
        <div className="w-full grid grid-cols-2">
          <div className="grid gap-8">
            <div className="flex gap-4 items-center">
              <div>
                <Circle size={16} fill="#000" />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <p>Anim sit cupidatat cillum.</p>
                <p className="text-zinc-500">
                  Deserunt velit adipisicing culpa nisi quis exercitation.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <Circle size={16} fill="#000" />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <p>Anim sit cupidatat cillum.</p>
                <p className="text-zinc-500">
                  Deserunt velit adipisicing culpa nisi quis exercitation.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="flex gap-4 items-center">
              <div>
                <Circle size={16} fill="#" />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <p>Anim sit cupidatat cillum.</p>
                <p className="text-zinc-500">
                  Deserunt velit adipisicing culpa nisi quis exercitation.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <Circle size={16} fill="#000" />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <p>Anim sit cupidatat cillum.</p>
                <p className="text-zinc-500">
                  Deserunt velit adipisicing culpa nisi quis exercitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SolutionsMenu: FC = () => {
  return (
    <div className="w-full h-full p-6">
      <div>
        <p>Solutions</p>
        <br />
        <div className="w-full grid grid-cols-2">
          <div className="grid gap-8">
            <div className="flex gap-4 items-center">
              <div>
                <Circle size={16} fill="#000" />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <p>Anim sit cupidatat cillum.</p>
                <p className="text-zinc-500">
                  Deserunt velit adipisicing culpa nisi quis exercitation.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <Circle size={16} fill="#000" />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <p>Anim sit cupidatat cillum.</p>
                <p className="text-zinc-500">
                  Deserunt velit adipisicing culpa nisi quis exercitation.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="flex gap-4 items-center">
              <div>
                <Circle size={16} fill="#" />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <p>Anim sit cupidatat cillum.</p>
                <p className="text-zinc-500">
                  Deserunt velit adipisicing culpa nisi quis exercitation.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <Circle size={16} fill="#000" />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <p>Anim sit cupidatat cillum.</p>
                <p className="text-zinc-500">
                  Deserunt velit adipisicing culpa nisi quis exercitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ResourcesMenu: FC = () => {
  return (
    <div className="w-full h-full p-6">
      <div>
        <p>Resources</p>
        <br />
        <div className="w-full grid grid-cols-2">
          <div className="grid gap-8">
            <div className="flex gap-4 items-center">
              <div>
                <Circle size={16} fill="#000" />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <p>Anim sit cupidatat cillum.</p>
                <p className="text-zinc-500">
                  Deserunt velit adipisicing culpa nisi quis exercitation.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <Circle size={16} fill="#000" />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <p>Anim sit cupidatat cillum.</p>
                <p className="text-zinc-500">
                  Deserunt velit adipisicing culpa nisi quis exercitation.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="flex gap-4 items-center">
              <div>
                <Circle size={16} fill="#" />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <p>Anim sit cupidatat cillum.</p>
                <p className="text-zinc-500">
                  Deserunt velit adipisicing culpa nisi quis exercitation.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <Circle size={16} fill="#000" />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <p>Anim sit cupidatat cillum.</p>
                <p className="text-zinc-500">
                  Deserunt velit adipisicing culpa nisi quis exercitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Menu: FC<Menuprops> = ({
  isAnyLinkHovered,
  activeMenu,
  animationDirection,
}) => {
  return (
    <AnimatePresence mode="wait">
      {isAnyLinkHovered && (
        <motion.div
          variants={MenuVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="absolute top-full left-0 h-72 bg-white border w-[30rem] rounded-2xl origin-top border-zinc-200 overflow-hidden"
        >
          {/* {activeMenu === 0 && (
            <motion.div
              custom={animationDirection}
              variants={TabVariants}
              initial="initial"
              animate="active"
              exit="inactive"
            >
              <ProductsMenu />
            </motion.div>
          )}
          {activeMenu === 1 && (
            <motion.div
              custom={animationDirection}
              variants={TabVariants}
              initial="initial"
              animate="active"
              exit="inactive"
            >
              <SolutionsMenu />
            </motion.div>
          )}
          {activeMenu === 2 && (
            <motion.div
              custom={animationDirection}
              variants={TabVariants}
              initial="initial"
              animate="active"
              exit="inactive"
            >
              <ResourcesMenu />
            </motion.div>
          )} */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
