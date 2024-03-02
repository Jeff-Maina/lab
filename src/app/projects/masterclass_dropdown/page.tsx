"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import { FC, useState } from "react";

const links = [
  {
    link: "Arts & Entertainment",
    nested_items: [
      {
        link: "Painting",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Oil Painting",
          },
          {
            user: "Jane Doe",
            class_name: "Watercolor Techniques",
          },
          {
            user: "Alice Smith",
            class_name: "Abstract Expressionism",
          },
          {
            user: "Bob Johnson",
            class_name: "Palette Knife Art",
          },
          {
            user: "Emma White",
            class_name: "Mixed Media",
          },
        ],
      },
      {
        link: "Photography",
        nested_items: [
          {
            user: "Charlie Brown",
            class_name: "Nature Photography",
          },
          {
            user: "Jane Doe",
            class_name: "Portrait Photography",
          },
          {
            user: "David Smith",
            class_name: "Architectural Photography",
          },
          {
            user: "Emily Taylor",
            class_name: "Fashion Photography",
          },
        ],
      },
      {
        link: "Stand-up Comedy",
        nested_items: [
          {
            user: "Eva Green",
            class_name: "Observational Comedy",
          },
          {
            user: "Frank White",
            class_name: "Political Satire",
          },
          {
            user: "Grace Miller",
            class_name: "Improv Comedy",
          },
          {
            user: "Harry Black",
            class_name: "Physical Comedy",
          },
        ],
      },
    ],
  },
  {
    link: "Business",
    nested_items: [
      {
        link: "Entrepreneurship",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Startup Strategies",
          },
          {
            user: "Jane Doe",
            class_name: "Business Ethics",
          },
          {
            user: "Alice Smith",
            class_name: "Innovation in Business",
          },
          {
            user: "Bob Johnson",
            class_name: "Leadership Development",
          },
        ],
      },
      {
        link: "Marketing",
        nested_items: [
          {
            user: "Charlie Brown",
            class_name: "Digital Marketing",
          },
          {
            user: "Jane Doe",
            class_name: "Social Media Strategies",
          },
          {
            user: "David Smith",
            class_name: "Content Marketing",
          },
          {
            user: "Emma White",
            class_name: "Brand Management",
          },
        ],
      },
      {
        link: "Finance",
        nested_items: [
          {
            user: "Eva Green",
            class_name: "Personal Finance",
          },
          {
            user: "Frank White",
            class_name: "Investment Planning",
          },
          {
            user: "Grace Miller",
            class_name: "Financial Modeling",
          },
          {
            user: "Harry Black",
            class_name: "Corporate Finance",
          },
        ],
      },
    ],
  },
  {
    link: "Design and Style",
    nested_items: [
      {
        link: "Fashion Design",
        nested_items: [
          {
            user: "John Doe",
            class_name: "Haute Couture",
          },
          {
            user: "Jane Doe",
            class_name: "Sustainable Fashion",
          },
          {
            user: "Alice Smith",
            class_name: "Accessory Design",
          },
          {
            user: "Bob Johnson",
            class_name: "Costume Design",
          },
        ],
      },
      {
        link: "Interior Design",
        nested_items: [
          {
            user: "Charlie Brown",
            class_name: "Residential Interiors",
          },
          {
            user: "Jane Doe",
            class_name: "Commercial Spaces",
          },
          {
            user: "David Smith",
            class_name: "Furniture Design",
          },
          {
            user: "Emma White",
            class_name: "Office Interiors",
          },
        ],
      },
      {
        link: "Comedic Fashion",
        nested_items: [
          {
            user: "Eva Green",
            class_name: "Fashion Comedy Sketches",
          },
          {
            user: "Frank White",
            class_name: "Style Satire",
          },
          {
            user: "Grace Miller",
            class_name: "Design Humor",
          },
          {
            user: "Harry Black",
            class_name: "Fashion Parody",
          },
        ],
      },
    ],
  },
  {
    link: "Science & Technology",
    nested_items: [
      {
        link: "Physics",
        nested_items: [
          {
            user: "Albert Einstein",
            class_name: "Theory of Relativity",
          },
          {
            user: "Marie Curie",
            class_name: "Quantum Mechanics",
          },
          {
            user: "Isaac Newton",
            class_name: "Classical Mechanics",
          },
        ],
      },
      {
        link: "Computer Science",
        nested_items: [
          {
            user: "Ada Lovelace",
            class_name: "Intro to Programming",
          },
          {
            user: "Alan Turing",
            class_name: "Artificial Intelligence",
          },
          {
            user: "Grace Hopper",
            class_name: "Data Structures",
          },
        ],
      },
      {
        link: "Space Exploration",
        nested_items: [
          {
            user: "Neil Armstrong",
            class_name: "Moon Landing History",
          },
          {
            user: "Sally Ride",
            class_name: "Orbital Mechanics",
          },
          {
            user: "Elon Musk",
            class_name: "Future of Space Travel",
          },
        ],
      },
    ],
  },
  {
    link: "Health & Wellness",
    nested_items: [
      {
        link: "Nutrition",
        nested_items: [
          {
            user: "Dr. John Smith",
            class_name: "Healthy Eating Habits",
          },
          {
            user: "Alice Green",
            class_name: "Vegetarian Diet",
          },
          {
            user: "Bob Johnson",
            class_name: "Sports Nutrition",
          },
        ],
      },
      {
        link: "Mental Health",
        nested_items: [
          {
            user: "Dr. Emily White",
            class_name: "Mindfulness Meditation",
          },
          {
            user: "David Miller",
            class_name: "Stress Management",
          },
          {
            user: "Eva Green",
            class_name: "Positive Psychology",
          },
        ],
      },
      {
        link: "Fitness",
        nested_items: [
          {
            user: "Jane Doe",
            class_name: "HIIT Workouts",
          },
          {
            user: "Frank White",
            class_name: "Yoga for Beginners",
          },
          {
            user: "Grace Miller",
            class_name: "Cardiovascular Training",
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
  }[];
};

interface MenuProps {
  nested_items: Array<ItemProps>;
}

interface ProfileItems {
  nested_items: {
    user: string;
    class_name: string;
  }[];
  index: number;
}

const colors = [
  "#4CAF50", // Green
  "#2196F3", // Blue
  "#FFC107", // Amber
  "#FF5722", // Deep Orange
  "#673AB7", // Deep Purple
  "#FF9800", // Orange
  "#9C27B0", // Purple
  "#00BCD4", // Cyan
  "#E91E63", // Pink
  "#795548", // Brown
];

const ProfileMenu: FC<ProfileItems> = ({ nested_items, index }) => {
  const numberOfColors = colors.length;
  const randomIndex = Math.floor(Math.random() * numberOfColors);

  return (
    <div
      className={`absolute ${
        index === 0 || index === 1 ? "top-0" : "top-2/4 -translate-y-2/4"
      } left-full shadow-xl shadow-[#525252] border border-[#303136] rounded-[0.7rem] p-3 bg-[#0d0d0e]  w-64`}
    >
      <ul className="text-white w-full flex flex-col">
        {nested_items.map((link, index) => {
          return (
            <button className="w-full relative flex items-center gap-3 p-2 hover:bg-[#2a2a2a] rounded-[0.4rem] cursor-pointer">
              <div
                style={{
                  backgroundColor: `${colors[index]}`,
                }}
                className="!size-10 min-w-10 rounded-[0.3rem] overflow-hidden"
              ></div>
              <div className="text-white flex flex-col !items-start justify-start">
                <p>{link.user}</p>
                <small className="text-zinc-400 truncate w-full">
                  {link.class_name}
                </small>
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
    <div className="absolute top-2/4 -translate-y-2/4 left-full shadow-xl shadow-[#525252] border border-[#303136] rounded-[0.7rem] p-3 bg-[#0d0d0e]  w-64">
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
  const [activeLinkIndex, setActiveLinkIndex] = useState(1000);


  const toggleDropdown = () => {
    setDropdownActive(!isDropdownActive);
    if (!isDropdownActive) {
      setActiveLinkIndex(1000);
    }
  };
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
                        className="p-3 rounded-[0.4rem] font-medium hover:bg-[#2a2a2a] cursor-pointer flex items-center justify-between w-full select-none relative"
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
