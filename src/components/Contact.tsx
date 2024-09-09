export default function Contact() {
  return (
    <div className="text-center px-4 md:px-0 mb-24">
      <h2 className="text-2xl md:text-4xl text-white font-inter font-semibold mt-24">
        Get In Touch
      </h2>
      <span className="bg-gradient-to-r from-textColor to-white bg-clip-text text-transparent font-poppins mt-1 text-base md:text-lg">
        Let's Work Together
      </span>

      <div className="mt-7 w-full md:w-2/3 flex flex-col mx-auto">
        <form action="" className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            className="w-full md:w-3/4 lg:w-1/2 px-3 py-2 border border-Reserved rounded-md bg-Background mb-4 text-sm md:text-base"
          />

          <input
            type="email"
            placeholder="Your Email"
            id="email"
            className="w-full md:w-3/4 lg:w-1/2 px-3 py-2 border border-Reserved rounded-md bg-Background mb-4 text-sm md:text-base"
          />

          <textarea
            placeholder="Your Message"
            id="message"
            className="w-full md:w-3/4 lg:w-1/2 h-36 px-3 py-2 border border-Reserved rounded-md bg-Background text-sm md:text-base"
          />
        </form>

        <div className="flex justify-center mt-6">
          <button className="bg-white text-Background px-6 py-2 rounded-xl font-poppins w-full md:w-3/4 lg:w-1/2 font-semibold text-sm md:text-base">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
