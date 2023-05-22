import About from "../../components/About";
import Hero from "../../components/Hero";

import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import SkillsData from "./SkillsData";
import Certificate from "../../components/Certificate";
import CertificateData from "./CertificateData";
import Contacts from "../../components/Contacts";

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
      <section className="snap-start max-w-7xl mx-auto">
        {/* @ts-expect-error Server Component */}
        <CertificateData />
      </section>
      <section className="snap-start max-w-7xl mx-auto">
        <Contacts />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
