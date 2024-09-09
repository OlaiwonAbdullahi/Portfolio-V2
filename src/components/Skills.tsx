import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import git from "../assets/git.svg";
import sass from "../assets/sass.svg";
import react from "../assets/react.svg";
import github from "../assets/github.svg";
import bootsrap from "../assets/bootsrap.svg";
import tailwind from "../assets/tailwind-css.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function Skills() {
  return (
    <div className="text-center px-4 md:px-0">
      <h2
        className="text-2xl md:text-4xl text-white font-inter font-semibold mt-24"
        data-aos="fade-right"
      >
        My Tech Skills
      </h2>
      <span
        className="bg-gradient-to-r from-textColor to-white bg-clip-text text-transparent font-poppins mt-1 text-base md:text-lg"
        data-aos="fade-left"
      >
        Explore My Programming Skills
      </span>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto justify-center mt-14">
        <div className="flex justify-center items-center" data-aos="fade-right">
          <img src={html} alt="HTML" className="h-20 w-20" />
        </div>
        <div className="flex justify-center items-center" data-aos="fade-left">
          <img src={css} alt="CSS" className="h-20 w-20" />
        </div>
        <div className="flex justify-center items-center" data-aos="fade-right">
          <img src={js} alt="JavaScript" className="h-20 w-20" />
        </div>
        <div className="flex justify-center items-center" data-aos="fade-left">
          <img src={sass} alt="SASS" className="h-20 w-20" />
        </div>
        <div className="flex justify-center items-center" data-aos="fade-right">
          <img src={bootsrap} alt="Bootstrap" className="h-20 w-20" />
        </div>
        <div className="flex justify-center items-center" data-aos="fade-left">
          <img src={react} alt="React" className="h-20 w-20" />
        </div>
        <div className="flex justify-center items-center" data-aos="fade-right">
          <img src={git} alt="Git" className="h-20 w-20" />
        </div>
        <div className="flex justify-center items-center" data-aos="fade-left">
          <img src={github} alt="GitHub" className="h-20 w-20" />
        </div>
        <div className="flex justify-center items-center" data-aos="fade-right">
          <img src={tailwind} alt="Tailwind CSS" className="h-20 w-20" />
        </div>
      </div>
    </div>
  );
}
