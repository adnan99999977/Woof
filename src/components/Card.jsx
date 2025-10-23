import React from "react";
import { motion } from "framer-motion";

const Card = ({ service }) => {
  const { image, serviceName, rating, price } = service;

  return (
    <motion.div
      className="p-3"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-offset="200"
    >
      <div className="card shadow-lg rounded-2xl border border-blue-100 overflow-hidden">
        <figure className="overflow-hidden rounded-t-2xl">
          <motion.img
            src={image}
            alt={serviceName}
            className="w-full h-48 object-cover"
            transition={{ duration: 0.1 }}
          />
        </figure>

        <div className="card-body text-center flex-col items-center">
          <h2 className="card-title text-lg text-[#383634]">{serviceName}</h2>

          <div className="flex items-center justify-center gap-4">
            <p className="text-yellow-500 font-semibold">
              {rating} <span className="text-xl">★</span>
            </p>
            <p className="text-gray-600 font-semibold">${price}</p>
          </div>

          <div className="card-actions justify-center mt-2">
            <motion.button
              className="btn btn-primary bg-blue-500 hover:bg-blue-600 border-none"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              View Details
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
