"use client";

import { useState } from "react";
import Links from "./Links";
import Menu from "./Menu";

const Navbar = () => {
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState<number>(1000);
  const [activeMenu, setActiveMenu] = useState<number>(1000);
  const [animationDirection, setAnimationDirection] = useState<string>(" ");

  const updateDirection = (direction: string) => setAnimationDirection(direction)

  const hoverLink = (index: number) => {
    setHoveredLinkIndex(index);
    setActiveMenu(index);
  };
  const resetNav = () => {
    setHoveredLinkIndex(1000);
  };
  const isAnyLinkHovered = hoveredLinkIndex !== 1000;
  return (
    <div className="">
      <nav className="group/nav relative" onMouseLeave={resetNav}>
        <Links hoveredLinkIndex={hoveredLinkIndex} hoverLink={hoverLink} updateDirection={updateDirection}/>
        <Menu isAnyLinkHovered={isAnyLinkHovered} activeMenu={activeMenu} animationDirection={animationDirection} />
      </nav>
    </div>
  );
};

export default Navbar;
