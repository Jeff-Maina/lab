import { FC, useEffect, useRef, useState } from "react";
import { ProjectCardProps } from "./interfaces";
import { motion, useAnimate } from "framer-motion";
import { X } from "lucide-react";

export const CraftProjectCard: FC<ProjectCardProps> = ({
  index,
  updateActiveProjectIndex,
  activeProjectIndex,
  project,
}) => {
  const isActive = index === activeProjectIndex;
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  const [isDragging, setIsDragging] = useState(false);

  const animateCard = () => {
    if (isDragging) return;
    if (isActive) {
      animateCardOut();
      updateActiveProjectIndex(1000);
    } else {
      setLastPos(pos);
      console.log(pos);
      animateCardIn();
      updateActiveProjectIndex(index);
    }
  };

  const [scope, animate] = useAnimate();

  const cardRef = useRef(null);

  const animateCardIn = async () => {
    const card = cardRef.current;
    if (!card) return;

    animate(
      card,
      {
        y: -350,
        x: -225,
        top: "50%",
        left: "50%",
        height: 700,
        width: 550,
        zIndex: 999,
        rotate: 0,
      },
      {
        duration: 0.4,
      }
    );
  };

  const animateCardOut = async () => {
    const card = cardRef.current;
    if (!card) return;
    animate(
      card,
      {
        top: "50%",
        left: "36%",
        // y: lastPos.y,
        // x: lastPos.x,
        height: 384,
        width: 288,
        zIndex: index * 10,
        rotate: "-2deg",
      },
      {
        duration: 0.4,
      }
    );
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{
        height: 384,
        width: 288,
        top: "150%",
        left: "36%",
        y: -192,
        x: -144,
        rotate: "-2deg",
        zIndex: index * 10,
      }}
      animate={{
        top: "56%",
      }}
      transition={{
        delay: !isActive ? 0.1 : 0,
        duration: 0.4,
      }}
      drag={!isActive}
      dragMomentum={false}
      onDrag={(event, info) => {
        setPos({ x: info.offset.x, y: info.offset.x });
        console.log(event);
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      // whileDrag={{
      //   pointerEvents: "none",
      // }}
      onClick={animateCard}
      className="w-72 h-96 bg-[#ecebed] grid cursor-pointer active:cursor-grabbing  place-items-center inset-0 rounded-[0.7rem] custom_shadow shadow-[#3a3a3a]/50 absolute -rotate-[1deg]"
    >
      {!isActive ? (
        <div className="w-full h-full grid place-items-center">
          {" "}
          <p className="text-3xl font-semibold tracking-tighter">{project}</p>
          <p></p>
        </div>
      ) : (
        <div className="w-full h-full">
          <div className="w-full p-6 flex items-center justify-end">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                animateCard();
              }}
              className="size-10 rounded-full grid place-items-center bg-zinc-300"
            >
              <X />
            </button>
            <p></p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export const LabProjectCard: FC<ProjectCardProps> = ({
  index,
  updateActiveProjectIndex,
  activeProjectIndex,
  project,
}) => {
  return (
    <motion.div
      initial={{
        height: 384,
        width: 288,
        top: "150%",
        left: "42%",
        y: -192,
        x: -144,
        rotate: "-2deg",
        zIndex: index * 10,
      }}
      animate={{
        top: "52%",
      }}
      transition={{
        delay: 0.2,
        duration: 0.4,
      }}
      drag
      dragMomentum={false}
      whileDrag={{}}
      style={{
        zIndex: index * 10,
      }}
      className="w-72 h-96 bg-[#ecebed] grid cursor-pointer active:cursor-grabbing  place-items-center rounded-[0.7rem] custom_shadow shadow-[#3a3a3a]/50 absolute"
    >
      <p className="text-3xl font-semibold tracking-tighter">{project}</p>
    </motion.div>
  );
};

export const ThingsProjectCard: FC<ProjectCardProps> = ({
  index,
  updateActiveProjectIndex,
  activeProjectIndex,
  project,
}) => {
  return (
    <motion.div
      initial={{
        height: 384,
        width: 288,
        top: "150%",
        left: "50%",
        y: -192,
        x: -144,
        rotate: "-3deg",
        zIndex: index * 10,
      }}
      animate={{
        top: "50%",
      }}
      transition={{
        delay: 0.3,
        duration: 0.4,
      }}
      drag
      dragMomentum={false}
      whileDrag={{}}
      style={{
        zIndex: index * 10,
      }}
      className="w-72 h-96 bg-[#ecebed] grid cursor-pointer active:cursor-grabbing  place-items-center rounded-[0.7rem] custom_shadow shadow-[#3a3a3a]/50 absolute -rotate-[3deg]"
    >
      <p className="text-3xl font-semibold tracking-tighter">{project}</p>
    </motion.div>
  );
};

export const ThoughtsProjectCard: FC<ProjectCardProps> = ({
  index,
  updateActiveProjectIndex,
  activeProjectIndex,
  project,
}) => {
  return (
    <motion.div
      initial={{
        height: 384,
        width: 288,
        top: "150%",
        left: "58%",
        y: -192,
        x: -144,
        rotate: "2deg",
        zIndex: index * 10,
      }}
      animate={{
        top: "52%",
      }}
      transition={{
        delay: 0.4,
        duration: 0.4,
      }}
      drag
      dragMomentum={false}
      whileDrag={{}}
      style={{
        zIndex: index * 10,
      }}
      className="w-72 h-96 bg-[#ecebed] grid cursor-pointer active:cursor-grabbing  place-items-center rounded-[0.7rem] custom_shadow shadow-[#3a3a3a]/50 absolute"
    >
      <p className="text-3xl font-semibold tracking-tighter">{project}</p>
    </motion.div>
  );
};

export const NotesProjectCard: FC<ProjectCardProps> = ({
  index,
  updateActiveProjectIndex,
  activeProjectIndex,
  project,
}) => {
  return (
    <motion.div
      initial={{
        height: 384,
        width: 288,
        top: "150%",
        left: "66%",
        y: -192,
        x: -144,
        rotate: "2deg",
        zIndex: index * 10,
      }}
      animate={{
        top: "54%",
      }}
      transition={{
        delay: 0.5,
        duration: 0.4,
      }}
      drag
      dragMomentum={false}
      whileDrag={{}}
      style={{
        zIndex: index * 10,
      }}
      className="w-72 h-96 bg-[#ecebed] grid cursor-pointer active:cursor-grabbing  place-items-center rounded-[0.7rem] custom_shadow shadow-[#3a3a3a]/50 absolute rotate-[2deg]"
    >
      <p className="text-3xl font-semibold tracking-tighter">{project}</p>
    </motion.div>
  );
};
