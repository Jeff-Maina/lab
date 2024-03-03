"use client";
import { ArrowLeft, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";
import { MenuProps, ProfileItems, IndicatorProps } from "./Interfaces";
import { links, colors } from "./data";
import { motion } from "framer-motion";

// Mini components;

const Indicator: FC<IndicatorProps> = ({ layoutId }) => {
  return (
    <motion.div
      layoutId={layoutId}
      transition={{
        duration: 0.2,
      }}
      className="absolute inset-0 w-full h-full bg-[#2a2a2a] z-[5] rounded-[0.3rem]"
    ></motion.div>
  );
};

const ProfileMenu: FC<ProfileItems> = ({ nested_items, index }) => {
  const [hoveredItemIndex, setHoveredItemIndex] = useState(1000);
  const hoverItem = (index: number) => setHoveredItemIndex(index);
  return (
    <div
      className={`absolute ${
        index === 0 || index === 1 ? "top-0" : "top-2/4 -translate-y-2/4"
      } left-full shadow-xl shadow-[#525252] border border-[#303136] rounded-[0.7rem] p-3 bg-[#0d0d0e]  w-64`}
    >
      <ul className="text-white w-full flex flex-col">
        {nested_items.map((link, index) => {
          const isLinkHovered = index === hoveredItemIndex;
          return (
            <button
              onMouseEnter={() => hoverItem(index)}
              className="w-full relative flex items-center gap-3 p-2 rounded-[0.4rem] cursor-pointer"
            >
              <div
                style={{
                  backgroundColor: `${colors[index]}`,
                }}
                className="!size-10 min-w-10 rounded-[0.3rem] overflow-hidden relative z-10"
              ></div>
              <div className="text-white flex flex-col !items-start justify-start relative z-10">
                <p>{link.user}</p>
                <small className="text-zinc-400 truncate w-full">
                  {link.class_name}
                </small>
              </div>
              {isLinkHovered && <Indicator layoutId="profile" />}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

const Menu: FC<MenuProps> = ({ nested_items }) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(1000);
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState(1000);

  const hoverMenuItem = (index: number) => setHoveredLinkIndex(index);

  const handleMenu = (index: number) => {
    const newIndex = index === activeLinkIndex ? 1000 : index;
    setActiveLinkIndex(newIndex);
  };

  const resetIndicator = () => {
    if (activeLinkIndex !== 1000) {
      setHoveredLinkIndex(activeLinkIndex);
    } else {
      setHoveredLinkIndex(1000);
    }
  };

  return (
    <div className="absolute top-2/4 -translate-y-2/4 left-full shadow-xl shadow-[#525252] border border-[#303136] rounded-[0.7rem] p-3 bg-[#0d0d0e]  w-64">
      <ul className="text-white w-full">
        {nested_items.map((link, index) => {
          const isLinkActive = index === activeLinkIndex;
          const isLinkHovered = index === hoveredLinkIndex;
          return (
            <li className="w-full relative">
              <button
                onClick={() => handleMenu(index)}
                onMouseEnter={() => hoverMenuItem(index)}
                onMouseLeave={resetIndicator}
                className="p-3 rounded-[0.4rem] font-medium  cursor-pointer flex items-center justify-between w-full select-none relative"
              >
                <span className="select-none relative z-10">{link.link}</span>
                <ChevronRight
                  size={18}
                  className="stroke-white relative z-10"
                />
                {isLinkHovered && <Indicator layoutId="menu" />}
              </button>
              {isLinkActive && (
                <ProfileMenu nested_items={link.nested_items} index={index} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Dropdown: FC = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(1000);
  const [hoveredLinkIndex, sethoveredLinkIndex] = useState(1000);

  const hoverDropDownItem = (index: number) => sethoveredLinkIndex(index);
  const resetIndicator = () => {
    if (activeLinkIndex !== 1000) {
      sethoveredLinkIndex(activeLinkIndex);
    } else {
      sethoveredLinkIndex(1000);
    }
  };

  const handleDropDown = (index: number) => {
    const newIndex = index === activeLinkIndex ? 1000 : index;
    setActiveLinkIndex(newIndex);
  };
  return (
    <div className="absolute top-[120%] border border-[#303136] rounded-[0.7rem] p-3 bg-[#0d0d0e] w-64">
      <ul className="text-white w-full">
        {links.map((link, index) => {
          const nestedItems = link.nested_items;
          const isLinkActive = index === activeLinkIndex;
          const isLinkHovered = index === hoveredLinkIndex;
          return (
            <li className=" w-full relative">
              <button
                onClick={() => handleDropDown(index)}
                onMouseEnter={() => {
                  hoverDropDownItem(index);
                }}
                onMouseLeave={resetIndicator}
                className="p-3 rounded-[0.4rem] font-medium cursor-pointer flex items-center justify-between w-full select-none relative"
              >
                <span className="select-none relative z-10">{link.link}</span>
                <ChevronRight
                  size={18}
                  className="stroke-white relative z-10"
                />
                {isLinkHovered && <Indicator layoutId="dropdown" />}
              </button>
              {isLinkActive && <Menu nested_items={nestedItems} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

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
          Masterclass website dropdown.
        </p>
        <small className="text-zinc-500">Saturday, 2 March 2024</small>
      </header>
      {/* for mobile screens */}
      <div className="md:hidden">
        <p>View on Larger screen</p>
      </div>
      <div className="hidden md:block w-full rounded border bg-zinc-100/70 h-[80vh] p-10 lg:p-20">
        <div className="relative">
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
