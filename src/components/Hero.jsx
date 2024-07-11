import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import me from "../assets/me.png";
import resume from "../assets/resume.pdf";
import pyramid from "../assets/pyramid.svg";
import dpyramid from "../assets/dp.svg";

export default function Hero() {
  const navigation = [
    { name: "ℍ𝕠𝕞𝕖", href: "/" },
    { name: "𝔸𝕓𝕠𝕦𝕥", href: "#about" },
    { name: "ℙ𝕣𝕠𝕛𝕖𝕔𝕥", href: "#project" },
    { name: "𝕋𝕚𝕞𝕖𝕝𝕚𝕟𝕖", href: "#timeline" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (isDarkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="relative isolate px-6 lg:px-8 " id="home">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#cd1f67] to-[#9089fc] opacity-30 dark:from-[#ff80b5] dark:to-[#9089fc] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-16">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-700/10 hover:dark:ring-gray-700/20"></div>
        </div>
        <div className="text-center">
          <img
            src={me}
            alt=""
            className="mx-auto bg-transparent h-44 2xl:h-72 2xl:mt-28 hover:shadow-xl hover:shadow-gray-900 shadow-2xl dark:shadow-gray-400 contrast-150 hover:contrast-200 rounded-3xl mb-10 "
          />
          <img
            src={isDarkMode ? pyramid : dpyramid}
            alt=""
            className="mx-auto h-8 sm:h-10"
          />
          <h1 className="text-3xl 2xl:text-5xl font-bold text-bg-dark ">
            Hello{" "}
          </h1>
          <h1 className="text-4xl 2xl:text-6xl font-bold tracking-tight bg-gradient-to-r from-emerald-500 to-lime-600 bg-clip-text text-transparent">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              I'm{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Ashik
            </span>
          </h1>
          <h1 className="flex align-middle justify-center text-4xl 2xl:text-5xl">
            <span className="text-[#00c500] pr-2"> {"< "} </span>
            <TypeAnimation
              sequence={["DEVELOPER", 2000, "ENGINEER", 2000, "LEARNER", 2000]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
              className="lowercase pb-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-600 font-light bg-blue-500"
            />
            <span className="text-[#00c500] pl-2"> {"/>"} </span>
          </h1>
          <p className="mt-6 sm:hidden leading-8 text-gray-600 dark:text-gray-300">
            Final-year Engineering student, Passionate about innovation and
            technology.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white "
              download={"resume_ashik.pdf"}
              href={resume}
              target="_blank"
            >
              <span className="relative px-5 sm:px-3 2xl:px-6 py-2.5 sm:py-1 2xl:py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 font-light 2xl:font-medium">
                View Resume
              </span>
            </a>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
