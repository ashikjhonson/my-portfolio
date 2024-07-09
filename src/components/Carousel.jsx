import React from "react";
import p1 from "../assets/certificates/aws.jpg";
import p2 from "../assets/certificates/code.png";
import p3 from "../assets/certificates/java.png";
import p4 from "../assets/certificates/quiz.png";
import p5 from "../assets/certificates/web.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Crsl = () => {
  return (
    <div className="w-screen sm:w-3/5 px-5 sm:px-10 mx-auto">
      <h1
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl pt-20 pb-10"
        id="certificates"
      >
        Certificates
      </h1>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <img src={p1} className="rounded-xl max-sm:h-[400px]" />
        <img src={p2} className="rounded-xl max-sm:h-[400px]" />
        <img src={p3} className="rounded-xl max-sm:h-[400px]" />
        <img src={p4} className="rounded-xl max-sm:h-[400px]" />
        <img src={p5} className="rounded-xl max-sm:h-[400px]" />
      </Carousel>
    </div>
  );
};

export default Crsl;
