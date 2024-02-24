import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu({ closeNav }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className="relative inline-block">
      <button
        className="transition"
        onMouseOver={handleMouseEnter}
        onClick={() => setIsOpen(!isOpen)}
      >
        Services
      </button>
      {isOpen && (
        <ul
          className="absolute text-black z-10 bg-white rounded shadow w-[250px] mt-2 py-2 text-[15px] "
          onMouseLeave={handleMouseLeave}
        >
          <li
            className="hover:bg-[#097969] hover:text-white px-4 py-2  "
            onClick={closeNav}
          >
            <Link to="/services/logo">Logo Packages</Link>
          </li>
          <li
            className="hover:bg-[#097969] hover:text-white px-4 py-2"
            onClick={closeNav}
          >
            <Link to="/services/web">Website Packages</Link>
          </li>
          <li
            className="hover:bg-[#097969] hover:text-white px-4 py-2"
            onClick={closeNav}
          >
            <Link to="/services/ecommerce">E-Commerce Packages</Link>
          </li>
          <li
            className="hover:bg-[#097969] hover:text-white px-4 py-2  "
            onClick={closeNav}
          >
            <Link to="/services/logo">Seo Packages</Link>
          </li>
          <li
            className="hover:bg-[#097969] hover:text-white px-4 py-2"
            onClick={closeNav}
          >
            <Link to="/services/web">SMM Packages</Link>
          </li>
          <li
            className="hover:bg-[#097969] hover:text-white px-4 py-2"
            onClick={closeNav}
          >
            <Link to="/services/ecommerce">Video Packages</Link>
          </li>
          <li
            className="hover:bg-[#097969] hover:text-white px-4 py-2"
            onClick={closeNav}
          >
            <Link to="/services/ecommerce">Branding Packages</Link>
          </li>
          <li
            className="hover:bg-[#097969] hover:text-white px-4 py-2"
            onClick={closeNav}
          >
            <Link to="/services/ecommerce">Hosting Packages</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
