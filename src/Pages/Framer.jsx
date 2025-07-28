import React from 'react';
import { motion } from 'framer-motion';

const Framer = () => {
    const currentTime = new Date().toLocaleTimeString();

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-green-50 to-white px-4 md:px-16 py-10 gap-8 mt-6">
            {/* Left Side: Title, Description, Time */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-left max-w-md"
            >
                <h1 className="text-4xl font-bold text-green-700 mb-4">System Tracking Ongoing</h1>
                <p className="text-gray-700 text-lg mb-6">
                    Monitor your nutrition, track your meals, and stay healthy with our intuitive food tracking system.
                </p>
                <p className="text-sm text-gray-500 font-mono">
                    Current Time: <span className="font-semibold text-gray-800">{currentTime}</span>
                </p>
            </motion.div>

            {/* Right Side: Animated Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="max-w-sm w-full"
            >
                <motion.img
                    src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                    alt="Healthy food"
                    className="rounded-xl w-full h-64 object-cover shadow-xl"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 120, damping: 8 }}
                />
            </motion.div>
        </div>
    );
};

export default Framer;
