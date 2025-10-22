import React from "react";
import { motion } from "framer-motion";
import { FaCamera, FaBell, FaChartPie } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaCamera className="text-4xl text-green-600 mb-4" />,
      title: "Add Your Food Items",
      desc: "Easily add food items manually or by scanning barcodes. Store expiry dates and quantities for better tracking.",
    },
    {
      icon: <FaBell className="text-4xl text-green-600 mb-4" />,
      title: "Get Expiry Reminders",
      desc: "Receive smart notifications before your food expires. Reduce waste and plan your meals efficiently.",
    },
    {
      icon: <FaChartPie className="text-4xl text-green-600 mb-4" />,
      title: "Track & Analyze",
      desc: "View insights on your food usage, nutrition stats, and total savings. Stay organized and healthy effortlessly.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-2">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          FreshKeep helps you reduce waste, save money, and make smarter food
          choices in just three simple steps.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-10 text-center">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition"
          >
            <div className="flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold text-green-700 mt-4">
              {step.title}
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="text-center mt-16"
      >
      </motion.div>
    </section>
  );
};

export default HowItWorks;
