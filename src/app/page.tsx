import About from "../../components/About";
import Hero from "../../components/Hero";

import Navbar from "../../components/Navbar";

export default async function Home() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen p-4">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
