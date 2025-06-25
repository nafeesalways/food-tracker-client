import React from "react";

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
        <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a target="_blank" className="btn  hover:bg-black text-black hover:text-white " href="https://www.facebook.com/FreshKeep">Facebook</a>
          <a target="_blank" className="btn  hover:bg-black text-black hover:text-white " href=" https://twitter.com/FreshKeep">X</a>

          <a target="_blank" className="btn  hover:bg-black text-black hover:text-white " href="https://www.youtube.com/@FreshKeep">Youtube</a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
