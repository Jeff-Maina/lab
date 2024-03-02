"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import { FC, useState } from "react";

const links = [
  {
    link: "Arts & Entertainment",
    nested_items: [
      {
        link: "Visual Arts",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "Jane Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },

          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
        ],
      },
      {
        link: "Photography",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "Jane Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
        ],
      },
      {
        link: "Comedy",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "Jane Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
        ],
      },
      {
        link: "Comedy",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "Jane Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
        ],
      },
    ],
  },
  {
    link: "Business",
    nested_items: [
      {
        link: "Visual Arts",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "Jane Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
        ],
      },
      {
        link: "Photography",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "Jane Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
        ],
      },
      {
        link: "Comedy",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "Jane Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
        ],
      },
      {
        link: "Visual Arts",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "Jane Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
        ],
      },
      {
        link: "Photography",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "Jane Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
        ],
      },
      {
        link: "Comedy",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "Jane Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
        ],
      },
    ],
  },
  {
    link: "Design and Style",
    nested_items: [
      {
        link: "Visual Arts",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "Jane Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
        ],
      },
      {
        link: "Photography",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "Jane Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
        ],
      },
      {
        link: "Comedy",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "Jane Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
        ],
      },
      {
        link: "Photography",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "Jane Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
        ],
      },
      {
        link: "Comedy",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "Jane Doe",
            class_name: "Description",
            user_pfp: "",
          },
          {
            user: "John Doe",
            class_name: "Description",
            user_pfp: "",
          },
        ],
      },
    ],
  },
];

type ItemProps = {
  link: string;
  nested_items: {
    user: string;
    class_name: string;
    user_pfp: string;
  }[];
};

interface MenuProps {
  nested_items: Array<ItemProps>;
}

interface ProfileItems {
  nested_items: {
    user: string;
    class_name: string;
    user_pfp: string;
  }[];
  index: number;
}

const ProfileMenu: FC<ProfileItems> = ({ nested_items, index }) => {
  return (
    <div
      className={`absolute ${
        index === 0 || index === 1 ? "top-0" : "top-2/4 -translate-y-2/4"
      } left-full shadow shadow-[#1a1a1a] border border-[#303136] rounded-[0.7rem] p-3 bg-[#0d0d0e]  w-64`}
    >
      <ul className="text-white w-full flex flex-col">
        {nested_items.map((link, index) => {
          return (
            <button className="w-full relative flex items-center gap-3 p-2 hover:bg-[#2a2a2a] rounded-[0.4rem] cursor-pointer">
              <div className="size-10 bg-white rounded-[0.3rem]"></div>
              <div className="text-white flex flex-col">
                <p>{link.user}</p>
                <small className="text-zinc-400">{link.class_name}</small>
              </div>
            </button>
          );
        })}
      </ul>
    </div>
  );
};

const Menu: FC<MenuProps> = ({ nested_items }) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(1000);
  const handleDropDown = (index: number) => {
    const newIndex = index === activeLinkIndex ? 1000 : index;
    setActiveLinkIndex(newIndex);
  };
  return (
    <div className="absolute top-2/4 -translate-y-2/4 left-full shadow shadow-[#1a1a1a] border border-[#303136] rounded-[0.7rem] p-3 bg-[#0d0d0e]  w-64">
      <ul className="text-white w-full">
        {nested_items.map((link, index) => {
          const isLinkActive = index === activeLinkIndex;
          return (
            <li className="w-full relative">
              <button
                onClick={() => handleDropDown(index)}
                className="p-3 rounded-[0.4rem] font-medium hover:bg-[#2a2a2a] cursor-pointer flex items-center justify-between w-full select-none"
              >
                {link.link}
                <ChevronRight size={18} className="stroke-white" />
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

const page: FC = () => {
  const [isDropdownActive, setDropdownActive] = useState(false);
  const toggleDropdown = () => setDropdownActive(!isDropdownActive);
  const [activeLinkIndex, setActiveLinkIndex] = useState(1000);
  const handleDropDown = (index: number) => {
    const newIndex = index === activeLinkIndex ? 1000 : index;
    setActiveLinkIndex(newIndex);
  };
  return (
    <main className="max-w-5xl m-auto w-full min-h-screen pt-10 lg:pt-32 flex flex-col gap-10 p-6">
      <header>
        <p className="text-xl font-semibold tracking-tight">
          Masterclass website dropdown.
        </p>
        <small className="text-zinc-500">Saturday, 2 March 2024</small>
      </header>
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
            />
          </button>
          {isDropdownActive && (
            <div className="absolute top-[120%] border border-[#303136] rounded-[0.7rem] p-3 bg-[#0d0d0e] w-64">
              <ul className="text-white w-full">
                {links.map((link, index) => {
                  const nestedItems = link.nested_items;
                  const isLinkActive = index === activeLinkIndex;
                  return (
                    <li className=" w-full relative">
                      <button
                        onClick={() => handleDropDown(index)}
                        className="p-3 rounded-[0.4rem] font-medium hover:bg-[#2a2a2a] cursor-pointer flex items-center justify-between w-full select-none"
                      >
                        <span className="select-none">{link.link}</span>
                        <ChevronRight size={18} className="stroke-white" />
                      </button>
                      {isLinkActive && <Menu nested_items={nestedItems} />}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default page;
