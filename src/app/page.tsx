import About from "../../components/About";
import Hero from "../../components/Hero";

import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import SkillsData from "./SkillsData";
import Certificate from "../../components/Certificate";
import CertificateData from "./CertificateData";
import Contacts from "../../components/Contacts";
import BottomNavigator from "../../components/BottomNavigator";

export default function Home() {
  return (
    <div id="home" className="snap-y snap-mandatory mx-auto min-h-screen p-4">
      <Navbar />
      <section className="snap-start max-w-7xl mx-auto">
        <Hero />
      </section>
      <section id="about" className="  snap-center max-w-7xl mx-auto">
        <About />
        <BottomNavigator location={"home"} />
      </section>
      <section id="projects" className=" snap-start max-w-7xl mx-auto">
        <Projects />
        <BottomNavigator location={"about"} />
      </section>
      <section id="certificates" className="snap-start max-w-7xl mx-auto">
        {/* @ts-expect-error Server Component */}
        <CertificateData />
        <BottomNavigator location={"projects"} />
      </section>
      <section className="snap-start max-w-7xl mx-auto">
        {/* @ts-expect-error Server Component */}
        <SkillsData />
        <BottomNavigator location={"certificates"} />
      </section>

      <section className="snap-start max-w-7xl mx-auto">
        <Contacts />
        <BottomNavigator location={"home"} />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
