import React from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imageURL, title, description }) => {
  return (
    <div>
      <div className="group rounded-t-xl h-52 md:h-72 bg-center relative overflow-hidden">
        <Image
          src={imageURL}
          alt={title}
          fill // This replaces layout="fill" for Next.js 13+
          style={{ objectFit: "cover" }} // Apply styles directly for objectFit
          className="group-hover:opacity-75 transition-opacity duration-500 ease-in-out"
        />
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          <Link
            href="/"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
          <Link
            href="/"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
        </div>
      </div>
      <div className="bg-[#181818] rounded-b-xl py-6 px-4 text-white">
        <h5 className="font-lg font-semibold">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
