import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/S4XKYT78/photo-1728661631084-5f44797184e3.jpg",
      title: "Keep Your Pet Warm This Winter",
      desc: "Cozy coats, warm paws, and loving care all season long.",
      btn: "Explore Services",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co.com/jPjnyr30/premium-photo-1665952050057-49931a9c1f3b.jpg",
      title: "Cuddle Up with WarmPaws ",
      desc: "Because your furry friends deserve the best winter comfort.",
      btn: "Learn More",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co.com/MDx7pzDc/photo-1523480717984-24cba35ae1ef.jpg",
      title: "Winter Grooming & Safety Tips ",
      desc: "Stay safe, stylish, and warm with our winter pet care experts.",
      btn: "View Tips",
    },
  ];

  return (
    <div className="w-full h-[85vh] md:h-[500px] relative  border-t border-b border-gray-300">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full flex items-center justify-center text-center bg-[#fceec8]"
              style={{
                backgroundImage: slide.image ? `url(${slide.image})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 text-white px-6 md:px-12 max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6 opacity-90">
                  {slide.desc}
                </p>
                <button className="px-6 py-3 rounded-full bg-[#fceec8] hover:outline  text-gray-800 hover:px-8 font-semibold transition-all duration-200 shadow-lg">
                  {slide.btn}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
