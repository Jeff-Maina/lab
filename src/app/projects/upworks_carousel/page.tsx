import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <main className="max-w-5xl m-auto w-full min-h-screen pt-10 lg:pt-32 flex flex-col gap-10 p-6">
      <header>
        <Link href="/" className="flex items-center gap-1 max-w-fit">
          <ArrowLeft size={16} />
          Back
        </Link>
        <br />
        <p className="text-xl font-semibold tracking-tight">
          <a
            href="https://masterclass.com"
            target="_blank"
            className="underline decoration-zinc-400 text-[#56A917]"
          >
            Upwork's
          </a>
          {"  "}
          carousel.
        </p>
        <small className="text-zinc-500">Friday, 26 April 2024</small>
      </header>
      {/* for mobile screens */}
      <div className="hidden md:block w-full rounded border bg-zinc-100/70 h-[60vh] p-10 lg:p-20">
        <div className="h-64 w-full max-w-2xl m-auto rounded-2xl overflow-hidden bg-black"></div>
      </div>
    </main>
  );
};

export default page;
