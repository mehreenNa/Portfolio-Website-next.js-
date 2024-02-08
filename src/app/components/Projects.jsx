"use client";
import React, { useState } from "react";
import ProjectCard from "./Pcard";
import Tags from "./Tags"; // Assuming Tags is the correct component for handling tag selection

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A portfolio website build with Next.js and CSS",
    image: "/Capture-3.PNG",
    tag: ["All", "Web"],
    githubLink: "https://github.com/mehreenNa/Portfolio-Website-next.js-",
    contributions: [
      "Crafted with Next.js and Tailwind CSS, my personal portfolio website features advanced animations and is hosted on Vercel. Designed for seamless user interaction, the site showcases my technical projects, skills, and professional achievements. It boasts responsive design, smooth CSS animations, and benefits from Next.js's server-side rendering and static site generation. Hosted on Vercel, the portfolio ensures optimal performance and reliability, reflecting my commitment to creating high-quality web applications."
    ],
    skills: ["Next.js ,React ,CSS, VS Code, Git, DynamoDB"] // Example skills
  },
  {
    id: 2,
    title: "Adidas Sales PowerBI",
    description: "A interactive PowerBi dashboard built using SQL",
    image: "/Untitled.png",
    tag: ["All", "Data Analyzing"],
    githubLink: "./",
    contributions: [
      "This Adidas Sales  project offers a detailed analysis of sales data utilizing PowerBI for visualization. It includes Jupyter notebooks for data cleaning/enrichment . SQL queries are utilized for data preprocessing. Through this comprehensive approach, stakeholders gain valuable insights into sales trends and customer behavior, empowering informed decision-making."
    ],
    skills: ["PowerBI, PowerApps, SQL, python, VBA"] // Example skills
  }, {
    id: 3,
    title: "Andriod Budgeting App",
    description: "A Andriod App developed using Java/HTML",
    image: "/Untitled4.png",
    tag: ["All", "Mobile"],
    githubLink: "https://github.com/mehreenNa/Budget-Tracking-Android-App-",
    contributions: [
      "The Budget Tracking App project employed Agile methodologies and Scrum practices to develop a versatile mobile application for effective finance management. Utilizing Android Studio, Java, and Firebase, the app offered secure data storage and seamless user authentication. Object-oriented programming principles were pivotal in structuring the codebase, enhancing modularity and maintenance. Collaborative teamwork fostered creativity and problem-solving skills, while user-centric design, including HTML layout crafting, ensured an intuitive and visually appealing user experience. Overall, the project provided valuable hands-on experience in mobile app development, emphasizing adaptability, technical proficiency, and user-centered design principles."
    ],
    skills: ["Java, HTML, Firebase, Andriod Studio, Agile, OOP"] // Example skills
  }, {
    id: 4,
    title: "CLI Twitter Clone",
    description: "A command line application replicating twitter",
    image: "/CLI2.PNG",
    tag: ["All", "Data Analyzing", "Web"],
    githubLink: "https://github.com/mehreenNa/Budget-Tracking-Android-App-",
    contributions: [
      "The CLI Twitter-like Program is an innovative project crafted with Python, SQL, and MongoDB, bringing the essence of Twitter directly to the command line. Users can register, compose tweets, interact with others, and explore personalized timelines within this minimalistic yet powerful platform. Leveraging Python as the carrier language, SQL queries initially manage data storage and retrieval, while MongoDB integration enhances scalability and flexibility. This project not only provides a hands-on experience in Python programming, SQL, and NoSQL databases but also offers a fun and educational journey into command line interface development."
    ],
    skills: ["Python, SQL, MongoDB, SQL Database, Command Line Interface (CLI), Python Libraries/Frameworks"] // Example skills
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <>
      <h2 
      className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div  className="flex flex-row justify-center items-center gap-2 text-white my-6">
        {/* Corrected to use Tags component */}
        <Tags name="All" onClick={() => handleTagChange("All")} isSelected={tag === "All"} />
        <Tags name="Web" onClick={() => handleTagChange("Web")} isSelected={tag === "Web"} />
        <Tags name="Mobile" onClick={() => handleTagChange("Mobile")} isSelected={tag === "Mobile"} />
        <Tags name="Data Analyzing" onClick={() => handleTagChange("Data Analyzing")} isSelected={tag === "Data Analyzing"} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageURL={project.image} 
            githubLink={project.githubLink} // Pass the GitHub link as a prop
            contributions={project.contributions}
            skills={project.skills}

          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
