import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <>
      <Navbar />

      <section className="mt-10 bg-gray-50 py-24 px-6 flex items-center justify-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side — Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full"
          >
            <div className="w-full h-[420px] rounded-3xl overflow-hidden shadow-xl border bg-white hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1700&auto=format&fit=crop"
                alt="Warm Paws Woof"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side — Text Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Story & Mission
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-600 leading-relaxed text-lg mb-6"
            >
              Warm Paws Woof started with a simple belief — every dog deserves a cozy,
              loving, and safe place where they can feel at home. We created a brand that
              blends comfort, trust, and modern pet care to support both pets and owners.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-gray-600 leading-relaxed text-lg mb-8"
            >
              Our mission is to provide top-quality care with a warm heart and a gentle
              touch. From environment to service, everything is designed to make your furry
              friend happier, calmer, and more connected.
            </motion.p>

            <div className="space-y-4 text-lg">
              {[
                { icon: "🐾", text: "Comfort-first care philosophy" },
                { icon: "🏆", text: "Quality & safety-driven environment" },
                { icon: "🤍", text: "Commitment to loving companionship" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.2 }}
                  className="flex items-center gap-3"
                >
                
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}