import Projects from "./components/homepage/Projects";

export default function Home() {
  return (
    <main className="w-full min-h-screen pt-10 lg:pt-20">
      <section className="w-full max-w-3xl m-auto p-6 flex flex-col gap-10">
        <header className="md:p-6">
          <div className="flex flex-col gap-2">
            <p className="text-4xl font-bold tracking-tighter">Lab.</p>
            <p className="text-zinc-600 text-xs">
              Micro-Interactions and concepts.
            </p>
          </div>
        </header>
        <section>
          <Projects />
        </section>
      </section>
    </main>
  );
}
