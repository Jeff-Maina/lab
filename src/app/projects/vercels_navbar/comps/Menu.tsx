import { motion, AnimatePresence } from "framer-motion";
import { MenuVariants } from "./Variants";
import { FC } from "react";
import { Menuprops } from "./Interfaces";
import { Circle } from "lucide-react";

const ProductsMenu = () => {
  return (
    <div className="w-full h-full p-6">
      <div>
        <p>Products</p>
        <br />
        <div className="w-fll grid grid-cols-2">
          <div className="grid gap-4">
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
          <div className="grid gap-4">
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

const Menu: FC<Menuprops> = ({ isAnyLinkHovered }) => {
  return (
    <AnimatePresence mode="wait">
      {isAnyLinkHovered && (
        <motion.div
          variants={MenuVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="absolute top-full left-0 h-72 bg-white border w-[30rem] rounded-2xl origin-top border-zinc-200"
        >
          <ProductsMenu />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
