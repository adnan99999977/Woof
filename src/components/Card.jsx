import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Card = ({ service }) => {
  const { image, serviceName, rating, price, serviceId } = service;

  return (
    <motion.div
      className="p-3 w-full sm:w-1/2 md:w-1/3 lg:w-full mx-auto"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-offset="200"
    >
      <div className="card shadow-lg rounded-2xl border border-blue-100 overflow-hidden bg-white">
        <figure className="overflow-hidden rounded-t-2xl">
          <motion.img
            src={image}
            alt={serviceName}
            className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover"
            transition={{ duration: 0.1 }}
          />
        </figure>

        <div className="card-body text-center flex-col items-center p-4">
          <h2 className="card-title text-base sm:text-lg md:text-xl text-[#383634]">
            {serviceName}
          </h2>

          <div className="flex items-center justify-center gap-4 mt-2">
            <p className="text-yellow-500 font-semibold text-sm sm:text-base">
              {rating} <span className="text-lg sm:text-xl">★</span>
            </p>
            <p className="text-gray-600 font-semibold text-sm sm:text-base">
              ${price}
            </p>
          </div>

          <Link
            to={`/serviceDetails/${serviceId}`}
            className="card-actions justify-center mt-3"
          >
            <motion.button
              className="btn btn-primary bg-blue-500 hover:bg-blue-600 border-none text-sm sm:text-base px-4 sm:px-6 py-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
