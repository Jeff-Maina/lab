"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ErrorInput from "./components/ErrorInput";
import BrightnessIndicator from "./components/BrightnessIndicator";
import { ReactLenis } from "@studio-freight/react-lenis";
import { FC } from "react";

const arr = [1, 2, 3];

const Divide: FC = () => {
  return (
    <div className="flex items-center gap-1">
      {arr.map((_, index) => (
        <div className="size-1 rounded-full bg-zinc-500"></div>
      ))}
    </div>
  );
};

const page = () => {
  return (
    <ReactLenis root>
      <main className="w-full min-h-screen">
        <nav className="w-full flex items-center justify-between p-6 fixed top-0">
          <Link href="/" className="flex items-center gap-2 text-sm">
            <ArrowLeft size={16} />
            Back
          </Link>
          <p className="font-bold tracking-tighter text-zinc-500">
            Oppo's ColorOS UI interactions.
          </p>
        </nav>
        <section className="px-6 flex flex-col max-w-lg items-center m-auto">
          <ErrorInput />
          <Divide />
          <BrightnessIndicator />
          <Divide />
        </section>
      </main>
    </ReactLenis>
  );
};

export default page;
