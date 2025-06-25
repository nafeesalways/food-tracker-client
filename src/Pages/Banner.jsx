import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6 rounded-2xl shadow-xl overflow-hidden">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={5000}
        showStatus={false}
      >
        <div className="relative h-64 md:h-96 bg-green-100 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-green-800">Track Your Food Freshness</h2>
            <p className="mt-4 text-lg text-green-700">Never miss an expiry date again. Stay fresh, stay safe and healthy.!</p>
          </div>
        </div>

        <div className="relative h-64 md:h-96 bg-yellow-100 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-800">Reduce Food Waste</h2>
            <p className="mt-4 text-lg text-yellow-700">FreshKeep helps you manage what’s in your fridge and pantry.</p>
          </div>
        </div>

        <div className="relative h-64 md:h-96 bg-blue-100 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-800">Smart Expiry Reminders</h2>
            <p className="mt-4 text-lg text-blue-700">Get notified before food spoils and make better use of your groceries.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
