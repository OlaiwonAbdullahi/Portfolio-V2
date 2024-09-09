import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/NavBar";
import Project from "./components/Project";

export default function App() {
  return (
    <div className=" bg-Background ">
      <Nav />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
