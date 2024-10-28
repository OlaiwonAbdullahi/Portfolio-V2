import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function About() {
  return (
    <div className="text-center px-4 md:px-0 ">
      <h2
        className="text-2xl md:text-4xl text-white font-Maven font-semibold mt-24"
        data-aos="fade-right"
      >
        About Me
      </h2>
      <span
        className="bg-gradient-to-r from-textColor to-white bg-clip-text text-transparent font-poppins mt-1 text-base md:text-lg"
        data-aos="fade-right"
      >
        Get to Know Me
      </span>
      <p
        className="mt-8 w-full md:w-3/5 text-white font-poppins text-center leading-normal text-sm md:text-base mx-auto"
        data-aos="fade-up"
      >
        I'm a 17-year-old Frontend Developer focused on advancing in the tech
        field, with a strong interest in improving my skills. Currently, I'm on
        a FullStack journey at Web3Bridge Cohort XI, working on various
        projects, including a Quiz App, a replica of Swyft Pay using ReactJS and
        TailwindCSS, and the Krypto Skool Landing Page. My learning path
        includes mastering ReactJS, building responsive designs, and handling
        assets like QR codes in React applications. I am committed to
        continuously enhancing my web development capabilities.
      </p>
      <a href="https://docs.google.com/document/d/1PmtyGVVcy9xQnzoNNcAow_dvKYMAbac32cX0d1jitcM/edit?usp=sharing">
        <button
          className="bg-transparent border-textColor rounded-3xl border px-6 py-2 mt-6 font-poppins text-white text-sm md:text-base"
          data-aos="fade-up"
        >
          Download Resume
        </button>
      </a>
    </div>
  );
}
