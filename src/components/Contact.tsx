import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  useEffect(() => {
    AOS.init();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pki7w44",
        "template_73y3nu3",
        form.current,
        "v4xrfO__Rz_U3roqy"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            theme: "dark",
            position: "top-center",
            //icon: "🚀",
          });
          console.log("SUCCESS!");
        },
        (error) => {
          toast.error("Failed to send message. Try again later.", {
            theme: "dark",
            //icon: "⚠️",
          });
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="text-center px-4 md:px-0 mb-24">
      <h2
        className="text-2xl md:text-4xl text-white font-Maven font-semibold mt-24"
        data-aos="fade-right"
      >
        Get In Touch
      </h2>
      <span
        className="bg-gradient-to-r from-textColor to-white bg-clip-text text-transparent font-poppins mt-1 text-base md:text-lg"
        data-aos="fade-left"
      >
        Let's Work Together
      </span>

      <div
        className="mt-7 w-full md:w-2/3 flex flex-col mx-auto"
        data-aos="fade-up"
      >
        <form
          className="flex flex-col items-center"
          onSubmit={sendEmail}
          ref={form}
        >
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            name="from_name"
            required
            className="w-full md:w-3/4 lg:w-1/2 px-3 py-2 focus:outline-none border border-Reserved rounded-md bg-Background mb-4 text-sm md:text-base text-NavColor font-inter"
          />

          <input
            type="email"
            placeholder="Your Email"
            id="email"
            name="email"
            required
            className="w-full md:w-3/4 lg:w-1/2 px-3 focus:outline-none py-2 border border-Reserved rounded-md bg-Background mb-4 text-sm md:text-base text-NavColor font-inter"
          />

          <textarea
            placeholder="Your Message"
            id="message"
            name="message"
            required
            className="w-full md:w-3/4 lg:w-1/2 focus:outline-none h-36 px-3 py-2 border border-Reserved rounded-md bg-Background text-sm md:text-base text-NavColor font-inter mb-4"
          />

          <button
            type="submit"
            className="bg-white flex items-center justify-center mx-auto text-Background px-6 py-3 rounded-xl font-poppins w-1/2 font-semibold text-sm md:text-base"
          >
            Get In Touch
          </button>
        </form>
      </div>
    </div>
  );
}
