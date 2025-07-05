"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative 
        overflow-hidden"
    >
      {/* Animated background elements*/}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full
          blur-3xl animate-float"
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full
          blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64
          bg-cyan-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-foreground">Hello, I&apos;m </span>
            <span className="text-primary animate-glow">John Doe</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            Full Stack Developer & UI/UX Designer creating beautiful, functional
            digital experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg glow-border"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              className="px-8 py-3 text-lg border-primary/20 hover:border-primary/40"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>

          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
