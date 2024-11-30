import Gmail from "../assets/gmail.png";
import Whatsapp from "../assets/whatsapp.svg";
import X from "../assets/X.svg";
import LinkedIn from "../assets/Linkedin.svg";
import Medium from "../assets/medium.svg";
import GitHub from "../assets/github.svg";

export default function Footer() {
  return (
    <div>
      <div className="px-4 md:px-0 flex flex-col md:flex-row items-center justify-between mt-8">
        <div className="basis-full md:basis-1/2 mb-6 md:mb-0">
          <h2 className="text-footer font-inter text-3xl md:text-5xl text-center md:text-left md:ml-24">
            Let's
            <br />
            Work Together -
          </h2>
        </div>

        <div className="bg-Background border border-Reserved w-full md:w-auto h-14 rounded-md flex justify-center items-center mx-auto">
          <button className="flex items-center gap-2 px-4 py-2">
            <img src={Gmail} className="h-5 w-7" alt="Gmail Icon" />
            <span className="text-footer font-poppins text-sm md:text-base ">
              <a href="mailto:olaiwonabdullahi@gmail.com">
                {" "}
                olaiwonabdullahi@gmail.com
              </a>
            </span>
          </button>
        </div>
      </div>

      <hr className="border border-Reserved mt-6"></hr>

      <div className="flex flex-col-reversed md:flex-row ">
        <div className="basis-1/2 my-8">
          <span className="font-poppins  text-Reserved md:ml-24 text-center flex mx-auto justify-center md:justify-start">
            &copy; 2024 All Right Reserved
          </span>
        </div>
        <div className="basis-1/2 flex mx-auto justify-center my-6 gap-3">
          <a href="https://github.com/OlaiwonAbdullahi">
            <img src={GitHub} className="h-9 w-9"></img>
          </a>
          <a href="https://wa.link/3sj6up">
            <img src={Whatsapp} className="h-9 w-9"></img>
          </a>
          <a href="https://x.com/abdullahiola_05">
            <img src={X} className="h-9 w-9"></img>
          </a>
          <a href="https://linkedin.com/in/abdullahi-olaiwon-245b37276">
            <img src={LinkedIn} className="h-9 w-9"></img>
          </a>
          <a href="https://medium.com/@olaiwonabdullahi">
            <img src={Medium} className="h-9 w-9"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
