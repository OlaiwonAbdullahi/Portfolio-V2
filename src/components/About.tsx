export default function About() {
  return (
    <div className="text-center px-4 md:px-0 ">
      <h2 className="text-2xl md:text-4xl text-white font-inter font-semibold mt-24">
        About Me
      </h2>
      <span className="bg-gradient-to-r from-textColor to-white bg-clip-text text-transparent font-poppins mt-1 text-base md:text-lg">
        Get to Know Me
      </span>
      <p className="mt-8 w-full md:w-3/5 text-white font-poppins text-center leading-normal text-sm md:text-base mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia hic
        similique doloremque suscipit, enim debitis voluptatem quo! Porro saepe
        itaque soluta doloremque, natus molestiae nostrum atque iste sequi
        corrupti repellat. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Molestiae tempore, sunt eius neque debitis exercitationem eaque
        architecto laborum aut eveniet nemo ex, officia illum beatae quaerat ea
        voluptatibus. Officiis, asperiores?
      </p>

      <button className="bg-transparent border-textColor rounded-3xl border px-6 py-2 mt-6 font-poppins text-white text-sm md:text-base">
        Download Resume
      </button>
    </div>
  );
}
