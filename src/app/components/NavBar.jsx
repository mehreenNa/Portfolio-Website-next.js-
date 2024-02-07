"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import NavLink from './NabLink'; // Ensure this is correctly pointing to your NavLink component
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "#about" },
  { title: "Work Experience", path: "#workexperience" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="py-3 fixed top-0 left-0 right-2 z-10 bg-[#121212] bg-opacity-90">
    <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-2">
      <Link href="/" className="relative block w-24 h-24 md:w-25 md:h-25"> {/* Increased the width and height */}
        <Image
          src="/file2.png" // Your logo image path
          alt="Logo"
          layout="fill" // Use "fill" for a responsive image
          objectFit="cover" // Cover the container, maintaining aspect ratio
          className="rounded-full" // Make the image circular
        />
        </Link>

        <button onClick={() => setNavbarOpen(!navbarOpen)} className="block md:hidden px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white">
          {navbarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
        <div className={`flex ${navbarOpen ? "flex" : "hidden"} md:block items-center justify-center w-full md:w-auto`}>
          <ul className={`flex flex-col md:flex-row list-none mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-8 ${navbarOpen ? "items-center" : ""}`}>
            {navLinks.map((link, index) => (
              <li key={index} className={`${navbarOpen ? "text-center" : ""}`}>
                <NavLink title={link.title} href={link.path} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
