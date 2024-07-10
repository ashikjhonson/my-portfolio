import React from "react";
import p1 from "../assets/certificates/aws.jpeg";
import p2 from "../assets/certificates/code.jpg";
import p3 from "../assets/certificates/java.jpeg";
import p4 from "../assets/certificates/quiz.jpeg";
import p5 from "../assets/certificates/web.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Crsl = () => {
  return (
    <div className="w-screen sm:w-3/5 2xl:w-4/5 px-5 sm:px-10 2xl:px-32 mx-auto">
      <h1
        className="text-3xl 2xl:text-5xl font-bold tracking-tight text-white sm:text-4xl pt-20 pb-10 2xl:pt-44"
        id="certificates"
      >
        Certificates
      </h1>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <img src={p1} className="rounded-xl max-sm:h-[400px]" alt="..." />
        <img src={p2} className="rounded-xl max-sm:h-[400px]" alt="..." />
        <img src={p3} className="rounded-xl max-sm:h-[400px]" alt="..." />
        <img src={p4} className="rounded-xl max-sm:h-[400px]" alt="..." />
        <img src={p5} className="rounded-xl max-sm:h-[400px]" alt="..." />
      </Carousel>
    </div>
  );
};

export default Crsl;
