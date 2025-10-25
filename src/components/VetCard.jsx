import { motion } from "framer-motion";
import WinterDietGuideUnique from "./WinterDietGuideUnique";
import WinterCards from "./WinterCards";
import { Link } from "react-router";

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
    name: "Dr. Johnson",
    specialty: "Exotic Animals",
    image: "https://i.ibb.co.com/8gRszKJH/download-3.jpg",
    experience: "12 years experience",
  },
];

const ExpertVets = () => {
  return (
    <div className="lg:py-14 py-13 pt-8 mt-30 lg:w-[1100px] mx-auto px-10  backdrop-blur-md shadow-2xl bg-transparent rounded-2xl">
      <h2 className="lg:text-5xl text-3xl font-extrabold text-center mb-4 text-gray-900">
        Meet Our Expert Vets
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Our team of experienced veterinarians provides professional care for all
        types of pets. Check their expertise and book an appointment today.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {vets.map((vet) => (
          <motion.div
            key={vet.id}
            className="bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-3xl shadow-2xl overflow-hidden text-center p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="lg:w-32 lg:h-32 w-20 h-20 object-cover rounded-full mx-auto mb-4 border-4 border-blue-200"
            />
            <h3 className="text-xl font-bold text-gray-900">{vet.name}</h3>
            <p className="text-gray-600 font-medium">{vet.specialty}</p>
            <p className="text-gray-500 text-sm mt-1">{vet.experience}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/vetbooking">
          <motion.div
            className="inline-block bg-blue-500/90 hover:bg-blue-600 text-white cursor-pointer font-medium py-3 px-6 rounded-lg backdrop-blur-sm"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0],
              boxShadow: [
                "0px 0px 10px rgba(59, 130, 246, 0.4)",
                "0px 0px 20px rgba(59, 130, 246, 0.6)",
                "0px 0px 10px rgba(59, 130, 246, 0.4)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.8)",
            }}
          >
            View Details
          </motion.div>
        </Link>
      </div>

      <div className="mt-10">
        <WinterCards />
      </div>
      <div className="mt-10">
        <WinterDietGuideUnique />
      </div>
    </div>
  );
};

export default ExpertVets;
