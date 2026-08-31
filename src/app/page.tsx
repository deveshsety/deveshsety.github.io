"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Update these with your actual information
const SITE_CONFIG = {
  github: "deveshsety",
  linkedin: "https://linkedin.com/in/YOUR_PROFILE",
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
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects username={SITE_CONFIG.github} />
          <Experience />
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
