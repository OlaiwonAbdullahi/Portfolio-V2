import QrCode from "../assets/qrcode.png";

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
    <div className="card">
      <div className="">
        <img src={QrCode} alt="" />
      </div>
      <div className="">
        <p></p>
        <span></span>
      </div>
    </div>
  );
}
