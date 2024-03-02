"use client";
import { ChevronDown } from "lucide-react";
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

const page: FC = () => {
  const [isDropdownActive, setDropdownActive] = useState(false);
  const toggleDropdown = () => setDropdownActive(!isDropdownActive);
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
      <div className="hidden md:block w-full rounded border bg-zinc-100/70 h-[40vh] p-10 lg:p-20">
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
        <div></div>
      </div>
    </main>
  );
};

export default page;
