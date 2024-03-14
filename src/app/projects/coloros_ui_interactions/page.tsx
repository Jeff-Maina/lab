import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ErrorInput from "./components/ErrorInput";

const page = () => {
  return (
    <main className="w-full min-h-screen">
      <nav className="w-full flex items-center justify-between p-6">
        <Link href="/" className="flex items-center gap-2 text-sm">
          <ArrowLeft size={16} />
          Back
        </Link>
        <p className="font-bold tracking-tighter text-zinc-500">
          Oppo's ColorOS UI interactions.
        </p>
      </nav>
      <section className="p-6 flex flex-col gap-20 max-w-lg items-center m-auto">
        <ErrorInput />
      </section>
    </main>
  );
};

export default page;
