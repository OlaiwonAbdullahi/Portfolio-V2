import github from "../assets/github.svg";
import arrow from "../assets/arrow.svg";
import { project } from "../Data";

export default function Project() {
  return (
    <div className="text-center px-4 md:px-0 ">
      <h2 className="text-2xl md:text-4xl text-white font-inter font-semibold mt-24">
        Projects
      </h2>
      <span className="bg-gradient-to-r from-textColor to-white bg-clip-text text-transparent font-poppins mt-1 text-base md:text-lg">
        Some of My Work
      </span>
      <div className="">
        {project.map((work) => (
          <Work key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}

function Work({ work }) {
  return (
    <div className="card border bg-cardBg border-Reserved rounded-md p-3 w-96 ml-4">
      <div className="">
        <img src={work.img} alt={work.title} className="h-52 w-96" />
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="text-Reserved font-inter basis-2/3 text-left whitespace-nowrap">
          {work.title}
        </p>

        <div className="flex space-x-2 basis-1/3 justify-end">
          <a href={work.github}>
            <img src={github} alt="GitHub" className="h-6 w-6" />
          </a>
          <a href={work.liveLink}>
            <img src={arrow} alt="Live Link" className="h-6 w-6" />
          </a>
        </div>
      </div>
      <span className="text-textColor font-kanit mt-5 text-sm">
        Technologies Used: {work.lang}
      </span>
    </div>
  );
}
