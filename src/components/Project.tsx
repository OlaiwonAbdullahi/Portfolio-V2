// Import React if you're using JSX
import github from "../assets/github.svg";
import arrow from "../assets/arrow.svg";
import { project } from "../Data";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

// Define the type for the project data
interface Project {
  id: number;
  img: string;
  title: string;
  lang: string;
  github: string;
  liveLink: string;
}

// Define the props type for the Work component
interface WorkProps {
  work: Project;
}

export default function ProjectList() {
  return (
    <div className="text-center px-4 md:px-0">
      <h2 className="text-2xl md:text-4xl text-white font-inter font-semibold mt-24">
        Projects
      </h2>
      <span className="bg-gradient-to-r from-textColor to-white bg-clip-text text-transparent font-poppins mt-1 text-base md:text-lg">
        Some of My Work
      </span>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        data-aos="fade-right"
      >
        {project.map((work) => (
          <Work key={work.id} work={work} />
        ))}
      </div>
      <a href="https://github.com/OlaiwonAbdullahi">
        <button
          className="bg-transparent border-textColor rounded-3xl border px-6 py-2 mt-9 mb-9 font-poppins text-white text-sm md:text-base"
          data-aos="fade-up"
        >
          View All Projects
        </button>
      </a>
    </div>
  );
}

function Work({ work }: WorkProps) {
  return (
    <div className="card border bg-cardBg border-Reserved rounded-md p-3 w-full max-w-sm mx-auto">
      <div className="">
        <img
          src={work.img}
          alt={work.title}
          className="h-52 w-full object-cover rounded-md hover:w-96"
        />
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="text-Reserved font-inter text-left text-sm md:text-base whitespace-nowrap">
          {work.title}
        </p>

        <div className="flex space-x-4 justify-end">
          <a href={work.github} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="h-6 w-6" />
          </a>
          <a href={work.liveLink} target="_blank" rel="noopener noreferrer">
            <img src={arrow} alt="Live Link" className="h-5 w-5" />
          </a>
        </div>
      </div>

      <span className="text-textColor font-kanit mt-5 text-sm block">
        Technologies Used: {work.lang}
      </span>
    </div>
  );
}
