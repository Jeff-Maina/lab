import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "./comps/Navbar";

const Page = () => {
  return (
    <main className="max-w-5xl m-auto w-full min-h-screen pt-10 lg:pt-32 flex flex-col gap-10 p-6">
      <header>
        <Link href="/" className="flex items-center gap-1">
          <ArrowLeft size={16} />
          Back
        </Link>
        <br />
        <p className="text-xl font-semibold tracking-tight">
          <a
            href="https://vercel.com"
            target="_blank"
            className="underline decoration-zinc-400"
          >
            Vercel's
          </a>{" "}
          website dropdown.
        </p>
        <small className="text-zinc-500">Thursday, 7 March 2024</small>
      </header>
      <div className="hidden md:flex w-full rounded border bg-zinc-100/70 h-[80vh] p-10 lg:p-20 justify-center">
        <Navbar />
      </div>
    </main>
  );
};

export default Page;
