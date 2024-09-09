import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import git from "../assets/git.svg";
import sass from "../assets/sass.svg";
import react from "../assets/react.svg";
import github from "../assets/github.svg";
import bootsrap from "../assets/bootsrap.svg";
import tailwind from "../assets/tailwind-css.svg";
export default function Skills() {
  return (
    <div className="text-center px-4 md:px-0 ">
      <h2 className="text-2xl md:text-4xl text-white font-inter font-semibold mt-24">
        My Tech Skills
      </h2>
      <span className="bg-gradient-to-r from-textColor to-white bg-clip-text text-transparent font-poppins mt-1 text-base md:text-lg">
        Explore My Programming Skills
      </span>

      <div className="flex flex-col md:flex-row items-center gap-6 mx-auto justify-center mt-14">
        <img src={html} alt="" className="h-20 w-20" />
        <img src={css} alt="" className="h-20 w-20" />
        <img src={js} alt="" className="h-20 w-20" />
        <img src={sass} alt="" className="h-20 w-20" />
        <img src={bootsrap} alt="" className="h-20 w-20" />
        <img src={react} alt="" className="h-20 w-20" />
        <img src={git} alt="" className="h-20 w-20" />
        <img src={github} alt="" className="h-20 w-20" />
        <img src={tailwind} alt="" className="h-20 w-20" />
        <img src={git} alt="" className="h-20 w-20" />
      </div>
    </div>
  );
}
