"use client";

import { ArrowLeft, Filter, Plus, Search, Settings } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";
import Mask from "./comps/Mask";
import SearchBar from "./comps/SearchBar";
import AddMenu from "./comps/AddMenu";

const arr = [1, 2];

const Page: FC = () => {
  // MASK LOGIC;
  const [isMaskActive, setMaskActive] = useState(false);
  const toggleMask = () => setMaskActive(!isMaskActive);
  const resetAll = () => {
    setMaskActive(false);
    setAddMenuActive(false);
    setIsSearchBarActive(false);
  };

  // ADD MENU LOGIC
  const [isAddMenuActive, setAddMenuActive] = useState(false);
  const toggleAddMenu = () => setAddMenuActive(!isAddMenuActive);
  const closeAddMenu = () => {
    setMaskActive(false);
    setAddMenuActive(false);
  };

  // SEARCHBAR
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const openSearchBar = () => {
    setMaskActive(true);
    setIsSearchBarActive(true);
  };

  const closeSearchBar = () => {
    setIsSearchBarActive(false);
    setMaskActive(false);
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
            <div
              key={index}
              className="w-full bg-yellow-500 rounded-[0.3rem] grid place-items-center"
            >
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
            <button className="relative z-20">
              <div className="h-full w-full rounded-full grid place-items-center">
                <Filter size={16} stroke="white" strokeWidth={3} />
              </div>
            </button>
            <button className="">
              <div
                onClick={openSearchBar}
                className="w-full h-full rounded-full grid place-items-center relative z-20"
              >
                <Search size={16} stroke="white" strokeWidth={4} />
              </div>
              <SearchBar
                isSearchBarActive={isSearchBarActive}
                closeSearchBar={closeSearchBar}
              />
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
