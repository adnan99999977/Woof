import React, { useContext, useState } from "react";
import { DataContext } from "../context/JsonData";
import ServiceCard from "../components/ServiceCard";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services = () => {
  const { sharedData, isLoading } = useContext(DataContext);
  const [sortOrder, setSortOrder] = useState("default"); // default, lowToHigh, highToLow

  if (isLoading) {
    return <Loading />;
  }

  let services = [...sharedData];

  // Sort based on dropdown selection
  if (sortOrder === "lowToHigh") {
    services.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    services.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="">
      <div className="mb-40">
        <Navbar />
      </div>

      <p className="text-4xl lg:text-6xl font-bold text-center w-9/12 mx-auto border-b border-gray-300 pb-10">
        Our All Services
      </p>

      {/* Dropdown for Sorting */}
      <div className="flex justify-center my-8">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="default">Sort by Price</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 py-10 px-5 lg:px-20 gap-6">
        {services.map((item) => (
          <ServiceCard key={item.category} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
