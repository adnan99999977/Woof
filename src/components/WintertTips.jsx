import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, rotate: -2 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
  hover: { scale: 1.08, rotate: 1, y: -5, transition: { type: "spring", stiffness: 300, damping: 15 } },
};

const WinterTipsAnimated = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/winterTips.json")
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="py-14 max-w-6xl mx-auto relative">
      <h2 className="text-5xl font-extrabold text-center mb-14 text-[#1e293b]">
        Winter Care Tips for Pets
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {tips.map((tip) => (
          <motion.div
            key={tip.id}
            className="bg-gradient-to-b from-blue-100 via-white to-blue-50 rounded-3xl shadow-2xl p-8 text-center flex flex-col items-center relative overflow-hidden"
            variants={cardVariant}
            whileHover="hover"
          >
        
            <motion.div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.15, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            <div className="text-6xl mb-5 animate-pulse">{tip.icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-[#1e293b]">{tip.title}</h3>
            <p className="text-gray-700">{tip.description}</p>


          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WinterTipsAnimated;
