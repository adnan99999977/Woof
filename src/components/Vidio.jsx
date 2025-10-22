import React from "react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/vidio.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <p className="uppercase tracking-widest text-sm mb-2 flex items-center justify-center gap-2">
           Get Started
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Give Your Pet the Care They Deserve
        </h1>
        <p className="text-base md:text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className=" text-black btn hover:px-10 font-semibold py-3 px-8 rounded-full transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}
