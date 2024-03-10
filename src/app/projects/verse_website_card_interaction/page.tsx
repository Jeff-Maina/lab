"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Button from "./comps/Button";
import { useState } from "react";
import Projects from "./comps/Projects";

const page = () => {
  const [areProjectsOpen, setProjectsOpen] = useState(false);
  const openProjects = () => setProjectsOpen(true);
  const closeProjects = () => setProjectsOpen(false);

  return (
    <main className="w-full h-screen grid place-items-center bg-black">
      <header className="fixed flex top-0 left-0  z-50 w-full items-center justify-between p-6 lg:px-10 lg:py-6">
        <Link href="/" className="flex items-center gap-1 text-white">
          <ArrowLeft size={16} stroke="#fff" />
          Back
        </Link>
        <p className="text-sm font-semibold tracking-tight hidden lg:block text-zinc-400">
          <a
            href="https://www.verse.sh/"
            target="_blank"
            className="underline decoration-zinc-600 text-white"
          >
            Verse Website
          </a>{" "}
          card interactions.
        </p>
      </header>
      <div>
        <Button openProjects={openProjects} />
        <Projects
          closeProjects={closeProjects}
          areProjectsOpen={areProjectsOpen}
        />
      </div>
    </main>
  );
};

export default page;
