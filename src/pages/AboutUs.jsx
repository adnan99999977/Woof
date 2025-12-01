import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="min-h-screen pt-10 flex flex-col bg-gray-50">
      <Navbar />



      {/* About Section */}
      <section className="flex-1 py-24 px-6 max-w-6xl mx-auto">
           <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {["🐶", "🐾", "✨"].map((icon, index) => (
            <motion.span
              key={index}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: -600, opacity: 0.4 }}
              transition={{
                duration: 8 + index * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute text-4xl"
              style={{ left: `${20 + index * 30}%`, bottom: "-50px" }}
            >
              {icon}
            </motion.span>
          ))}
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-10 text-center"
        >
          Who We Are
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-20"
        >
          We’re a passionate pet-care brand dedicated to making every dog feel
          safe, loved, and pampered. Warm Paws Woof was created to build a cozy,
          trustworthy environment where pets and owners can connect, relax, and
          feel at home.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: "🐾",
              title: "Loving Care",
              text: "We treat your pets with warmth and affection — just like family.",
            },
            {
              icon: "🏡",
              title: "Safe Environment",
              text: "Designed to feel like a second home, ensuring comfort & safety.",
            },
            {
              icon: "✨",
              title: "Premium Experience",
              text: "Trained handlers, premium service, and a stress-free atmosphere.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-10 bg-white rounded-3xl border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all text-center"
            >
              <div className="text-4xl mb-5">{item.icon}</div>
              <h4 className="text-2xl font-semibold mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Promise Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl text-center border"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Promise
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Every dog becomes family the moment they walk through our doors. We
            promise warmth, joy, safety, and premium care — every single time.
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
