import React from 'react';
import Image from 'next/image'; // Make sure to import the Image component

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        {/* Logo container */}
        <div className="relative w-14 h-14 md:w-15 md:h-15"> {/* Adjust the width and height as needed */}
          <Image
            src="/file2.png" // Path to your logo image
            alt="Logo"
            layout="fill" // Makes the image responsive
            objectFit="cover" // Covers the container, maintaining aspect ratio
            className="rounded-full" // Makes the image circular
          />
        </div>
        <p className="text-slate-700">All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
