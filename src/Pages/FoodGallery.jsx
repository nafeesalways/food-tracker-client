"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FoodGallery = () => {
  const foods = [
    {
      category: "Fruits & Berries",
      img: "https://i.ibb.co.com/mdLbdRz/various-fresh-summer-berries-blueberries-red-currant-strawberries-blackberries-top-view.jpg",
    },
    {
      category: "Vegetables",
      img: "https://i.ibb.co.com/gLQqLPc5/assortment-vegetables-green-herbs-market-vegetables-basket.jpg",
    },
    {
      category: "Dairy & Beverages",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=60",
    },
    {
      category: "Healthy Meals",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=60",
    },
    {
      category: "Snacks & Bakery",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=60",
    },
    {
      category: "Seafood & Protein",
      img: "https://i.ibb.co.com/Z1k2jSds/real-food-pyramid-arrangement.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 bg-base-100">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-success">
          Our Food Gallery
        </h2>
        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
          Explore a variety of fresh, healthy, and delicious food categories that keep your kitchen and diet balanced.
        </p>
      </motion.div>

      {/* Gallery Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={25}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {foods.map((food, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative"
            >
              <img
                src={food.img}
                alt={food.category}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">
                  {food.category}
                </h3>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FoodGallery;
