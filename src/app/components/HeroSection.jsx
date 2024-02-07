"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-3xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I'm{" "}
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Mehreen", 1000,
              "Web Developer", 1000,
              "UI/UX Designer", 1000,
              "Data Engineer", 1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className= "text-[#ADB7BE] mb-6 text-md lg:text-xl text-center lg:text-left">
        Engineering the future, one line of code at a time. Just a University of Alberta Software Engineering student making bugs... I mean, features!        </p>
        <div className="flex flex-col sm:flex-row sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
        <button
  className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-7 py-3 rounded-full w-full sm:w-auto"
  onClick={() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }}
>
  Learn more
</button>

<a
  href="/Mehreen-s-resume (1).pdf" // Update this path to where your resume is located
  download="Mehreen_Naseer_Resume.pdf" // This is the default name for the downloaded file
  className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white rounded-full w-full sm:w-auto flex justify-center items-center border-4 border-transparent hover:border-white hover:bg-transparent"
>
  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-3">
    Download CV
  </span>
</a>

        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
          <Image
            src="/Avatar-20.png"
            alt="hero image"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
          <div id ="about"></div>
    </section>
    
  );
};

export default HeroSection;
