import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router";

const Banner = () => {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
      title: "Track Your Food Freshness",
      desc: "Never miss an expiry date again. Stay fresh, stay safe, stay healthy!",
      color: "from-black/70 via-black/50 to-transparent",
    },
    {
      img: "https://i.ibb.co.com/k2bKFBzD/vegetables-herbs-basket.jpg",
      title: "Reduce Food Waste",
      desc: "FreshKeep helps you manage what’s in your fridge and pantry efficiently.",
      color: "from-green-900/70 via-green-800/50 to-transparent",
    },
    {
      img: "https://i.ibb.co.com/DPvjXRPG/people-taking-photos-food.jpg",
      title: "Smart Expiry Reminders",
      desc: "Get notified before food spoils and make better use of your groceries.",
      color: "from-blue-900/70 via-blue-800/50 to-transparent",
    },
  ];

  return (
    <section className="w-full overflow-hidden">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={5000}
        transitionTime={1000}
        showStatus={false}
        swipeable
        emulateTouch
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center"
          >
            {/* Background image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover brightness-[0.8]"
            />

            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.color}`}
            ></div>

            {/* Text content */}
            <div className="absolute z-10 text-center px-6">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
                {slide.title}
              </h2>
              <p className="mt-4 text-lg md:text-xl mb-7 text-gray-100 font-medium drop-shadow-md">
                {slide.desc}
              </p>
              <Link to={'/features'} className="mt-10 px-8 py-3 bg-white/20 hover:bg-success text-white font-semibold rounded-full backdrop-blur-md transition">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
