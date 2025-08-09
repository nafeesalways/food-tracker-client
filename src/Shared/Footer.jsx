import React from "react";
import { FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
 <footer className="footer footer-horizontal footer-center p-10 bg-gradient-to-r from-green-700 to-green-800 text-white">
  <aside className="max-w-md">
    <a href="/" className="flex justify-center items-center mb-4">
      <img
        className="h-20 w-20 rounded-full border-4 border-white shadow-lg"
        src="https://cdn-icons-png.flaticon.com/128/17845/17845758.png"
        alt="FreshKeep Logo"
      />
    </a>
    <h2 className="font-bold text-3xl mb-2">FreshKeep Industries Ltd.</h2>
    <p className="opacity-90 mb-4">Providing reliable goods since 1992</p>
    <p className="text-sm opacity-70">
      Copyright © {new Date().getFullYear()} - All rights reserved
    </p>
  </aside>

  {/* Contact Info Section */}
  <div className="text-left space-y-2">
    <h3 className="text-xl font-semibold underline decoration-green-300">Contact Us</h3>
    <p className="flex items-center gap-2">
      <FaPhoneAlt className="text-green-300" /> +1 (555) 123-4567
    </p>
    <p className="flex items-center gap-2">
      <FaEnvelope className="text-green-300" /> support@freshkeep.com
    </p>
    <p className="flex items-center gap-2">
      <FaMapMarkerAlt className="text-green-300" /> 123 Fresh Street, GreenCity, Bangladesh
    </p>
  </div>

  {/* Social Links */}
  <nav>
    <h3 className="text-xl font-semibold underline decoration-green-300 mb-2">
      Follow Us
    </h3>
    <div className="grid grid-flow-col gap-4">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="btn bg-white text-green-600 text-xl rounded-full shadow hover:scale-110 transition-transform"
        href="https://www.facebook.com/FreshKeep"
      >
        <FaFacebook />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="btn bg-white text-green-600 text-xl rounded-full shadow hover:scale-110 transition-transform"
        href="https://twitter.com/FreshKeep"
      >
        <FaXTwitter />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="btn bg-white text-green-600 text-xl rounded-full shadow hover:scale-110 transition-transform"
        href="https://www.youtube.com/@FreshKeep"
      >
        <FaYoutube />
      </a>
    </div>
  </nav>
</footer>
  );
};

export default Footer;
