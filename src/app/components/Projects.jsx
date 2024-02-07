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
  },
  {
    id: 2,
    title: "Photography Portfolio Website", // Corrected spelling
    description: "Project 2 description",
    image: "/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/1.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/1.png",
    tag: ["All", "Web"],
  },
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
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageURL={project.image} 
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
