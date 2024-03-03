import { FC, useState } from "react";

import { links, colors } from "../data";
import MenuItem from "./MenuItem";
import { ProfileItems, MenuProps } from "../Interfaces";
import Indicator from "./Indicator";

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
              <div className="text-white flex flex-col !items-start justify-start relative z-10 select-none">
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
          const hoverMenuItem = () => setHoveredLinkIndex(index);
          const handleMenuItem = () => {
            const newIndex = index === activeLinkIndex ? 1000 : index;
            setActiveLinkIndex(newIndex);
          };
          return (
            <li className="w-full relative">
              <MenuItem
                hoverItem={hoverMenuItem}
                handleItem={handleMenuItem}
                indicatorId="menu"
                isLinkHovered={isLinkHovered}
                link={link}
                resetIndicator={resetIndicator}
              />
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

  const resetIndicator = () => {
    if (activeLinkIndex !== 1000) {
      sethoveredLinkIndex(activeLinkIndex);
    } else {
      sethoveredLinkIndex(1000);
    }
  };

  return (
    <div className="absolute top-[120%] border border-[#303136] rounded-[0.7rem] p-3 bg-[#0d0d0e] w-64">
      <ul className="text-white w-full">
        {links.map((link, index) => {
          const nestedItems = link.nested_items;
          const isLinkActive = index === activeLinkIndex;
          const isLinkHovered = index === hoveredLinkIndex;
          const hoverDropDownItem = () => sethoveredLinkIndex(index);
          const handleDropDown = () => {
            const newIndex = index === activeLinkIndex ? 1000 : index;
            setActiveLinkIndex(newIndex);
          };

          return (
            <li className=" w-full relative">
              <MenuItem
                hoverItem={hoverDropDownItem}
                handleItem={handleDropDown}
                indicatorId="dropdown"
                isLinkHovered={isLinkHovered}
                link={link}
                resetIndicator={resetIndicator}
              />
              {isLinkActive && <Menu nested_items={nestedItems} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
