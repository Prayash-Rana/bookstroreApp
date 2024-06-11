import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import list from "../../public/list.json";
import Cards from "./Cards";

const FreeBook = () => {
  const filteredData = list.filter((item) => item.category === "free");
  console.log(filteredData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-2xl mx-auto my-12 md:px-20 px-4 container">
      <h1 className="font-semibold text-xl pb-2">Free Offline Books</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum
        ipsum deleniti temporibus officia consequatur.
      </p>

      <div className="slider-container mx-auto">
        <Slider {...settings}>
         {filteredData.map((item)=> (
          <Cards key={item.id} item={item} />
         ))}
        </Slider>
      </div>
    </div>
  );
};

export default FreeBook;
