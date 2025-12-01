import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setShowAlert(true); // show alert
    setTimeout(() => setShowAlert(false), 2000); 
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="mt-20 flex flex-col bg-gray-50 relative">
      <Navbar />

      {/* Success Alert */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50"
          >
             Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center text-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6"
        >
          <h1 className="text-5xl font-bold drop-shadow-lg">Contact Us</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
            We'd love to hear from you! Reach out for any inquiries or support.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="flex-1 py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 rounded-3xl shadow-xl flex flex-col gap-6 border"
        >
          <h2 className="text-3xl font-bold text-gray-800">Send us a message</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 justify-center"
        >
          <h2 className="text-3xl font-bold text-gray-800">Get in touch</h2>
          <p className="text-gray-600 leading-relaxed">
            You can reach us through email or follow us on our social platforms. We aim to respond within 24 hours.
          </p>
          <div className="flex flex-col gap-4 text-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-2xl">📧</span>
              <p>petcare@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-2xl">📞</span>
              <p>+8801 234 567 890</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-2xl">📍</span>
              <p>123 Pet Street, Pet City, Dhaka, Bangladesh</p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
