import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WinterTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/winterTips.json")
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="py-20 px-6 lg:px-10 min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex flex-col items-center">
     
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl lg:text-6xl font-extrabold text-center text-slate-800 mb-4"
      >
        Winter Care Tips for Pets
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-blue-700 font-medium text-center mb-12 italic"
      >
        Keep your furry friends warm and happy this season ❄️
      </motion.p>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {tips.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/70 backdrop-blur-md border border-blue-100 shadow-sm p-8 text-center hover:shadow-lg transition-transform duration-300 hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold mb-3 text-slate-800">
              {tip.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">
              {tip.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WinterTips;
