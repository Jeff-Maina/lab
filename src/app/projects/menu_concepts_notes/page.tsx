"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Menu1 from "./menus/Menu1";
import { useState } from "react";

const page = () => {
  // MENU ONE;
  const [menuPos, setMenu1Pos] = useState({ x: 0, y: 0 });
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <main className="max-w-4xl m-auto w-full min-h-screen pt-10 lg:pt-32 gap-10 p-6 flex flex-col items-center">
      <header className="max-w-xl w-full">
        <Link href="/" className="flex items-center gap-1 max-w-fit">
          <ArrowLeft size={16} />
          Back
        </Link>
        <br />
        <p className="text-xl font-semibold tracking-tight">Menu concepts </p>
        <small className="text-zinc-500">Saturday, 4 May 2024</small>
      </header>

      <br />
      <br />

      {/* examples section */}
      <section className="max-w-4xl  w-full">
        <article className="flex flex-col gap-4 md:gap-6 w-full max-w-xl items-center justify-center m-auto rounded border bg-zinc-100/70 py-20">
          <div className="relative group">
            <div className="w-full max-w-xs aspect-square rounded-2xl overflow-hidden relative">
              <img
                src="https://i.pinimg.com/564x/20/6f/0b/206f0bad1f2f2a4db78e1cd5ba04b1cd.jpg"
                className="w-full h-full object-cover relative z-10"
                alt=""
              />
            </div>
            <Menu1 position={menuPos} isMenuActive={isMenuActive} />
          </div>
        </article>
      </section>
    </main>
  );
};

export default page;
