import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "@/assets/assets";

const sliderData = [
  {
    id: 1,
    title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
    offer: "Limited Time Offer 30% Off",
    buttonText1: "Buy now",
    buttonText2: "Find more",
    imgSrc: assets.header_headphone_image,
  },
  {
    id: 2,
    title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
    offer: "Hurry up only few lefts!",
    buttonText1: "Shop Now",
    buttonText2: "Explore Deals",
    imgSrc: assets.header_playstation_image,
  },
  {
    id: 3,
    title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
    offer: "Exclusive Deal 40% Off",
    buttonText1: "Order Now",
    buttonText2: "Learn More",
    imgSrc: assets.header_macbook_image,
  },
];

const HeaderSlider = () => {
  return (
    <div className="w-full py-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        className="w-full"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#E6E9F2] px-6 md:px-14 rounded-xl h-[500px]">
            <div className="md:w-1/2 w-full mt-6 md:mt-0 flex flex-col justify-center h-full">
              <p className="text-orange-600 text-sm md:text-base pb-2">
                {slide.offer}
              </p>
              <h1 className="text-2xl md:text-4xl font-semibold max-w-xl">
                {slide.title}
              </h1>
              <div className="flex items-center mt-6 gap-4 flex-wrap">
                <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-2.5 rounded-full text-sm font-medium transition">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 text-sm font-medium">
                  {slide.buttonText2}
                  <Image
                    className="group-hover:translate-x-1 transition-transform"
                    src={assets.arrow_icon}
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
        
            <div className="md:w-1/2 w-full flex justify-center h-full items-center">
              <Image
                src={slide.imgSrc}
                alt={slide.title}
                className="w-48 md:w-72 object-contain h-[300px]"
              />
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
