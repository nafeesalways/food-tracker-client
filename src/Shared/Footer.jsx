import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center p-10 bg-black">
      <aside>
        <a href="/">
          {" "}
          <img
            className="h-30 w-30"
            src="https://cdn-icons-png.flaticon.com/128/17845/17845758.png"
            alt=""
          />
        </a>
        <p className="font-bold text-3xl text-white">
          FreshKeep Industries Ltd.
          <br />
          Providing reliable Goods since 1992
        </p>
        <p className="text-white">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-green-500 text-xl"
            href="https://www.facebook.com/FreshKeep"
          >
            <FaFacebook />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-green-500 text-xl"
            href="https://twitter.com/FreshKeep"
          >
            <FaXTwitter />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-green-500 text-xl"
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
