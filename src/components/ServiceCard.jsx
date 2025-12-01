import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ServiceCard = ({ item }) => {
  const { image, serviceName, rating, price, serviceId } = item;

  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative backdrop-blur-md bg-white/20 border border-white/30 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-400 hover:scale-105">
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 rounded-2xl"></div>

        {/* Image */}
        <figure className="overflow-hidden">
          <motion.img
            src={image}
            alt={serviceName}
            className="w-full h-72 object-cover rounded-2xl"
            whileHover={{ scale: 1.1, rotate: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </figure>

        {/* Card Info */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white flex flex-col gap-3">
          <h2 className="text-xl text-center font-bold drop-shadow-lg">
            {serviceName}
          </h2>

          <div className="flex items-center justify-between text-sm">
            <p className="text-yellow-400 text-2xl font-bold flex items-center gap-1">
              {rating} <span className="text-base">★</span>
            </p>
            <p className="text-white text-2xl font-semibold">${price}</p>
          </div>

          <Link to={`/serviceDetails/${serviceId}`}>
            <motion.button
              className="w-full bg-blue-500/90 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.06, y: -2 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;