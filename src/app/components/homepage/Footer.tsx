"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();
  const pages = ["/projects/verse_website_card_interaction"];
  const isAllowed = pages.includes(path);
  return (
    <>
      {!isAllowed ? (
        <footer className="p-6 text-sm text-zinc-600 max-w-3xl m-auto flex items-center justify-between">
          <p>温故而知新</p>
          <p>
            Made by{" "}
            <a
              href="https://github.com/Jeff-Maina"
              target="_blank"
              className="text-black hover:underline"
            >
              Jeff
            </a>
          </p>
        </footer>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Footer;
