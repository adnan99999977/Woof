import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import HeroSlider from "./HeroSlider";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Services from "../pages/Services";
import CareServices from "./CareServices";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <div className="relative bg-[#cdedfa] h-[190vh] w-full bg-[url('/assets/bgg.jpg')]  bg-cover bg-center ">
        <img
          data-aos="fade-up"
          src="/assets/bg.webp"
          alt="Overlay"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px]"
        />

        <div className=" pt-50 inset-0 flex flex-col text-center px-4">
          <p className="text-2xl mb-4 text-gray-700 animate__animated animate__fadeInDown">
            Happy Pets, Happier You.
          </p>
          <h1 className="text-4xl md:text-7xl font-bold text-gray-700 drop-shadow-lg animate__animated animate__fadeInLeftBig">
            Welcome to WarmPaws
          </h1>
          <p className="mt-6 w-9/12 mx-auto text-lg md:text-3xl animate__animated animate__fadeInUp  text-gray-700 drop-shadow-md">
            Your cozy winter companion for pets — crafted to keep your furry
            friends warm, safe, and oh-so-comfortable during the chilly months.
          </p>
        </div>

        {/* 🔹 Left side cards */}
        <div className="absolute bottom-20 left-30 flex flex-col gap-6">
          <div
            data-aos="fade-right"
            className="bg-white/80 backdrop-blur-md shadow-lg p-4 rounded-xl w-55 h-40 flex justify-center item-center flex-col outline text-center"
          >
            <h3 className="font-semibold text-gray-800 text-2xl mb-2">
              Warm Jackets
            </h3>
            <p className="text-sm text-gray-600">Cozy winter wear</p>
            <p className="text-sm text-gray-600">Fancy winter outfits</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="bg-white/80 backdrop-blur-md shadow-lg p-4 rounded-xl w-55 h-40 flex justify-center item-center flex-col outline text-center"
          >
            <h3 className="font-semibold text-gray-800 text-2xl mb-2">
              Paw Care
            </h3>
            <p className="text-sm text-gray-600">Protect soft paws</p>
            <p className="text-sm text-gray-600">Protect your pet's paws</p>
            <p className="text-sm text-gray-600">Keep them warm and safe</p>
          </div>
        </div>

        {/* 🔹 Right side cards */}
        <div className="absolute bottom-40 right-30 flex flex-col gap-6">
          <div
            data-aos="fade-left"
            className="bg-white/80 backdrop-blur-md shadow-lg p-4 rounded-xl w-55 h-40 flex justify-center item-center flex-col outline text-center"
          >
            <h3 className="font-semibold text-gray-800 text-2xl mb-2 ">
              Grooming
            </h3>
            <p className="text-sm text-gray-600"> Gentle & Loving Care</p>
            <p className="text-sm text-gray-600">Professional Grooming</p>
            <p className="text-sm text-gray-600">Cozy Boarding Spaces</p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="bg-white/80 backdrop-blur-md shadow-lg p-4 rounded-xl w-55 h-40 flex justify-center item-center flex-col outline text-center"
          >
            <h3 className="font-semibold text-gray-800 text-2xl mb-2">
              Vet Support
            </h3>
            <p className="text-sm text-gray-600">24/7 care help</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-center py-7 text-4xl font-semibold flex-col gap-4 text-[#383634]">
          <p>Keep Your Pets Warm This Winter</p>
          <p className= "animate__animated  animate__bounce animate__infinite delay-300 mt-10 ">
            <FaArrowAltCircleDown />
          </p>
        </div>
      </div>
        <HeroSlider />
     <CareServices/>
    </>
  );
};

export default Hero;
