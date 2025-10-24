import React from "react";
import { motion } from "framer-motion";
import WinterDietGuideUnique from "./WinterDietGuideUnique";
import WinterCards from "./WinterCards";


const vets = [
  {
    id: 1,
    name: "Dr. Williams",
    specialty: "Canine Specialist",
    image: "https://i.ibb.co.com/6Rs7h6fg/images-4.jpg",
    experience: "10 years experience",
  },
  {
    id: 2,
    name: "Dr. John Smith",
    specialty: "Feline Expert",
    image: "https://i.ibb.co.com/zjJrfkF/images-3.jpg",
    experience: "8 years experience",
  },
  {
    id: 3,
    name: "Dr.  Johnson",
    specialty: "Exotic Animals",
    image: "https://i.ibb.co.com/8gRszKJH/download-3.jpg",
    experience: "12 years experience",
  },
];

const VetCard = ({ vet }) => (
  <motion.div
    className="bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-3xl shadow-2xl overflow-hidden text-center p-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
  >
    <img
      src={vet.image}
      alt={vet.name}
      className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-blue-200"
    />
    <h3 className="text-xl font-bold text-[#1e293b]">{vet.name}</h3>
    <p className="text-gray-600 font-medium">{vet.specialty}</p>
    <p className="text-gray-500 text-sm mt-1">{vet.experience}</p>
  </motion.div>
);

const ExpertVets = () => {
  return (
    <div className="py-14 max-w-6xl mx-auto">
      <h2 className="lg:text-5xl text-3xl w-10/12 mx-auto font-extrabold text-center mb-12 text-[#1e293b]">
        Meet Our Expert Vets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {vets.map((vet) => (
          <VetCard key={vet.id} vet={vet} />
        ))}
      </div>
      <div className="mt-10 ">
        <WinterCards/>
      </div>
      <div className="">
        <WinterDietGuideUnique/>
      </div>
    </div>
  );
};

export default ExpertVets;
