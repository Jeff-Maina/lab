"use client";

import { useState } from "react";
import Links from "./Links";
import Menu from "./Menu";

const Navbar = () => {
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState<number>(1000);
  const hoverLink = (index: number) => setHoveredLinkIndex(index);
  const resetNav = () => {
    setHoveredLinkIndex(1000);
  };
  const isAnyLinkHovered = hoveredLinkIndex !== 1000;
  return (
    <div className="">
      <nav className="group/nav relative" onMouseLeave={resetNav}>
        <Links hoveredLinkIndex={hoveredLinkIndex} hoverLink={hoverLink} />
        <Menu isAnyLinkHovered={isAnyLinkHovered} />
      </nav>
    </div>
  );
};

export default Navbar;
