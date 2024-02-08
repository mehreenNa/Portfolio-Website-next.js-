import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";




const ProjectCard = ({ imageURL, title, description, githubLink, period, contributions,skills}) => {
  const [showModal, setShowModal] = useState(false);
  const [extraInformation, setExtraInformation] = useState("");
  const modalRef = useRef(null);
  // Use a ref to store the current scroll position to avoid stale state issues
  const scrollPosition = useRef(0);

  const disableScroll = () => {
    // Directly capture and use the current scroll position
    scrollPosition.current = window.scrollY;
    const body = document.body;
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition.current}px`;
    body.style.width = '100%';
  };

  const enableScroll = () => {
    const body = document.body;
    body.style.overflow = '';
    body.style.position = '';
    body.style.top = '';
    body.style.width = '';
    window.scrollTo(0, scrollPosition.current); // Use the ref's current value
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
        enableScroll(); // Re-enable scrolling when clicking outside
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      if (showModal) {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [showModal]);

  const openModal = (e) => {
    e.preventDefault();
    disableScroll();
    setShowModal(true);
  };

  const closeModal = () => {
    enableScroll();
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    setExtraInformation(e.target.value);
  };
  const skillsText = skills && Array.isArray(skills) ? skills.join(', ') : 'N/A';


  return (
    <div>
      <div className="group rounded-t-xl h-52 md:h-72 bg-center relative overflow-hidden">
        <Image
          src={imageURL}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="group-hover:opacity-75 transition-opacity duration-500 ease-in-out"
        />
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          <a href="#" onClick={(e) => openModal(e)} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </a>
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
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


      {showModal && (
  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      {/* Outer wrapper for gradient border */}
      <div 
        style={{ 
          background: 'linear-gradient(90deg, rgba(29,78,216,1) 0%, rgba(139,92,246,1) 50%, rgba(236,72,153,1) 100%)',
          borderRadius: '8px', // Keep the rounded corners
          padding: '2px', // Create space for the gradient border
          maxWidth: '600px', 
          width: '100%', 
          minHeight: '100px',
        }}
        className="inline-block align-bottom rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle"
      >
        {/* Modal content container with black background and rounded corners */}
        <div 
          className="bg-black rounded-lg"
          style={{ 
            width: '100%', 
            height: '100%', 
            overflowY: 'auto'
          }} 
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="modal-headline" 
          ref={modalRef}
        >
           <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 className="text-3xl text-left font-bold text-purple-400">{title}</h3>
            <p className="text-sm text-left text-gray-400">{period}</p>
            <ul className="list-disc py-4 pl-4 text-left text-white">
              {contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>
            <div className="mt-4">
              {/* Display skills with "Skills:" in normal weight and the skills themselves in bold */}
              <p className="text-xl text-left text-purple-400 font-bold ">Skills:  <span className="font-normal text-base text-white">{skillsText}</span></p>
            </div>
          </div>
          <div className="bg-black px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button 
              type="button" 
              className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-7 py-3 rounded-full w-full sm:w-auto"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}




    </div>
  );
};

export default ProjectCard;
