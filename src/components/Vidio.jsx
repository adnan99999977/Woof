import React from "react";

export default function HeroSection() {
  return (
    <section className="relative h-[560px] lg:h-screen mx-auto rounded-xl lg:rounded-none w-[98%] lg:w-full flex items-center justify-center overflow-hidden">
  
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover  "
      >
        <source src="/assets/vidio.mp4" type="video/mp4" />
      </video>

 
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10  text-center flex flex-col items-center justify-center gap-9 text-white px-4 max-w-2xl">
        <p className="uppercase tracking-widest text-sm mb-2  flex items-center justify-center gap-2">
           Get Started
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Give Your Pet the Care They Deserve
        </h1>
        <p className="text-base md:text-lg mb-6">
         Your pets bring love, joy, and comfort into your life — they deserve the best care in return. From healthy nutrition to regular checkups and lots of affection, every little effort helps them live a happier, healthier life.
        </p>
        <button className=" text-black btn hover:px-10 font-semibold py-3 px-8 rounded-full transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}
