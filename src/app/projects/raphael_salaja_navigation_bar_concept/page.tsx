"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Filter, Plus, Search, Settings, X } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";

const arr = [1, 2];

interface MaskProps {
  isMaskActive: boolean;
  resetAll: () => void;
}

interface AddMenuProps {
  isAddMenuActive: boolean;
  closeAddMenu: () => void;
}

const MaskVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.2,
      },
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.2,
      },
    },
  },
};

const AddMenuVariants = {
  initial: {
    x: "0%",
    // opacity: 0,
    height: 56,
    width: 56,
  },
  active: {
    x: "18.8%",
    // opacity: 1,
    height: 300,
    width: 350,
    transition: {
      x: {
        duration: 0.2,
      },
      opacity: {
        duration: 0.2,
      },
      width: {
        duration: 0.2,
      },
      height: {
        duration: 0.2,
      },
    },
  },
  inactive: {
    x: "0%",
    // opacity: 0,
    height: 56,
    width: 56,
    transition: {
      x: {
        duration: 0.2,
      },
      opacity: {
        duration: 0.2,
      },
      width: {
        duration: 0.2,
      },
      height: {
        duration: 0.2,
      },
    },
  },
};
// const AddMenuVariants = {
//   initial: {
//     scale: 0,
//     x: "0%",
//   },
//   active: {
//     scale: 1,
//     x: "18.8%",
//     transition: {
//       scale: {
//         duration: 0.2,
//       },
//       x: {
//         duration: 0.2,
//       },
//     },
//   },
//   inactive: {
//     scale: 0,
//     x: "0%",
//     transition: {
//       scale: {
//         duration: 0.2,
//       },
//       x: {
//         duration: 0.2,
//       },
//     },
//   },
// };
const AddMenuContentVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.16,
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};

const Mask: FC<MaskProps> = ({ isMaskActive, resetAll }) => {
  return (
    <AnimatePresence mode="wait">
      {isMaskActive ? (
        <motion.div
          variants={MaskVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          onClick={resetAll}
          className="absolute inset-0 w-full h-full bg-black/20 backdrop-blur-sm z-20"
        ></motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const AddMenu: FC<AddMenuProps> = ({ isAddMenuActive, closeAddMenu }) => {
  return (
    <AnimatePresence>
      {isAddMenuActive ? (
        <motion.div
          variants={AddMenuVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="absolute z-10 bg-[#0e0d0d] bottom-0 right-0 rounded-[30px] shadow-xl p-6 overflow-hidden"
        >
          <motion.div
            variants={AddMenuContentVariants}
            initial="initial"
            animate="active"
            exit="inactive"
            className="h-full w-full flex flex-col items-start justify-between overflow-hidden"
          >
            <div className="flex items-center w-full justify-between mb-3">
              <p className="text-white text-lg font-medium">Create a new Bit</p>
              <button
                onClick={closeAddMenu}
                className="bg-[#2a2a2a] p-2 rounded-full"
              >
                <X stroke="white" size={18} strokeWidth={3} />
              </button>
            </div>
            <div>
              <p className="text-zinc-500 text-left">
                Proident elit exercitation in deserunt enim veniam aliquip
                mollit cupidatat occaecat laborum sunt laborum.
              </p>
            </div>
            <div className="w-full bg-[#2a2a2a] rounded-[10px]">
              <input
                type="text"
                className="p-2 w-full bg-transparent text-white pl-4 placeholder:text-[#6a6a6a] rounded-[10px] outline-none focus:border"
                placeholder="Enter url"
              />
            </div>
            <button
              onClick={closeAddMenu}
              className="p-2 bg-blue-600 w-full rounded-[10px] text-white font-medium hover:bg-blue-800 transition-all duration-200"
            >
              continue
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const Page = () => {
  const [isMaskActive, setMaskActive] = useState(false);
  const toggleMask = () => setMaskActive(!isMaskActive);
  const [isAddMenuActive, setAddMenuActive] = useState(false);
  const toggleAddMenu = () => setAddMenuActive(!isAddMenuActive);
  const closeAddMenu = () => {
    setMaskActive(false);
    setAddMenuActive(false);
  };
  const resetAll = () => {
    setMaskActive(false);
    setAddMenuActive(false);
  };

  return (
    <main className="max-w-xl m-auto w-full min-h-screen pt-10 lg:pt-32 flex flex-col gap-10 p-6 lg:gap-20 lg:pb-20">
      <header>
        <Link href="/" className="flex items-center gap-1">
          <ArrowLeft size={16} />
          Back
        </Link>
        <br />
        <p className="text-xl font-semibold tracking-tight">
          Raphael Salaja's navigation bar concept.
        </p>
        <small className="text-zinc-500">Saturday, 2 March 2024</small>
      </header>
      <div className="w-full m-auto rounded border bg-zinc-100/70 h-[80vh] p-10 lg:p-20 flex flex-col items-center justify-end gap-16 relative">
        <div className="w-full h-3/4 relative z-10 rounded-xl overflow-hidden grid  gap-1">
          {arr.map((_, index) => (
            <div className="w-full bg-yellow-500 rounded-[0.3rem] grid place-items-center">
              <img
                src="/images/butterfly.png"
                className="w-2/4 h-2/4 object-cover"
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="flex gap-1 relative z-30">
          <button className="size-12 bg-black shadow-lg rounded-full flex items-center justify-center">
            <Settings fill="white" size={16} stroke="white" />
          </button>
          <div className="rounded-full bg-black shadow-lg flex w-28 justify-evenly">
            <button className="">
              <Filter size={16} stroke="white" strokeWidth={3} />
            </button>
            <button className="">
              <Search size={16} stroke="white" strokeWidth={4} />
            </button>
          </div>
          <button className="size-12 bg-black shadow-lg rounded-full flex items-center justify-center relative ">
            <div
              onClick={() => {
                toggleMask();
                toggleAddMenu();
              }}
              className="w-full h-full grid place-content-center cursor-pointer"
            >
              <Plus fill="white" size={16} stroke="white" strokeWidth={4} />
            </div>
            <AddMenu
              isAddMenuActive={isAddMenuActive}
              closeAddMenu={closeAddMenu}
            />
          </button>
        </div>

        {/* mask */}
        <Mask isMaskActive={isMaskActive} resetAll={resetAll} />
      </div>
    </main>
  );
};

export default Page;
