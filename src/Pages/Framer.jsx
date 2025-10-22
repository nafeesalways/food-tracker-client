import React from "react";
import { motion } from "framer-motion";
import { FaAppleAlt, FaHeartbeat, FaChartLine } from "react-icons/fa";

const Framer = () => {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <section className="flex mt-10 flex-col-reverse md:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-green-100 via-white to-green-50 px-6 md:px-20 py-16 gap-10">
      
      {/* Left Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 text-left space-y-6"
      >
        <h1 className="text-5xl font-extrabold text-green-700 leading-tight">
          Stay On Track With <br />
          <span className="text-green-500">Smart Food Monitoring</span>
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          Track your daily meals, monitor nutritional values, and receive smart 
          insights to help you stay fit and waste less food.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-green-700"
          >
            <FaAppleAlt className="text-3xl mb-2" />
            <p className="font-semibold">Nutrition</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-green-700"
          >
            <FaHeartbeat className="text-3xl mb-2" />
            <p className="font-semibold">Wellness</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-green-700"
          >
            <FaChartLine className="text-3xl mb-2" />
            <p className="font-semibold">Progress</p>
          </motion.div>
        </div>

        {/* Time + CTA */}
        <div className="mt-10">
          <p className="text-sm text-gray-600 font-mono">
            Current Time:{" "}
            <span className="font-semibold text-gray-900">{currentTime}</span>
          </p>
        </div>
      </motion.div>

      {/* Right Section (Image Animation) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex-1 flex justify-center"
      >
        <motion.img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Healthy Food"
          className="rounded-2xl w-full max-w-md h-[380px] object-cover shadow-2xl"
          whileHover={{ scale: 1.05, rotate: 1.5 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
        />
      </motion.div>
    </section>
  );
};

export default Framer;
