import HeroImg from "../assets/HeroImg.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function Hero() {
  return (
    <div className="bg-[url('./assets/HeroBg.png')] h-full bg-Background bg-no-repeat bg-center bg-auto flex items-center flex-col py-8 mb-8">
      <img
        src={HeroImg}
        alt="Hero Image"
        className="h-40 w-40 md:h-56 md:w-56 rounded-full my-2"
        data-aos="fade-right"
      />
      <h1
        className="text-3xl md:text-5xl text-white font-Maven my-4 font-semibold text-center"
        data-aos="fade-left"
      >
        Abdullahi Olaiwon
      </h1>

      <span
        className="bg-gradient-to-r from-textColor to-white bg-clip-text text-transparent font-poppins mt-1 text-lg md:text-xl"
        data-aos="fade-right"
      >
        FrontEnd Developer
      </span>
      <p
        className="text-white text-sm md:text-base font-poppins text-center mx-4 md:mx-auto w-full md:w-2/3 mt-4"
        data-aos="fade-up"
      >
        I'm a frontend developer skilled in HTML, CSS, JavaScript, ReactJS,
        Tailwind CSS, and Bootstrap, with a goal of solving complex societal
        problems Using 1's and 0's. I'm also interested in Web3, alongside my
        frontend development skills.
      </p>
      <a href="https://wa.link/3sj6up">
        <button
          className="bg-transparent border-textColor rounded-3xl border px-6 py-2 mt-4 font-poppins text-white text-sm md:text-base"
          data-aos="fade-up"
        >
          Contact Me
        </button>
      </a>
    </div>
  );
}
