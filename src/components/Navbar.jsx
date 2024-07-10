import React from "react";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "ℍ𝕠𝕞𝕖", href: "#home" },
  { name: "𝔸𝕓𝕠𝕦𝕥", href: "#about" },
  { name: "ℙ𝕣𝕠𝕛𝕖𝕔𝕥", href: "#project" },
  { name: "𝕁𝕠𝕦𝕣𝕟𝕖𝕪", href: "#timeline" },
  { name: "ℂ𝕖𝕣𝕥𝕚𝕗𝕚𝕔𝕒𝕥𝕖𝕤", href: "#certificates" },
  { name: "𝔾𝕒𝕝𝕝𝕖𝕣𝕪", href: "#gallery" },
];

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
            <span className=" text-xl 2xl:text-4xl text-white">𝔸𝕊ℍ𝕀𝕂</span>
          </a>
        </div>
        <div className="flex align-middle lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="leading-6 text-lg 2xl:text-2xl text-gray-900 dark:text-gray-100"
              onClick={(event) => handleSmoothScroll(event, item.href)}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* Don't delete above div :)*/}
          {/* <a
          href="#"
          className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
          onClick={toggleDarkMode}
        >
          <img
            src={isDarkMode ? owl : theme}
            alt=""
            className="h-8 sm:h-10 lg:mr-10"
          />
        </a> */}
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
              <span className="">𝔸𝕊ℍ𝕀𝕂</span>
              {/* <img alt="" src={logo} className="h-8 w-auto" /> */}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 "
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:underline underline-offset-8 hover:text-green-600"
                    // onClick={() => setMobileMenuOpen(false)}
                    onClick={(event) => handleSmoothScroll(event, item.href)}
                  >
                    {item.name}
                  </a>
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
