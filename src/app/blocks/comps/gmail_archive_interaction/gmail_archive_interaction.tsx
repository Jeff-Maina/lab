"use client";

import {
  AnimatePresence,
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Archive, ArrowUpRight, Star } from "lucide-react";
import * as React from "react";
import { toast_variants } from "./variants";

//! TYPES;
interface email_props {
  id: number;
  sender: string;
  subject: string;
  message: string;
  date: string;
  pfp: React.ReactNode;
}

// ! DATA;
const EMAILS: email_props[] = [
  {
    id: 1,
    sender: "LinkedIn Jobs Alerts",
    subject: '"full stack engineer": Brainrust - Full stack senior developer',
    message: "Brainrust Full stack senior engineer: Job Description",
    date: "18 Jul",
    pfp: (
      <div className="size-10 rounded-full bg-blue-400 grid place-items-center text-white text-xl font-semibold">
        <span>L</span>
      </div>
    ),
  },
  {
    id: 2,
    sender: "Medium Daily Digest",
    subject: "Papers Explained 127: WizardLM | Ritvik Rastogi",
    message: "Jeffgichuki Stories for Jeffgichuki @jeffgichuki@gmail.com",
    date: "18 Jul",
    pfp: (
      <div className="size-10 rounded-full bg-black grid place-items-center text-white text-xl font-semibold">
        <span>M</span>
      </div>
    ),
  },
  {
    id: 3,
    sender: "Bolt Kenya",
    subject: "Your Bolt trip on Sunday",
    message: "Thanks for choosing Bolt - here's your ride receipt",
    date: "18 Jul",
    pfp: (
      <div className="size-10 rounded-full bg-green-400 grid place-items-center text-white text-xl font-semibold">
        <span>B</span>
      </div>
    ),
  },
  {
    id: 4,
    sender: "uber",
    subject: "Free food for you from Uber. Read that again",
    message: "What will you order.",
    date: "18 Jul",
    pfp: (
      <div className="size-10 rounded-full bg-cyan-400 grid place-items-center text-white text-xl font-semibold">
        <span>U</span>
      </div>
    ),
  },
];

//! COMPONENTS;

const EmailComp = ({
  email,
  showToast,
  hideToast,
}: {
  email: email_props;
  showToast: () => void;
  hideToast: () => void;
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const [xTranslate, setX] = React.useState<number>();
  const [refWidth, setRefWidth] = React.useState<number>(0);
  const x = useMotionValue(0);
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    if (!ref) {
      return;
    }
    let width = ref.current?.getBoundingClientRect().width;
    if (width) {
      setRefWidth(width);
    }
  }, [xTranslate, scope]);

  // get how much the email is dragged;
  const dragAmount = Number(x.get() / refWidth);

  // function that animates the email out;
  const animateEmail = () => {
    if (dragAmount >= 0.4) {
      animate(
        scope.current,
        { x: refWidth + 10 },
        { duration: 0.2, delay: 0.1 }
      );
      if (ref.current) {
        animate(ref.current, { height: 0 }, { duration: 0.3, delay: 0.2 });
      }
      showToast();
    } else if (dragAmount <= -0.4) {
      animate(
        scope.current,
        { x: -refWidth - 10 },
        { duration: 0.2, delay: 0.1 }
      );
      if (ref.current) {
        animate(ref.current, { height: 0 }, { duration: 0.3, delay: 0.2 });
      }
      showToast();
    }
  };

  {
    return (
      <motion.div
        layout
        ref={ref}
        initial={{ height: 88 }}
        animate={{
          height: 88,
          backgroundColor: Math.abs(dragAmount) > 0.4 ? "#4ade80" : "#16a34a",
        }}
        exit={{ height: 0, overflow: "hidden" }}
        transition={{ type: "spring", bounce: 0, duration: 0.4, delay: 0.1 }}
        className="relative h-[5.5rem] origin-bottom overflow-hidden"
      >
        <div className="absolute w-full h-[5.5rem] bg-transparent p-5 px-8 flex items-center justify-between">
          <div>
            <Archive />
          </div>
          <div>
            <Archive />
          </div>
        </div>
        <motion.div
          style={{ x }}
          ref={scope}
          dragMomentum={false}
          onDragStart={() => {
            hideToast();
          }}
          whileDrag={{
            borderBottom: "1px solid #eee",
          }}
          drag="x"
          dragTransition={{ bounceStiffness: 600, bounceDamping: 90 }}
          onDrag={(event, info) => {
            setX(info.point.x);
          }}
          onDragEnd={(event, info) => animateEmail()}
          dragSnapToOrigin={Math.abs(dragAmount) < 0.4}
          className="flex items-center relative  h-[5.5rem] p-5 gap-4 justify-between bg-white overflow-hidden border-b border-white cursor-grab active:cursor-grabbing"
        >
          <div>
            <React.Fragment>{email.pfp}</React.Fragment>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="line-clamp-1 leading-none font-semibold text-neutral-800">
              {email.sender}
            </p>
            <p className="line-clamp-1 leading-none text-xs text-neutral-800 font-semibold ">
              {email.subject}
            </p>
            <p className="line-clamp-1 leading-none text-xs text-neutral-600">
              {email.message}
            </p>
          </div>
          <div className="min-w-fit shrink-0 h-full flex flex-col gap-3 items-center">
            <span className="text-xs min-w-fit">{email.date}</span>
            <div>
              <Star size={18} className="stroke-neutral-500" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }
};

const GmailInteraction: React.FC = () => {
  const [tempStore, setTempStore] = React.useState([...EMAILS]);
  const [isToastActive, setToastActive] = React.useState(false);

  let timeOut: any;

  const showToast = () => {
    setToastActive(true);
    timeOut = setTimeout(() => {
      setToastActive(false);
    }, 1000);
  };

  const hideToast = () => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    setToastActive(false);
  };

  return (
    <div className="w-96 h-[24rem] bg-white rounded-md relative overflow-hidden border border-neutral-200 shadow">
      {/* emails */}
      {tempStore.map((email, index) => (
        <EmailComp
          email={email}
          key={index}
          showToast={showToast}
          hideToast={hideToast}
        />
      ))}
      {/*  toast */}

      <AnimatePresence mode="wait">
        {isToastActive && (
          <motion.div
            variants={toast_variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3,
              delay: 0.4,
            }}
            className="absolute bottom-0 left-0 p-5 w-full"
          >
            <div className="p-3 px-4 flex items-center justify-between text-sm text-white bg-neutral-800 rounded-md w-full">
              <span>1 archived</span>
              <button className="text-blue-200 cursor-not-allowed">undo</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GmailInteraction;
