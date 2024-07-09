import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Journey from "./components/Journey";
import Carousel from "./components/Carousel";
import Gallery from "./components/Gallery";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedImages = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedImages += 1;
      } else {
        img.onload = () => {
          loadedImages += 1;
          if (loadedImages === images.length) {
            setLoading(false);
          }
        };
      }
    });

    if (loadedImages === images.length) {
      setLoading(false);
    }
  }, []);

  return (
    <div className="App bg-gray-100 dark:bg-[#0e1525] select-none">
      {loading && <Loader />}
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
