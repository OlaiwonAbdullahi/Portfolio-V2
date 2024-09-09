import { useState } from "react";
import Github from "../assets/github.svg";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-Background p-4 sticky top-0 z-10 ">
      <div className="flex item-center justify-between container">
        <div className="mt-4 md:mt-2">
          <span className="font-oleo text-white ">Abdullahi</span>
        </div>

        <div className="md:hidden mt-4">
          <button className="text-footer" onClick={toggleMenu}>
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

        <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
          <li className="list-none">
            <a href="#" className="text-textColor font-inter">
              Home
            </a>
          </li>
          <li className="list-none">
            <a href="#" className="text-NavColor font-inter">
              About
            </a>
          </li>
          <li className="list-none">
            <a href="#" className="text-NavColor font-inter">
              Project
            </a>
          </li>
          <li className="list-none">
            <a href="#" className="text-NavColor font-inter">
              Resume
            </a>
          </li>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button>
            <a href="https://github.com/OlaiwonAbdullahi">
              <img src={Github} className="h-11 w-12 mt-4"></img>
            </a>
          </button>
          <button className="bg-transparent border-textColor rounded-xl border px-6 py-2 mt-4 font-poppins text-white text-sm md:text-base">
            Contact Me
          </button>
        </div>
      </div>

      {isOpen ? (
        <ul className="flex-col md:hidden items-center mx-auto flex  ">
          <li className="py-2">
            <a href="#" className="text-NavColor">
              Home
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-NavColor">
              About
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-NavColor">
              Project
            </a>
          </li>
          <li className="py-2 mb-3">
            <a href="#" className="text-NavColor">
              Resume
            </a>
          </li>

          <button className="bg-transparent border-textColor rounded-xl border px-6 py-2 mt-4 font-poppins text-white text-sm md:text-base">
            Contact Me
          </button>
        </ul>
      ) : null}
    </nav>
  );
}
