import Gmail from "../assets/gmail.png";

export default function Footer() {
  return (
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
          <span className="text-footer font-poppins text-sm md:text-base">
            olaiwonabdullahi@gmail.com
          </span>
        </button>
      </div>
    </div>
  );
}
