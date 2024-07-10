import React, { useState } from "react";
import Modal from "react-modal";

import th1 from "../assets/gallery/th1.jpeg";
import th2 from "../assets/gallery/th2.jpg";
import th3 from "../assets/gallery/th3.jpeg";
import c1 from "../assets/gallery/c1.jpg";
import c2 from "../assets/gallery/c2.jpg";
import c3 from "../assets/gallery/c3.jpeg";
import cl1 from "../assets/gallery/cl1.jpg";
import cl5 from "../assets/gallery/cl5.jpeg";
import cl6 from "../assets/gallery/cl6.jpeg";
import e1 from "../assets/gallery/e1.jpeg";
import e3 from "../assets/gallery/e3.jpeg";
import p1 from "../assets/gallery/p1.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const images = [
    [c1, th1, c3],
    [th2, e1, c2],
    [cl6, cl5, e3],
    [cl1, p1, th3],
  ];

  return (
    <div className="relative isolate pt-20 2xl:px-20">
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
      <h2
        className="text-3xl sm:text-4xl 2xl:text-5xl sm:pb-5 font-bold w-fit mx-auto pt-20 pb-10 2xl:pt-44 tracking-tight bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent"
        id="gallery"
      >
        Showcase
        <br />
        <span className="text-white">Gallery</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 px-5 sm:px-60">
        {images.map((image, index) => {
          return <ImgDiv ims={image} key={index} openModal={openModal} />;
        })}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        contentLabel="Image View"
        className="modal w-4/5 sm:w-fit sm:mt-10"
        overlayClassName="overlay"
        ariaHideApp={false}
      >
        {/* <button onClick={closeModal} className="close-button"></button> */}
        {selectedImage && (
          <img
            className="h-auto max-w-full sm:h-[400px] object-fill rounded-lg mx-auto"
            src={selectedImage}
            alt="Enlarged View"
            onClick={closeModal}
          />
        )}
      </Modal>
    </div>
  );
};

const ImgDiv = ({ ims, openModal }) => {
  return (
    <div className="grid gap-4">
      {ims.map((im) => {
        return (
          <img
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={im}
            alt=""
            key={im}
            onClick={() => openModal(im)}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
