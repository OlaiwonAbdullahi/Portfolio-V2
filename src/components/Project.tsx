import github from "../assets/github.svg";
import arrow from "../assets/arrow.svg";
import { project } from "../Data";

export default function Project() {
  return (
    <div className="text-center px-4 md:px-0">
      <h2 className="text-2xl md:text-4xl text-white font-inter font-semibold mt-24">
        Projects
      </h2>
      <span className="bg-gradient-to-r from-textColor to-white bg-clip-text text-transparent font-poppins mt-1 text-base md:text-lg">
        Some of My Work
      </span>

      {/* Responsive grid for projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {project.map((work) => (
          <Work key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}

function Work({ work }) {
  return (
    <div className="card border bg-cardBg border-Reserved rounded-md p-3 w-full max-w-sm mx-auto">
      <div className="">
        <img
          src={work.img}
          alt={work.title}
          className="h-52 w-full object-cover rounded-md"
        />
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="text-Reserved font-inter text-left text-sm md:text-base whitespace-nowrap">
          {work.title}
        </p>

        <div className="flex space-x-2 justify-end">
          <a href={work.github} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="h-6 w-6" />
          </a>
          <a href={work.liveLink} target="_blank" rel="noopener noreferrer">
            <img src={arrow} alt="Live Link" className="h-6 w-6" />
          </a>
        </div>
      </div>

      <span className="text-textColor font-kanit mt-5 text-sm block">
        Technologies Used: {work.lang}
      </span>
    </div>
  );
}
