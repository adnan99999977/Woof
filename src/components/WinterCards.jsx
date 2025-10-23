import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StackedCards = () => {
  const cardData = [
    { id: 1, title: "Winter Sweaters", img: "/assets/jacket.jpg" },
    { id: 2, title: "Pet Boots", img: "/assets/doctor.jpg" },
    { id: 3, title: "Warm Blankets", img: "/assets/blanket.jpg" },
    { id: 4, title: "Winter Hats", img: "/assets/pet.jpg" },
    { id: 5, title: "Healthy Treats", img: "/assets/food.jpg" },
  ];

  const [cards, setCards] = useState(cardData);

  const handleSlide = (id) => {
    // move the first card to the end
    const updated = [...cards];
    const firstCard = updated.shift();
    updated.push(firstCard);
    setCards(updated);
  };

  return (
    <div className="w-8/12 mx-auto  gap-30 py-10 mt-20 flex justify-center items-center ">
      <div className="text-center w-[70%] mb-10 space-y-">
        <h2 className="text-6xl font-bold text-gray-800 mb-2">Top Highlights</h2>
        <p className="text-gray-600 text-xl mb-14 mt-8 ">
          Discover our most loved winter essentials.
        </p>
        <p className="text-md text-blue-500 font-bold italic animate__animated animate__bounce animate__infinite"
>
         * Press on card text and Drag the card to reveal more highlights.*
        </p>
      </div>
      <div className="relative w-full max-w-6xl h-[400px]">
        <AnimatePresence>
          {cards.map((card, index) => {
            const isTop = index === 0;

            return (
              <motion.div
                key={card.id}
                className="absolute w-64 rounded-2xl shadow-lg bg-white cursor-pointer overflow-hidden"
                style={{
                  top: `${index * 20}px`,
                  left: `${index * 20}px`,
                  zIndex: cards.length - index,
                }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 150 }}
                dragElastic={0.2}
                onDragEnd={() => handleSlide(card.id)}
                whileHover={{
                  scale: isTop ? 1.05 : 1,
                  y: isTop ? -10 : index * 20,
                  transition: { type: "spring", stiffness: 200, damping: 20 },
                }}
                initial={{ x: 0, y: index * 20, scale: 1 }}
                animate={{ x: 0, y: index * 20, scale: 1 }}
                exit={{ x: 200, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StackedCards;
