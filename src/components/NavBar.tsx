import { useState } from "react";
import Github from "../assets/github.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-Background p-4 sticky top-0 z-10">
      <div className="flex items-center justify-between container">
        <div className="mt-4 md:mt-2 ml-10">
          <span className="font-oleo text-white text-xl">Abdullahi</span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden mt-4">
          <button
            className="text-footer"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
          <li className="list-none">
            <Link to="/" className="text-textColor font-inter" reloadDocument>
              Home
            </Link>
          </li>
          <li className="list-none">
            <Link to="/about" className="text-NavColor font-inter">
              About
            </Link>
          </li>
          <li className="list-none">
            <Link to="/projects" className="text-NavColor font-inter">
              Projects
            </Link>
          </li>
          <li className="list-none">
            <Link to="/resume" className="text-NavColor font-inter">
              Resume
            </Link>
          </li>
        </div>

        {/* GitHub & Contact */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/OlaiwonAbdullahi">
            <img src={Github} className="h-11 w-12 mt-4" alt="GitHub Profile" />
          </a>
          <a href="https://wa.link/3sj6up">
            <button className="bg-transparent border-textColor rounded-xl border px-6 py-2 mt-4 font-poppins text-white text-sm md:text-base">
              Contact Me
            </button>
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="flex-col md:hidden items-center mx-auto flex">
          <li className="py-2">
            <Link to="/" className="text-NavColor">
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link to="/About.tsx" className="text-NavColor">
              About
            </Link>
          </li>
          <li className="py-2">
            <Link to="/Projects" className="text-NavColor">
              Projects
            </Link>
          </li>
          <li className="py-2 mb-3">
            <Link to="/Skills" className="text-NavColor">
              Skills
            </Link>
          </li>

          <button className="bg-transparent border-textColor rounded-xl border px-6 py-2 mt-4 font-poppins text-white text-sm md:text-base">
            Contact Me
          </button>
        </ul>
      )}
    </nav>
  );
}
