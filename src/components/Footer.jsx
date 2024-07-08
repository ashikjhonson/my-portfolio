import React from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="mx-auto pt-20 w-full ">
      <div className="relative isolate overflow-hidden pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get in touch.
            </h2>
            <p className="mt-4 text-lg leading-8 max-sm:px-4 text-justify sm:text-center text-gray-300">
              I'd love to hear from you! Feel free to reach out via email for
              any inquiries or collaborations.
            </p>
            <div className="mx-auto mt-6 ">
              <a
                href="mailto:ashikjhonson@gmail.com"
                className="flex-none mx-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Email me
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff00b3] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="pt-20 pb-10">
          <span className="text-xl text-gray-300">
            <span className="text-sm">Designed and built with passion by</span>{" "}
            𝔸𝕊ℍ𝕀𝕂 ❤️
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
