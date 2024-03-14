import { cities } from "./data";

import styles from "./Nomad.module.css";

const page = () => {
  return (
    <main className="w-full h-screen bg-[#161616] flex items-center justify-center">
      <div className="w-full h-3/4 pl-10 lg:pl-24 relative">
        <div
          id={styles.links}
          className="flex flex-col relative w-full h-full justify-center z-10"
        >
          {" "}
          {cities.map((city, index) => (
            <div
              key={index}
              className="cursor-pointer max-w-fit relative text-3xl md:text-6xl lg:text-[7rem] font-bold tracking-tighter leading-none lg:!leading-[7rem] group/link"
            >
              <p id={styles.navlink} className="text-[#fbfbfb] ">
                {city.city}
              </p>
              <p
                id={styles.ghost_navlink}
                className="absolute inset-0 opacity-0 group-hover/link:opacity-100 transition-all duration-300 pointer-events-none text-whit"
              >
                {city.city}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute w-full h-full top-0 right-0 flex justify-end pointer-events-none">
          <div className="w-[90%] h-full"></div>
        </div>
      </div>
    </main>
  );
};

export default page;
