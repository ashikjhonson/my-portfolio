import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Journey from "./components/Journey";

function App() {
  return (
    <div className="App bg-gray-100 dark:bg-[#0e1525]">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Journey />
      <Footer />
    </div>
  );
}

export default App;
