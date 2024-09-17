import { Clipboard, Pin, Trash } from "lucide-react";
import { FC } from "react";

interface MenuProps {
  position: {
    x: number;
    y: number;
  };
  isMenuActive: boolean;
}

const Menu1 = ({ position, isMenuActive }: MenuProps) => {
  return (
    <div className="absolute right-0 bottom-0 z-20 flex p-3 gap-1 group-hover:opacity-100 opacity-0 transition">
      <button className="size-8 border border-neutral-200 grid place-items-center bg-white rounded-full hover:scale-105 transition">
        <Clipboard size={15} stroke-width={2} className="stroke-neutral-600" />
      </button>
      <button className="size-8 border border-neutral-200 grid place-items-center bg-white rounded-full hover:scale-105 transition stroke-neutral-700 ">
        <Trash size={15} stroke-width={2} className="stroke-neutral-600" />
      </button>
      <button className="size-8 border border-neutral-200 grid place-items-center bg-white rounded-full hover:scale-105 transition">
        <Pin size={15} stroke-width={2} className="stroke-neutral-600" />
      </button>
    </div>
  );
};

export default Menu1;
