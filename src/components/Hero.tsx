import HeroImg from "../assets/HeroImg.png";

export default function Hero() {
  return (
    <div className="bg-[url('./assets/HeroBg.png')] h-full bg-Background bg-no-repeat bg-center bg-auto flex items-center flex-col py-8 mb-8">
      <img
        src={HeroImg}
        alt="Hero Image"
        className="h-40 w-40 md:h-56 md:w-56 rounded-full my-2"
      />
      <h1 className="text-3xl md:text-5xl text-white font-poppins my-4 font-semibold">
        Abdullahi Olaiwon
      </h1>

      <span className="bg-gradient-to-r from-textColor to-white bg-clip-text text-transparent font-poppins mt-1 text-lg md:text-xl">
        FrontEnd Developer
      </span>
      <p className="text-white text-sm md:text-base font-poppins text-center mx-4 md:mx-auto w-full md:w-2/3 mt-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum fuga
        excepturi enim placeat quas rerum fugiat, hic assumenda necessitatibus
        quae fugit accusantium autem voluptatum repellat quos. Repudiandae,
        repellat. Temporibus, harum!
      </p>
      <button className="bg-transparent border-textColor rounded-3xl border px-6 py-2 mt-4 font-poppins text-white text-sm md:text-base">
        Contact Me
      </button>
    </div>
  );
}
