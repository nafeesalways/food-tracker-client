import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="/" className="flex justify-center md:justify-start items-center mb-4">
            <img
              className="h-20 w-20 rounded-full border-4 border-white shadow-lg"
              src="https://cdn-icons-png.flaticon.com/128/17845/17845758.png"
              alt="FreshKeep Logo"
            />
          </a>
          <h2 className="font-bold text-3xl mb-2">FreshKeep Industries Ltd.</h2>
          <p className="opacity-90 mb-2">Providing reliable goods since 1992</p>
          <p className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} FreshKeep. All rights reserved.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-green-900/50 p-6 rounded-xl flex flex-col gap-3">
          <h3 className="text-xl font-semibold mb-4 border-b border-green-300 pb-1">
            Contact Us
          </h3>
          <p className="flex items-center gap-2 hover:text-green-300 transition">
            <FaPhoneAlt /> +1 (555) 123-4567
          </p>
          <p className="flex items-center gap-2 hover:text-green-300 transition">
            <FaEnvelope /> support@freshkeep.com
          </p>
          <p className="flex items-center gap-2 hover:text-green-300 transition">
            <FaMapMarkerAlt /> 123 Fresh Street, GreenCity, Bangladesh
          </p>
        </div>

        {/* Social Media */}
        <div className="bg-green-900/50 p-6 rounded-xl flex flex-col gap-4 items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 border-b border-green-300 pb-1">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-green-600 text-xl rounded-full shadow-lg p-3 hover:scale-110 transition-transform"
              href="https://www.facebook.com/FreshKeepDemo"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-green-600 text-xl rounded-full shadow-lg p-3 hover:scale-110 transition-transform"
              href="https://twitter.com/FreshKeepDemo"
            >
              <FaXTwitter />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-green-600 text-xl rounded-full shadow-lg p-3 hover:scale-110 transition-transform"
              href="https://www.youtube.com/@FreshKeepDemo"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
