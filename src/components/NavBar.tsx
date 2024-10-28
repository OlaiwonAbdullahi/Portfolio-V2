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

        <div className="md:hidden mt-4">
          <button
            className="text-footer"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                fill="#ffffff"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path d="M17.062 16l9.37-9.37c0.136-0.136 0.219-0.323 0.219-0.53 0-0.415-0.336-0.751-0.751-0.751-0.208 0-0.395 0.084-0.531 0.22l-9.369 9.369-9.37-9.369c-0.135-0.131-0.319-0.212-0.522-0.212-0.414 0-0.75 0.336-0.75 0.75 0 0.203 0.081 0.387 0.212 0.522l9.368 9.369-9.369 9.369c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.394-0.084 0.53-0.219l9.37-9.37 9.369 9.37c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531z"></path>
              </svg>
            ) : (
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
            )}
          </button>
        </div>

        <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
          <li className="list-none">
            <Link
              to="/"
              className="text-textColor font-inter hover:text-textColor hover:scale-110 transition-transform duration-300 hover:text-xl"
              reloadDocument
            >
              Home
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="/about"
              className="text-NavColor font-inter hover:text-textColor hover:scale-110 transition-transform duration-300 hover:text-xl"
            >
              About
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="/projects"
              className="text-NavColor font-inter hover:text-textColor hover:scale-110 transition-transform duration-300 hover:text-xl"
            >
              Projects
            </Link>
          </li>
          <li className="list-none">
            <a
              href="https://docs.google.com/document/d/1PmtyGVVcy9xQnzoNNcAow_dvKYMAbac32cX0d1jitcM/edit?usp=sharing"
              className="text-NavColor font-inter hover:text-textColor hover:scale-110 transition-transform duration-300 hover:text-xl"
            >
              Resume
            </a>
          </li>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/OlaiwonAbdullahi">
            <img src={Github} className="h-11 w-12 mt-4" alt="GitHub Profile" />
          </a>
          <a href="https://wa.link/3sj6up">
            <button className="bg-transparent border-textColor rounded-xl border px-6 py-2 mt-4 font-poppins text-white text-sm md:text-base hover:bg-Reserved hover:text-Background hover:border-Background">
              Contact Me
            </button>
          </a>
        </div>
      </div>

      {isOpen && (
        <ul className="flex-col md:hidden items-center mx-auto flex">
          <li className="py-2">
            <Link
              to="/"
              className="text-NavColor hover:text-textColor hover:text-xl"
            >
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/About"
              className="text-NavColor  hover:text-textColor hover:text-xl"
            >
              About
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/Projects"
              className="text-NavColor  hover:text-textColor hover:text-xl"
            >
              Projects
            </Link>
          </li>
          <li className="py-2 mb-3">
            <a
              href="https://docs.google.com/document/d/1PmtyGVVcy9xQnzoNNcAow_dvKYMAbac32cX0d1jitcM/edit?usp=sharing"
              className="text-NavColor  hover:text-textColor hover:text-xl"
            >
              Resume
            </a>
          </li>
          <a href="https://wa.link/3sj6up">
            <button className="bg-transparent border-textColor rounded-xl border px-6 py-2 mt-4 font-poppins text-white text-sm md:text-base">
              Contact Me
            </button>
          </a>
        </ul>
      )}
    </nav>
  );
}
