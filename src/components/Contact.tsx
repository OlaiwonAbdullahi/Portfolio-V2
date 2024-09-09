export default function Contact() {
  return (
    <div className="text-center px-4 md:px-0 ">
      <h2 className="text-2xl md:text-4xl text-white font-inter font-semibold mt-24">
        Get In Touch
      </h2>
      <span className="bg-gradient-to-r from-textColor to-white bg-clip-text text-transparent font-poppins mt-1 text-base md:text-lg">
        Let's Work Together
      </span>

      <div className="mt-7 w-2/3 flex flex-col mx-auto">
        <form action="">
          <label htmlFor="name" className="text-white font-poppins mb-2">
            Name:{" "}
          </label>

          <input
            type="text"
            placeholder="Your Name"
            id="name"
            className="w-1/2 px-3 py-2 border border-Reserved rounded-md bg-Background mb-3"
          />
          <label htmlFor="name" className="text-white font-poppins mb-2">
            Email:{" "}
          </label>

          <input
            type="text"
            placeholder="Your Email"
            id="Email"
            className="w-1/2 px-3 py-2 border border-Reserved rounded-md bg-Background"
          />
        </form>
      </div>
    </div>
  );
}
