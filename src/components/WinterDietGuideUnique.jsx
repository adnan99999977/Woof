
import { motion } from "framer-motion";

const dietTips = [
  {
    id: 1,
    title: "High-Protein Meals",
    description:
      "Provide warm, high-protein meals to help your pets maintain energy during cold weather.",
    icon: "🥙",
    color: "from-red-200 to-blue-300",
  },
  {
    id: 2,
    title: "Warm Hydration",
    description:
      "Offer slightly warm water or broths to keep pets hydrated and comfortable.",
    icon: "💧",
    color: "from-blue-200 to-green-300",
  },
  {
    id: 3,
    title: "Seasonal Vegetables",
    description:
      "Include winter vegetables like pumpkin or carrots for vitamins and fiber.",
    icon: "🥬",
    color: "from-green-200 to-yellow-300",
  },
  {
    id: 4,
    title: "Healthy Treats",
    description:
      "Give treats rich in omega-3 fatty acids to support skin and coat health.",
    icon: "🥩",
    color: "from-yellow-200 to-orange-300",
  },
];

const WinterDietGuideUnique = () => {
  return (
    <section className="py-16">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-[#1e293b]">
        Winter Diet Guide for Pets
      </h2>

      <div className="flex flex-col gap-16 w-[80%] lg:max-w-6xl mx-auto">
        {dietTips.map((tip, index) => (
          <motion.div
            key={tip.id}
            className={`relative flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-r ${tip.color}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 5 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
           
            <motion.div
              className="flex-shrink-0 w-32 h-32 rounded-full flex items-center justify-center text-4xl bg-white shadow-lg"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              {tip.icon}
            </motion.div>

     
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-[#1e293b]">
                {tip.title}
              </h3>
              <p className="text-gray-700 text-lg">{tip.description}</p>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WinterDietGuideUnique;
