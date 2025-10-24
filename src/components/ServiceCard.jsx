import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ServiceCard = ({ item }) => {
  const { image, serviceName, rating, price,serviceId } = item;

  return (
    <>
    <motion.div
      className="p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="relative backdrop-blur-md bg-white/30 border border-white/70 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent z-10 ">
        </div>

        <figure className="overflow-hidden">
          <motion.img
            src={image}
            alt={serviceName}
            className="w-full h-72 object-cover rounded-3xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
        </figure>

        <div className="absolute bottom-0 left-0 right-0 z-20 p-5 text-white">
          <h2 className="text-xl text-center font-semibold mb-2 drop-shadow-md">
            {serviceName}
          </h2>

          <div className="flex items-center justify-between text-sm mb-3">
            <p className="text-yellow-300 text-2xl font-bold flex items-center gap-1">
              {rating} <span className="text-base">★</span>
            </p>
            <p className="text-white text-2xl font-bold">${price}</p>
          </div>

          <Link to={`/serviceDetails/${serviceId}`}>
            <motion.button
              className="w-full bg-blue-500/90 hover:bg-blue-600 text-white cursor-pointer font-medium py-2 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
    
    </>
  );
};

export default ServiceCard;
