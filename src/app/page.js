import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import InternshipSection from "./components/InternshipSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0d092e]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="internship">
          <InternshipSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <EmailSection />
        </section>
      </div>
      <Footer />
    </main>
  );
}
