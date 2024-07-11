import React from "react";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import liarrow from "../assets/li-arrow.svg";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Project", href: "#project" },
  { name: "Journey", href: "#timeline" },
  { name: "Certificates", href: "#certificates" },
  { name: "Gallery", href: "#gallery" },
];

// const navigation = [
//   { name: "ℍ𝕠𝕞𝕖", href: "#home" },
//   { name: "𝔸𝕓𝕠𝕦𝕥", href: "#about" },
//   { name: "ℙ𝕣𝕠𝕛𝕖𝕔𝕥", href: "#project" },
//   { name: "𝕁𝕠𝕦𝕣𝕟𝕖𝕪", href: "#timeline" },
//   { name: "ℂ𝕖𝕣𝕥𝕚𝕗𝕚𝕔𝕒𝕥𝕖𝕤", href: "#certificates" },
//   { name: "𝔾𝕒𝕝𝕝𝕖𝕣𝕪", href: "#gallery" },
// ];

const Navbar = () => {
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

  const handleSmoothScroll = (event, href) => {
    setMobileMenuOpen(false);
    event.preventDefault();
    const targetElement = document.querySelector(href);
    targetElement.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  // const toggleDarkMode = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg bg-black/10 border-b border-gray-700 2xl:py-2">
      <nav
        aria-label="Global"
        className="flex items-center align-middle justify-between p-6 lg:px-8 2xl:px-44"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="">
            <span className=" text-xl 2xl:text-4xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent sm:text-white">
              𝔸𝕊ℍ𝕀𝕂
            </span>
          </a>
        </div>
        <div className="flex align-middle lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6 fill-green-600" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="leading-6 font-semibold font-serif text-lg 2xl:text-2xl text-gray-900 dark:text-gray-100"
              onClick={(event) => handleSmoothScroll(event, item.href)}
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Don't delete below div :) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            className="font-serif font-semibold relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm text-gray-900 rounded-3xl group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            href="#footer"
            onClick={(event) => handleSmoothScroll(event, "#footer")}
          >
            <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-3xl group-hover:bg-opacity-0">
              Contact
            </span>
          </a>
          {/* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Green to blue
            </span>
          </button> */}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden bg-white dark:bg-[#0e1525]"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0e1525] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:ring-gray-700/10 text-white">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 text-xl">
              <span className="text-bg text-2xl pl-2">𝔸𝕊ℍ𝕀𝕂</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 "
            >
              <span className="sr-only">Close menu</span>
              <p aria-hidden="true" className=" text-bg text-2xl">
                🆇
              </p>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 ">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div className="flex items-center mx-auto " key={item.name}>
                    <img src={liarrow} alt="..." className="h-8 " />
                    <a
                      href={item.href}
                      className="-mx-3  font-serif block rounded-lg px-3 py-2 text-2xl text-bg leading-7 hover:underline underline-offset-8 hover:text-green-600"
                      // onClick={() => setMobileMenuOpen(false)}
                      onClick={(event) => handleSmoothScroll(event, item.href)}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
              <div className="py-6"></div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
