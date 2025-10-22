import React from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaLeaf, FaRegClock, FaUserShield } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaRegClock className="text-primary text-5xl mb-5" />,
      title: "Expiry Tracking",
      desc: "Automatically track expiry dates and receive reminders before your food goes bad.",
    },
    {
      icon: <FaLeaf className="text-primary text-5xl mb-5" />,
      title: "Sustainable Living",
      desc: "Reduce waste, save money, and contribute to a greener planet by managing your groceries smartly.",
    },
    {
      icon: <FaUserShield className="text-primary text-5xl mb-5" />,
      title: "Private Inventory",
      desc: "Your food data stays safe and private — accessible only to you, ensuring full control.",
    },
    {
      icon: <FaBell className="text-primary text-5xl mb-5" />,
      title: "Smart Alerts",
      desc: "Stay ahead with timely alerts for expiring items and low-stock notifications.",
    },
  ];

  return (
    <section className="bg-base-100 py-20 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">
          Why Choose Food Tracker?
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-5"></div>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          Keep your kitchen organized, reduce waste, and track expiry dates effortlessly — all in one place.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-base-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
