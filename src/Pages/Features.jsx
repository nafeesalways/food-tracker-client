import React from 'react';
import { FaBell, FaLeaf, FaRegClock, FaUserShield } from 'react-icons/fa';

const Features = () => {
    return (
      <section className="bg-base-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Why Choose Food Tracker?
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
          Keep your kitchen organized, reduce waste, and track expiry dates with ease.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Feature 1 */}
        <div className="p-6 rounded-2xl bg-base-200 shadow hover:shadow-lg transition">
          <FaRegClock className="text-primary text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expiry Tracking</h3>
          <p className="text-gray-500">
            Get notified before your food items expire so you never waste groceries again.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 rounded-2xl bg-base-200 shadow hover:shadow-lg transition">
          <FaLeaf className="text-primary text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Sustainable Living</h3>
          <p className="text-gray-500">
            Reduce food waste and save money while making eco-friendly choices.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 rounded-2xl bg-base-200 shadow hover:shadow-lg transition">
          <FaUserShield className="text-primary text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Private Inventory</h3>
          <p className="text-gray-500">
            Securely store your food inventory — only you can access your data.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="p-6 rounded-2xl bg-base-200 shadow hover:shadow-lg transition">
          <FaBell className="text-primary text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Alerts</h3>
          <p className="text-gray-500">
            Receive timely alerts for expiring items directly on your dashboard.
          </p>
        </div>
      </div>
    </section>
    );
};

export default Features;