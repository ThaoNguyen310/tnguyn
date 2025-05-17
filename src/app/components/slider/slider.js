"use client";
import React from "react";
import Slider from "react-slick"; 
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
       <Image src="/a1.webp" alt="" width={400} height={380}/>
      </div>
      <div>
      <Image src="/a2.webp" alt="" width={400} height={380}/>
      </div>
      <div>
      <Image src="/a3.webp" alt="" width={400} height={380}/>
      </div>
      <div>
      <Image src="/a4.webp" alt="" width={400} height={380}/>
      </div>
    </Slider>
  );
}