import React from "react";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/Projects"; 
import EmailSection from "./components/Email";
import Footer from "./components/footer"
import AnimatedNumbers from "./components/Achieve" 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AnimatedNumbers/>
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        
      </div>
      <Footer/>
    </main>
  );
}
