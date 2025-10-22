import React, { useEffect, useState } from "react";
import Card from "./Card";
import WinterTipsAnimated from "./WintertTips";
import VetCard from "./VetCard";
import Vidio from "./Vidio";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeIn" } },
  hover: { scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" },
};

const CareServices = () => {
  const [sharedData, setSharedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setSharedData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading || !sharedData) {
    return <p className="text-center py-10 text-lg">Loading...</p>;
  }

  const services = sharedData; // assuming sharedData is an array
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#383634]">
        Our Care Services
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {displayedServices.map((service, index) => (
          <motion.div key={index} variants={cardVariants} whileHover="hover">
            <Card service={service} />
          </motion.div>
        ))}
      </motion.div>

      {services.length > 6 && (
        <div className="flex justify-center mt-10">
          <motion.button
            className="btn btn-outline btn-primary px-8 py-2"
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {showAll ? "Show Less" : "See All"}
          </motion.button>
        </div>
      )}

      <WinterTipsAnimated />
      <Vidio />
      <VetCard />
    </div>
  );
};

export default CareServices;
