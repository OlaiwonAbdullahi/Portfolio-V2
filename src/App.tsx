import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/NavBar";
import Post from "./components/Post";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";
import { ToastContainer } from "react-toastify";

ReactGA.initialize("G-W3MX88S0B8");

export default function App() {
  return (
    <div className=" bg-Background ">
      <ToastContainer />
      <BrowserRouter basename="/">
        <Nav />

        <Hero />
        <About />
        <Skills />
        <Project />
        <Post />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
