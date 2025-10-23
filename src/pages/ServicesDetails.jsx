import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { MdArrowBackIosNew } from "react-icons/md";
import ScrollToTop from "../components/ScrollToTop";
import { DataContext } from "../context/JsonData";

const ServicesDetails = () => {
  const { isLoading, sharedData } = useContext(DataContext);
  const { id } = useParams();

  if (isLoading) return <p>Loading...</p>;

  // Find the service based on URL param
  const service = sharedData.find((data) => data.serviceId === Number(id));

  if (!service) return <p>Service not found</p>;

  const {
    category,
    image,
    providerEmail,
    providerName,
    rating,
    serviceId,
    serviceName,
    slotsAvailable,
    price,
    description,
  } = service;

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="py-10 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
        <main className="max-w-6xl mx-auto py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900"
            >
              <MdArrowBackIosNew size={25} />
              <span className="text-2xl font-bold"> Back to Services</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="md:col-span-1"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  alt={serviceName}
                  src={image}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-4 bg-white/70 backdrop-blur-md border border-white/50 p-4 rounded-xl shadow-inner"
              >
                <p className="text-sm text-gray-600">Service ID</p>
                <p className="font-mono text-sm font-semibold text-gray-700">
                  #{serviceId}
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Details + form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="md:col-span-2"
            >
              <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
                  {serviceName}
                </h1>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                    {category}
                  </span>
                  <span className="text-sm text-yellow-600 font-semibold">
                    ⭐ {rating}
                  </span>
                  <span className="ml-auto text-2xl font-extrabold text-blue-700">
                    ${price}
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 bg-blue-50/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <p className="text-md  text-gray-500">Provider</p>
                    <p className="font-semibold">{providerName}</p>
                    <a
                      href={`mailto:${providerEmail}`}
                      className="text-sm text-blue-600 underline"
                    >
                      {providerEmail}
                    </a>
                  </div>

                  <div className="p-4 bg-blue-50/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <p className="text-md pb-3 text-gray-500">Slots Available</p>
                    <p className="font-semibold">{slotsAvailable}</p>
                  </div>

                  <div className="p-4 bg-blue-50/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <p className="text-md pb-3 text-gray-500">Category / ID</p>
                    <p className="font-semibold">
                      {category} • #{serviceId}
                    </p>
                  </div>
                </div>

                {/* Book Service form */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="mt-4 border-t border-gray-200 pt-6"
                >
                  <h2 className="text-2xl font-semibold mb-3">Book Service:</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Booking successful!");
                      e.target.reset();
                    }}
                  >
                    <div className="flex gap-4">
                      <input
                        name="name"
                        placeholder="Your name"
                        className="p-3 w-[40%] rounded-lg border border-gray-300 col-span-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        required
                      />
                      <input
                        name="email"
                        placeholder="Your email"
                        type="email"
                        className="p-3 w-[60%] rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                        required
                      />
                    </div>
                    <div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="mt-2 cursor-pointer w-full bg-blue-300 text-gray-800 px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition hover:text-white"
                      >
                        Book Now
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ServicesDetails;
