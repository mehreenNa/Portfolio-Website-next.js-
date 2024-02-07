"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    id: "certifications",
    content: (
      <div>
        <h3 className="text-xl font-bold">Ontario Power Generation</h3>
        <p className="text-sm">Jan 2023 - Aug 2023</p> {/* Replace with actual dates */}
        <ul className="list-disc pl-4">
          <li>Spearheaded the development of Power BI dashboards for a time-critical project, utilizing advanced SQL queries to handle and analyze large datasets</li> {/* Replace with actual duties */}
          <li>Demonstrated proficiency in SQL for data extraction, cleaning, and analysis, leading to the production of summarized reports that provided key insights for decision-makers.</li>
          <li>Collaborated effectively with the reporting group, applying analytical acumen to translate project needs into technical specifications</li>
          <li>Facilitated monthly department meetings to ensure projects were progressing smoothly and adhering to set
timelines.</li>
          
          {/* Add more as needed */}
        </ul>
  
      
      </div>
    ),
  }
  ,
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid md:grid-cols-3 gap-4 text-base md:text-lg">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Languages</h3>
          <ul className="list-disc pl-4 text-sm">
            <li>Python</li>
            <li>Java</li>
            <li>HTML/CSS</li>
            <li>C/C+</li>
            <li>Dart</li>
            <li>Rust</li>
            <li>JavaScript (ES6+)</li>
            <li>SQL</li>
            
            {/* Add other languages as needed */}
          </ul>
        </div>
  
       
  
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Frameworks and Libraries</h3>
          <ul className="list-disc pl-4 text-sm">
            <li>React</li>
            <li>flutter</li>
            <li>spotify API</li>
            <li>Next.js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>DynamoDB</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Development Tools</h3>
          <ul className="list-disc pl-4 text-sm">
            <li>Git</li>
            <li>PowerBI</li>
            <li>Docker</li>
            <li>Andriod Studio</li>
            <li>Linux OS</li>
            {/* Add other development tools as needed */}
          </ul>
        </div>
      </div>
    ),
  }
  
  ,
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
 
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (

    <section  className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src="/about-image.webp" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white text-base md:text-lg">
  My name is Mehreen Naseer, and I&apos;m currently in my last year of Software Engineering at the University of Alberta. My academic and professional journey is deeply rooted in a fervor for front-end development and data analysis, fueled by an ambition to innovate and infuse creativity into technology. I am dedicated to developing products that connect with users, leveraging data to guide these innovations. In collaborative environments, I aim to focus on user-centered design. As I immerse myself further into the technology landscape, I am on the lookout for a co-op opportunity where I can apply my abilities and further advance my knowledge.
</p>

          <div className="flex flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Work Experince
            </TabButton>
           
           
           
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            
          </div>
          <div id = "projects" className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;