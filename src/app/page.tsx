import About from "../../components/About";
import Hero from "../../components/Hero";

import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";

export default async function Home() {
  // bg - [rgb(36, 36, 36)];
  return (
    <div className="bg-gray-900   snap-y snap-mandatory mx-auto min-h-screen p-4">
      <Navbar />
      <section className="snap-start">
        <Hero />
      </section>
      <section className="snap-center">
        <About />
      </section>
      <section className="snap-start">
        <Projects />
      </section>
    </div>
  );
}
