import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import HeroSlider from "./HeroSlider";
import { FaArrowAltCircleDown } from "react-icons/fa";
import CareServices from "./CareServices";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <div className="relative  lg:h-[190vh] w-full  bg-cover bg-center ">
        <img
          data-aos="fade-up"
          src="/assets/bg.webp"
          alt="Overlay"
          className="absolute bottom-0 hidden lg:block left-1/2 transform -translate-x-1/2 w-[500px] h-[500px]"
        />
        <img
          className="w-30 hidden lg:block rotate-45 opacity-10 absolute top-40 left-120"
          src="/assets/catpow.png"
          alt=""
        />
        <img
          className="w-30 -rotate-45 opacity-10 absolute top-40 right-10"
          src="/assets/catpow.png"
          alt=""
        />
        <img
          className="w-30 -rotate-45 opacity-10 absolute top-90 left-10"
          src="/assets/catpow.png"
          alt=""
        />
        <img
          className="w-30 -rotate-45 opacity-10 absolute top-40 right-10"
          src="/assets/catpow.png"
          alt=""
        />

        <div className=" pt-50 inset-0 flex flex-col text-center px-4">
          <p className="text-2xl mb-4 text-gray-700 animate__animated animate__fadeInUp">
            Happy Pets, Happier You.
          </p>
          <div className="flex  items-center justify-center animate__animated animate__fadeInUp">
            <h1 className="text-4xl md:text-7xl font-bold text-gray-700 drop-shadow-lg ">
              Welcome to Woof's
            </h1>
            <img
              className="w-30 animate__animated animate__animate__fadeInUp"
              src="/assets/pow.png"
              alt=""
            />
          </div>
          <p className="mt-6 w-9/12 mx-auto text-lg md:text-3xl animate__animated animate__fadeInUp  text-gray-700 drop-shadow-md">
            Your cozy winter companion for pets — crafted to keep your furry
            friends warm, safe, and oh-so-comfortable during the chilly months.
          </p>
        </div>

        <div className="absolute hidden bottom-19 left-18 lg:flex flex-col gap-8">
          <div
            data-aos="fade-right"
            className="group relative bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-6 rounded-2xl w-72 h-44 flex flex-col justify-center items-center text-center 
    transition-all duration-500 hover:bg-white/30 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <div className="absolute -top-6 left-6 bg-gradient-to-r from-gray-400 to-blue-500 text-white rounded-full p-3 shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl"> 🧥</span>
            </div>
            <h3 className="font-bold text-gray-900 text-2xl mb-2 drop-shadow-sm">
              Warm Jackets
            </h3>
            <p className="text-sm text-gray-700">Cozy winter wear</p>
            <p className="text-sm text-gray-700">Fancy winter outfits</p>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="group relative bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-6 rounded-2xl w-72 h-44 flex flex-col justify-center items-center text-center 
    transition-all duration-500 hover:bg-white/30 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <div className="absolute -top-6 left-6 bg-gradient-to-r from-pink-200 to-rose-300 text-white rounded-full p-3 shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl"> 🐾</span>
            </div>
            <h3 className="font-bold text-gray-900 text-2xl mb-2 drop-shadow-sm">
              Paw Care
            </h3>
            <p className="text-sm text-gray-700">Protect soft paws</p>
            <p className="text-sm text-gray-700">Keep them warm and safe</p>
          </div>
        </div>

        <div className="absolute hidden  bottom-39 right-24 lg:flex flex-col gap-8">
          <div
            data-aos="fade-left"
            className="group relative bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-6 rounded-2xl w-72 h-44 flex flex-col justify-center items-center text-center 
    transition-all duration-500 hover:bg-white/30 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <div className="absolute -top-6 right-6 bg-gradient-to-r from-sky-200 to-blue-400 text-white rounded-full p-3 shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl"> ✂️</span>
            </div>
            <h3 className="font-bold text-gray-900 text-2xl mb-2 drop-shadow-sm">
              Grooming
            </h3>
            <p className="text-sm text-gray-700">Gentle & Loving Care</p>
            <p className="text-sm text-gray-700">Professional Grooming</p>
            <p className="text-sm text-gray-700">Cozy Boarding Spaces</p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="group relative bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-6 rounded-2xl w-72 h-44 flex flex-col justify-center items-center text-center 
    transition-all duration-500 hover:bg-white/30 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <div className="absolute -top-6 right-6 bg-gradient-to-r from-green-200 to-emerald-300 text-white rounded-full p-3 shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl"> 🏥</span>
            </div>
            <h3 className="font-bold text-gray-900 text-2xl mb-2 drop-shadow-sm">
              Vet Support
            </h3>
            <p className="text-sm text-gray-700">24/7 Care Help</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex px-6 lg:px-0 items-center justify-center py-7 text-4xl font-semibold flex-col gap-4 text-[#383634]">
          <p>Keep Your Pets Warm This Winter</p>
          <p className="animate__animated  animate__bounce animate__infinite delay-300 mt-10 ">
            <FaArrowAltCircleDown />
          </p>
        </div>
      </div>
      <HeroSlider />
      <CareServices />
    </>
  );
};

export default Hero;
