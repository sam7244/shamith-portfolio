import About from "../../components/About";
import Hero from "../../components/Hero";

import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import SkillsData from "./SkillsData";

export default function Home() {
  return (

    <div className="snap-y snap-mandatory mx-auto min-h-screen p-4">

      <Navbar />
      <section className="snap-start max-w-7xl mx-auto">
        <Hero />
      </section>
      <section className="snap-center max-w-7xl mx-auto">
        <About />
      </section>
      <section className="snap-start max-w-7xl mx-auto">
        <Projects />
      </section>
      <section className="snap-start max-w-7xl mx-auto">
        {/* @ts-expect-error Server Component */}
        <SkillsData />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
