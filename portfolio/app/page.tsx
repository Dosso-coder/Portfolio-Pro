"use client";

import { useState } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((current) => {
      const next = !current;
      document.documentElement.classList.toggle("light", !next);
      return next;
    });
  };

  return (
    <main
      className={isDark ? "min-h-screen" : "light min-h-screen"}
      style={{ background: "var(--bg)" }}
    >
      <div className="min-h-screen overflow-hidden transition-colors">
        <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
