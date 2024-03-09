"use client";

import { ArrowLeft, Quote } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import InputBox from "./comps/InputBox";

const Page = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [isHighlighting, setIsHighlighting] = useState<boolean>(false);
  const [isReplying, setIsReplying] = useState(false);

  const [replyText, setReplyText] = useState(" ");
  const [highlightedText, setHighlightedText] = useState(" ");

  const reply = () => {
    setIsReplying(true);
    setReplyText(highlightedText);
    setIsHighlighting(false);
  };

  const closeInputBox = () => {
    setIsReplying(false);
    setReplyText("");
  };

  const getSelection = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setIsHighlighting(false);
      return;
    }

    const selectedText = selection.toString();

    const range = selection.getRangeAt(0);
    const startRect = range.getClientRects()[0];

    const container = ref.current;
    if (!container) return;
    const bounds = container.getBoundingClientRect();

    const x = startRect.left - bounds.left;
    const y = startRect.top - bounds.top - 40;

    setIsHighlighting(true);
    setHighlightedText(selectedText);
    setPosition({ x, y });
  };

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleMouseUp = (e: MouseEvent) => {
      getSelection();
    };

    container.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <main className="max-w-5xl m-auto w-full min-h-screen pt-10 lg:pt-32 flex flex-col gap-10 p-6">
        <header>
          <Link href="/" className="flex items-center gap-1">
            <ArrowLeft size={16} />
            Back
          </Link>
          <br />
          <p className="text-xl font-semibold tracking-tight">
            <a
              href="https://vercel.com"
              target="_blank"
              className="underline text-[#71a497] decoration-[#71a497] hover:decoration-[#42695f]"
            >
              ChatGPT's
            </a>{" "}
            reply feature.
          </p>
          <small className="text-zinc-500">Friday, 8 March 2024</small>
        </header>
        <p className="hidden lg:block">Highlight a section of the poem.</p>
        <div className="hidden lg:flex flex-col w-full rounded border bg-zinc-100/70 min-h-[80vh] p-10 lg:p-20 items-center justify-end md:gap-16">
          {/* nav */}
          <div className="relative">
            {isHighlighting && (
              <>
                <div
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                  }}
                  onClick={reply}
                  className="size-8 rounded-lg bg-[#2a2a2a] absolute z-[999] grid place-items-center inset-0 cursor-pointer"
                >
                  <Quote size={16} fill="#fff" stroke="#000" />
                </div>
                <div
                  onClick={() => {
                    setIsHighlighting(false);
                  }}
                  className="fixed inset-0 w-full h-screen"
                ></div>
              </>
            )}
            <div
              ref={ref}
              className="flex flex-col max-w-sm gap-6 leading-relaxed relative p-6 z-50 bg-white"
            >
              <p className="">
                Surround who you dream you are with high walls. Then, wherever
                the garden can be seen Through the iron bars of the gate, Plant
                only the most cheerful flowers, So that you'll be known as a
                cheerful sort. Where it can't be seen, don't plant anything.
              </p>
              <p>
                Lay flower beds, like other people have, So that passing gazes
                can look in At your garden as you're going to show it. But where
                you're all your own and no one Ever sees you, let wild flowers
                spring up Spontaneously, and let the grass grow naturally.
              </p>
              <p>
                Make yourself into a well-guarded Double self, letting no one
                who looks in See more than a garden of who you are— A showy but
                private garden, behind which The native flowers brush against
                grass So straggly that not even you see it . .
              </p>
            </div>
          </div>
          <InputBox
            replyText={replyText}
            isReplying={isReplying}
            closeInputBox={closeInputBox}
          />
        </div>
        <div className="lg:hidden">
          <p className="text-sm">
            [ Not optimized for small screens. Please switch to a larger
            screen.]
          </p>
        </div>
      </main>
    </>
  );
};

export default Page;
