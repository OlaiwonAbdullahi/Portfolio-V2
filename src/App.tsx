import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/NavBar";
import Post from "./components/Post";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className=" bg-Background ">
      <BrowserRouter basename="/">
        <Nav />

        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
        <Post />
      </BrowserRouter>
    </div>
  );
}
