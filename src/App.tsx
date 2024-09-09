import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/NavBar";
import Project from "./components/Project";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className=" bg-Background ">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
