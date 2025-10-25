import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { toast } from "react-hot-toast";

const vets = [
  {
    id: 1,
    name: "Dr. Williams",
    specialty: "Canine Specialist",
    image: "https://i.ibb.co/6Rs7h6fg/images-4.jpg",
    experience: "10 years experience",
    rating: 4.8,
    location: "Dhaka, Bangladesh",
    consultationFee: 1200,
    availableSlots: [
      "2025-10-26 10:00",
      "2025-10-26 14:00",
      "2025-10-27 09:00",
    ],
    bio: "Dr. Williams is a board-certified small animal veterinarian with over a decade of experience in canine healthcare. He specializes in behavior management, preventive care, internal medicine, and provides comprehensive treatment plans tailored to each dog's needs. Passionate about improving pet wellness and quality of life.",
    languages: ["English"],
    qualifications: ["DVM", "MSc Veterinary Medicine"],
  },
  {
    id: 2,
    name: "Dr. John Smith",
    specialty: "Feline Expert",
    image: "https://i.ibb.co/zjJrfkF/images-3.jpg",
    experience: "8 years experience",
    rating: 4.6,
    location: "Chittagong, Bangladesh",
    consultationFee: 1000,
    availableSlots: [
      "2025-10-26 11:30",
      "2025-10-26 17:00",
      "2025-10-28 15:00",
    ],
    bio: "Dr. John Smith is an experienced feline specialist dedicated to the health and wellbeing of cats. He is skilled in internal medicine, geriatric care, and chronic disease management, providing personalized treatment plans. He is known for his gentle approach and deep understanding of feline behavior.",
    languages: ["English"],
    qualifications: ["DVM", "Cert. Feline Medicine"],
  },
  {
    id: 3,
    name: "Dr. Johnson",
    specialty: "Exotic Animals",
    image: "https://i.ibb.co/8gRszKJH/download-3.jpg",
    experience: "12 years experience",
    rating: 4.9,
    location: "Sylhet, Bangladesh",
    consultationFee: 1500,
    availableSlots: [
      "2025-10-27 09:30",
      "2025-10-27 13:00",
      "2025-10-29 10:00",
    ],
    bio: "Dr. Johnson is a highly skilled veterinarian specializing in exotic animals including birds, reptiles, and small mammals. With 12 years of experience, he provides preventive care, medical treatment, and rehabilitation for exotic pets, ensuring their health and vitality in a safe and compassionate environment.",
    languages: ["English"],
    qualifications: ["DVM", "Exotic Animal Cert."],
  },
];

export default function VetBooking() {
  const [selectedVet, setSelectedVet] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    petName: "",
    petType: "Dog",
    ownerName: "",
    phone: "",
    slot: "",
    notes: "",
  });

  const openModal = (vet) => {
    setSelectedVet(vet);
    setForm((f) => ({ ...f, slot: vet.availableSlots[0] || "" }));
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVet(null);
    setForm({
      petName: "",
      petType: "Dog",
      ownerName: "",
      phone: "",
      slot: "",
      notes: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.petName || !form.ownerName || !form.phone || !form.slot) {
      toast.error("Fill all required fields", { duration: 2500 });
      return;
    }

    toast.loading("Booking appointment...", { id: "booking-toast" });
    setTimeout(() => {
      toast.dismiss("booking-toast");
      toast.success("Appointment booked successfully!", { duration: 2500 });
      closeModal();
    }, 1400);
  };

  return (
    <div className="w-full p-6  bg-gradient-to-br from-blue-200 via-blue-50 to-blue-100">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl lg:text-6xl  font-extrabold text-center text-slate-800 mb-8"
      >
        Book a Vet for Your Pet
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-center text-slate-600 mb-10 max-w-2xl mx-auto"
      >
        Choose an expert vet, check availability, and book an appointment
        instantly.
      </motion.p>

      <div className="flex flex-col  lg:mx-30 lg:gap-6 gap-6">
        {vets.map((vet) => (
          <motion.article
            key={vet.id}
            whileHover={{ y: -5, scale: 1.03 }}
            className="flex-1  p-6  bg-white/30 backdrop-blur-md shadow-2xl border bg-transparent border-gray-300 rounded-2xl flex flex-col gap-4 transition-all duration-300"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <img
                src={vet.image}
                alt={vet.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-100 shadow-sm"
              />
              <div className="flex-1 lg:ml-10">
                <h3 className="text-xl lg:text-4xl  font-bold text-slate-800">
                  {vet.name}
                </h3>
                <p className="text-sm text-slate-500">{vet.specialty}</p>
                <div className="flex items-center gap-1 mt-2 text-sm text-amber-500 font-medium">
                  <FaStar /> <span>{vet.rating}</span>
                </div>
              </div>
            </div>
            <p className="text-md text-slate-600 lg:w-10/12 mt-2">{vet.bio}</p>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
              <div className="flex items-center lg:text-xl gap-2">
                <FaMapMarkerAlt className="text-blue-500 " />{" "}
                <span>{vet.location}</span>
              </div>
              <div className="text-slate-800 font-bold lg:text-xl">
                $ {vet.consultationFee}
              </div>
            </div>

            <button
              onClick={() => openModal(vet)}
              className="mt-5  ml-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-200 hover:scale-101"
            >
              Book Now
            </button>
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedVet && (
        <div className="fixed   bg-white/30 backdrop-blur-md shadow-2xl border border-gray-300 rounded-2xl inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={closeModal}
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl mx-auto p-6 z-50"
          >
            <header className="flex items-start gap-4">
              <img
                src={selectedVet.image}
                alt={selectedVet.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-slate-100"
              />
              <div>
                <h2 className="text-xl font-bold">{selectedVet.name}</h2>
                <p className="text-sm text-slate-500">
                  {selectedVet.specialty} • {selectedVet.experience}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  {selectedVet.location}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="ml-auto text-xl text-red-300 font-bold hover:text-red-600 transition-all duration-200 cursor-pointer"
                aria-label="Close"
              >
                ✕
              </button>
            </header>

            <form
              onSubmit={handleSubmit}
              className="mt-4 grid grid-cols-1 gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  name="petName"
                  value={form.petName}
                  onChange={handleChange}
                  placeholder="Pet name *"
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                />
                <select
                  name="petType"
                  value={form.petType}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Bird</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  name="ownerName"
                  value={form.ownerName}
                  onChange={handleChange}
                  placeholder="Your name *"
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number *"
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <label className="text-sm text-slate-600">Choose slot *</label>
              <select
                name="slot"
                value={form.slot}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
              >
                {selectedVet.availableSlots.map((s) => (
                  <option key={s} value={s}>
                    {new Date(s).toLocaleString()}
                  </option>
                ))}
              </select>

              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Notes (symptoms, behaviour)"
                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200 h-24"
              />

              <button className="ml-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold shadow-md">
                Confirm Booking • ${selectedVet.consultationFee}
              </button>
            </form>

            <section className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg bg-slate-50">
                <h4 className="text-sm text-slate-700 font-semibold">
                  Qualifications
                </h4>
                <ul className="text-sm text-slate-600 mt-2">
                  {selectedVet.qualifications}
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-slate-50">
                <h4 className="text-sm text-slate-700 font-semibold">
                  Languages
                </h4>
                <p className="text-sm text-slate-600 mt-2">
                  {selectedVet.languages}
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      )}
    </div>
  );
}
