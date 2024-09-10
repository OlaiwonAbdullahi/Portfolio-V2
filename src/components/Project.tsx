import QrCode from "../assets/qrcode.png";
import github from "../assets/github.svg";
import arrow from "../assets/arrow.svg";

export default function Project() {
  return (
    <div className="text-center px-4 md:px-0 ">
      <h2 className="text-2xl md:text-4xl text-white font-inter font-semibold mt-24">
        Projects
      </h2>
      <span className="bg-gradient-to-r from-textColor to-white bg-clip-text text-transparent font-poppins mt-1 text-base md:text-lg">
        Some of My Work
      </span>

      <Work />
    </div>
  );
}

function Work() {
  return (
    <div className="card border bg-cardBg border-Reserved rounded-md p-3 w-80 ml-4">
      <div className="">
        <img src={QrCode} alt="QR Code" className="h-44 w-80" />
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="text-Reserved font-inter basis-2/3 text-left">
          QR Code Generator & Scanner
        </p>

        <div className="flex space-x-2 basis-1/3 justify-end">
          <a href="https://github.com/OlaiwonAbdullahi/QR-Scanner-generator">
            <img src={github} alt="GitHub" className="h-8 w-8" />
          </a>
          <a href="https://qr-scanner-generator.netlify.app/">
            <img src={arrow} alt="Live Link" className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
