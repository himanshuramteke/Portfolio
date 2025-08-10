"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeView = () => {
    const resumeUrl = "/HimanshuRamteke-resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-2">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Himanshu.dev</div>

          <div className="hidden md:flex space-x-8">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground hover:text-primary transition-colors cursor-pointer capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              onClick={handleResumeView}
              className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            >
              Resume
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
