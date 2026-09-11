"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import ParticleCanvas from "@/components/ParticleCanvas";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTracker from "@/components/ScrollTracker";

const SITE_CONFIG = {
  github: "deveshsety",
  linkedin: "https://www.linkedin.com/in/devesh-sety-a08367215",
  email: "devesh.ft272029@greatlakes.edu.in",
  phone: "+91 7977740996",
};

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <div
        className={`transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ParticleCanvas />
        <Navigation />
        <ScrollTracker sections={["home", "about", "projects", "experience", "skills", "education", "awards", "contact"]} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Awards />
          <Contact
            info={{
              email: SITE_CONFIG.email,
              phone: SITE_CONFIG.phone,
              linkedin: SITE_CONFIG.linkedin,
              location: "India",
            }}
          />
        </main>
        <Footer
          github={`https://github.com/${SITE_CONFIG.github}`}
          linkedin={SITE_CONFIG.linkedin}
          email={SITE_CONFIG.email}
        />
      </div>
    </>
  );
}