"use client";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";
import Dropdown from "./comps/Dropdown";

const page: FC = () => {
  const [isDropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => setDropdownActive(!isDropdownActive);

  return (
    <main className="max-w-5xl m-auto w-full min-h-screen pt-10 lg:pt-32 flex flex-col gap-10 p-6">
      <header>
        <Link href="/" className="flex items-center gap-1">
          <ArrowLeft size={16} />
          Back
        </Link>
        <br />
        <p className="text-xl font-semibold tracking-tight">
          <a
            href="https://masterclass.com"
            target="_blank"
            className="underline decoration-zinc-400"
          >
            Masterclass
          </a>{" "}
          website dropdown.
        </p>
        <small className="text-zinc-500">Saturday, 2 March 2024</small>
      </header>
      {/* for mobile screens */}
      <div className="md:hidden">
        <p>View on Larger screen</p>
      </div>
      <div
        className="hidden md:block w-full rounded border bg-zinc-100/70 h-[80vh] p-10 lg:p-20"
        onClick={(e) => {
          setDropdownActive(false);
        }}
      >
        <div onClick={(e) => e.stopPropagation()} className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-[#222326] font-semibold text-white py-3 px-6 flex items-center gap-1 rounded-[15px]"
          >
            Browse
            <ChevronDown
              className={`stroke-white ${
                isDropdownActive ? "rotate-180" : "rotate-0"
              }`}
              size={20}
            />
          </button>
          {isDropdownActive && <Dropdown />}
        </div>
      </div>
    </main>
  );
};

export default page;
