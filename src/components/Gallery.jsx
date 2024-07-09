import React from "react";

import th1 from "../assets/gallery/th1.jpg";
import th2 from "../assets/gallery/th2.jpg";
import th3 from "../assets/gallery/th3.jpg";
import c1 from "../assets/gallery/c1.jpg";
import c2 from "../assets/gallery/c2.jpg";
import c3 from "../assets/gallery/c3.jpg";
import cl1 from "../assets/gallery/cl1.jpg";
import cl5 from "../assets/gallery/cl5.jpg";
import cl6 from "../assets/gallery/cl6.jpg";
import e1 from "../assets/gallery/e1.jpg";
import e3 from "../assets/gallery/e3.jpeg";
import p1 from "../assets/gallery/p1.jpg";

const Gallery = () => {
  const images = [
    [c1, th1, c3],
    [th2, e1, c2],
    [cl6, cl5, e3],
    [cl1, p1, th3],
  ];
  return (
    <div className="relative isolate pt-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:from-[#ff80b5] dark:to-[#9089fc]"
        />
      </div>
      <h1
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl pt-20 pb-10"
        id="gallery"
      >
        Showcase Gallery
      </h1>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 px-5 sm:px-60">
        {images.map((image) => {
          return <ImgDiv ims={image} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;

const ImgDiv = ({ ims }) => {
  return (
    <div class="grid gap-4">
      {ims.map((im) => {
        return <img className="h-auto max-w-full rounded-lg" src={im} alt="" />;
      })}
    </div>
  );
};
