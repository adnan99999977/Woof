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
        "https://wallpapercave.com/wp/wp9015734.jpg",
      title: "Keep Your Pet Warm This Winter",
      desc: "Cozy coats, warm paws, and loving care all season long.",
      btn: "Explore Services",
    },
    {
      id: 2,
      image:
        "https://wallpapercave.com/wp/wp9015508.jpg",
      title: "Cuddle Up with WarmPaws ",
      desc: "Because your furry friends deserve the best winter comfort.",
      btn: "Learn More",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1719464454959-9cf304ef4774?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZyUyMGdyb29taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500https://media.gettyimages.com/id/2207471259/photo/dog-being-at-a-salon.jpg?s=612x612&w=0&k=20&c=9lR8DHFK3BbkTqXdJyajbEOXky7ht6ocz1vYhW3CRFw=",
      title: "Winter Grooming & Safety Tips ",
      desc: "Stay safe, stylish, and warm with our winter pet care experts.",
      btn: "View Tips",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1626544379375-b76b13591c46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNhdCUyMGVhdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500https://images.unsplash.com/photo-1610080556749-7c63c435a8cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0JTIwZWF0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      title: "Healthy Winter Diet for Pets",
      desc: "Ensure your pets stay nourished and energetic with our seasonal diet tips.",
      btn: "View Tips",
    },
  ];

  return (
    <div className="w-full h-[640px] md:h-[500px] relative ">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full  flex items-center justify-center text-center bg-[#fceec8]"
              style={{
                backgroundImage: slide.image ? `url(${slide.image})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                width: " 100%",
                height: "100vh",
              }}
            >
              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 text-white max-w-2xl">
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
