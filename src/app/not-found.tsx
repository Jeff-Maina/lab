import { ArrowRight } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex items-center justify-center h-[90vh] w-full">
      <div className="flex flex-col gap-10 items-center">
        <p className="text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-black to-white">
          Page does not exist
        </p>
        <Link href="/" className="flex items-center gap-2 max-w-fit m-auto">
          Return home
          <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
};

export default page;
