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
    {/* Slide 1 */}
    <div
      className="relative min-h-[60vh] md:min-h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1526470303-82c787d88682?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      <div className="absolute inset-0  bg-opacity-40"></div>
      <div className="relative text-center text-white px-6 z-10">
        <h2 className="text-3xl md:text-5xl font-bold">Track Your Food Freshness</h2>
        <p className="mt-4 text-lg">Never miss an expiry date again. Stay fresh, stay safe and healthy.!</p>
      </div>
    </div>

    {/* Slide 2 */}
    <div
      className="relative min-h-[60vh] md:min-h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1569420067112-b57b4f024595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNuYWNrc3xlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      <div className="absolute inset-0  bg-opacity-40"></div>
      <div className="relative text-center text-white px-6 z-10">
        <h2 className="text-3xl md:text-5xl font-bold">Reduce Food Waste</h2>
        <p className="mt-4 text-lg">FreshKeep helps you manage what’s in your fridge and pantry.</p>
      </div>
    </div>

    {/* Slide 3 */}
    <div
      className="relative min-h-[60vh] md:min-h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZvb2R8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      <div className="absolute inset-0 bg-opacity-40"></div>
      <div className="relative text-center text-white px-6 z-10">
        <h2 className="text-3xl md:text-5xl font-bold">Smart Expiry Reminders</h2>
        <p className="mt-4 text-lg">Get notified before food spoils and make better use of your groceries.</p>
      </div>
    </div>
  </Carousel>
</div>


  );
};

export default Banner;
