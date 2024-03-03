import { FC } from "react";
import { MenuLinkProps } from "../Interfaces";
import { ChevronRight } from "lucide-react";
import Indicator from "./Indicator";

const MenuItem: FC<MenuLinkProps> = ({
  handleItem,
  hoverItem,
  resetIndicator,
  link,
  isLinkHovered,
  indicatorId,
}) => {
  return (
    <button
      onClick={() => handleItem()}
      onMouseEnter={() => hoverItem()}
      onMouseLeave={resetIndicator}
      className="p-3 rounded-[0.4rem] font-medium  cursor-pointer flex items-center justify-between w-full select-none relative"
    >
      <span className="select-none relative z-10">{link.link}</span>
      <ChevronRight size={18} className="stroke-white relative z-10" />
      {isLinkHovered && <Indicator layoutId={indicatorId} />}
    </button>
  );
};

export default MenuItem;
