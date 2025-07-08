"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
  
   useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
    };

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
   }, [])

   const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if(element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
   }

   const handleResumeDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/resume.pdf'; // Put your resume.pdf in the public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Himanshu_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
   }

   return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Himanshu.dev
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              onClick={handleResumeDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
            >
              Resume
            </Button>
          </div>
        </nav>
      </div>
    </header>
   )
}