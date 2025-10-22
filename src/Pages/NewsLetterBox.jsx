import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";

const NewsLetterBox = () => {
   const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter a valid email.");
    toast.success("✅ Thanks for subscribing!", { duration: 1500 });
    setEmail("");
  };

  const faqs = [
    {
      q: "How does the Food Tracker work?",
      a: "Simply log your meals, snacks, and drinks. The app automatically tracks calories, nutrients, and expiry dates of stored foods.",
    },
    {
      q: "Can I track homemade meals?",
      a: "Yes! Add ingredients manually or scan barcodes — the tracker calculates total nutritional value instantly.",
    },
    {
      q: "How do I know if my food is about to expire?",
      a: "Your dashboard shows expiry alerts, and you’ll receive notifications when items are nearing expiration.",
    },
    {
      q: "Is my food data private?",
      a: "Absolutely. All your data is securely stored using end-to-end encryption — only you can access your records.",
    },
    {
      q: "Can I share my food logs with a nutritionist?",
      a: "Yes, you can export your weekly reports or share a secure view link with your dietitian or trainer.",
    },
    {
      q: "Can I set reminders for meal times?",
      a: "Yes, you can schedule meal and snack reminders, along with expiry alerts for stored foods.",
    },
    {
      q: "Can a user add a note about food",
      a: "Yes, Logged in user can add note and give feedback.",
    },
  ];
  return (
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-sm">
          <span className="text-green-600">Get Answers</span> & Stay Nourished
        </h2>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Explore how to eat smarter, waste less, and track your food with ease.
          Learn more and stay connected with FoodTrack.
        </p>
      </motion.div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start h-full">
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-green-100 p-8"
        >
          <h3 className="text-3xl font-bold mb-8 text-green-700 text-center lg:text-left">
             ❓ Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-green-50 border border-green-100 rounded-xl"
              >
                <input type="checkbox" />
                <div className="collapse-title text-lg font-semibold text-green-700">
                  {item.q}
                </div>
                <div className="collapse-content text-gray-700 leading-relaxed">
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="rounded-2xl shadow-lg p-12 h-full  border-success/25 border"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl text-green-700 mb-4 font-bold text-center">
            Subscribe for Healthy Food Tips
          </h3>

          <p className="text-lg text-center text-gray-400 mb-8">
            Get smart meal ideas, storage hacks, and nutrition updates delivered
            to your inbox every week.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
            <motion.button
              type="submit"
              className="px-6 py-3 btn text-sm font-semibold bg-white text-green-700 rounded-xl shadow hover:bg-green-700 hover:text-white transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
              
            </motion.button>
          </form>
                  {/* Illustration */}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://i.ibb.co.com/Qj90Rjfm/meat-sadj-vegetables-greens-spices-top-view.jpg"
              alt="Healthy food bowl" 
              className="rounded-2xl shadow-2xl border border-white/40 object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsLetterBox;