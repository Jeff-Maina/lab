"use client";
import { FC, useEffect, useRef, useState } from "react";
import NavigationBar from "./comps/NavigationBar";
import { sections } from "./comps/data";
import Section from "./comps/Section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const page = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(1000);
  const updateActiveSection = (index: number) => setActiveSectionIndex(index);

  return (
    <section className="w-full flex flex-col gap-10 max-w-3xl lg:m-auto ml-auto py-10 p-6">
      <header>
        <Link href="/" className="flex items-center gap-1">
          <ArrowLeft size={16} />
          Back
        </Link>
        <br />
        <p className="text-zinc-600">Monday, 4 March 2024</p>
      </header>
      <NavigationBar
        sections={sections}
        activeSectionIndex={activeSectionIndex}
        updateActiveSection={updateActiveSection}
      />
      {sections.map((section, index) => (
        <Section
          key={index}
          section={section}
          index={index}
          updateActiveSection={updateActiveSection}
        />
      ))}
      <p className="text-sm">
        <span className="text-red-500">*</span>
        Setting the page's <code>scroll-behavior</code> to <code>smooth</code>{" "}
        makes the animation "buggy".
      </p>
    </section>
  );
};

export default page;
