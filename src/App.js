import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Journey from "./components/Journey";
import Carousel from "./components/Carousel";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App bg-gray-100 dark:bg-[#0e1525] select-none">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Journey />
      <Carousel />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
