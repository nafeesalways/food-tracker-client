import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import userIcon from "../assets/image.png";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.querySelector("html").setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme function
  const handleThemeChange = (event) => {
    const newTheme = event.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch(() => toast.error("An error occurred"));
  };

  const Links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-semibold text-base lg:text-lg transition-all duration-200 ${
              isActive
                ? "text-green-600 border-b-2 border-green-600"
                : "hover:text-green-600"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            `font-semibold text-base lg:text-lg transition-all duration-200 ${
              isActive
                ? "text-green-600 border-b-2 border-green-600"
                : "hover:text-green-600"
            }`
          }
          to="/fridge"
        >
          Fridge
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            `font-semibold text-base lg:text-lg transition-all duration-200 ${
              isActive
                ? "text-green-600 border-b-2 border-green-600"
                : "hover:text-green-600"
            }`
          }
          to="/features"
        >
          Features
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-semibold text-base lg:text-lg transition-all duration-200 ${
                  isActive
                    ? "text-green-600 border-b-2 border-green-600"
                    : "hover:text-green-600"
                }`
              }
              to="/addFood"
            >
              Add Food
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-semibold text-base lg:text-lg transition-all duration-200 ${
                  isActive
                    ? "text-green-600 border-b-2 border-green-600"
                    : "hover:text-green-600"
                }`
              }
              to="/recipes"
            >
            Recipe Suggestions
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `font-semibold text-base lg:text-lg transition-all duration-200 ${
                  isActive
                    ? "text-green-600 border-b-2 border-green-600"
                    : "hover:text-green-600"
                }`
              }
              to="/myItems"
            >
              My Items
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="navbar sticky top-0 z-50 bg-base-200 shadow-md px-4 sm:px-6 lg:px-20">
      {/* Navbar Start - Logo & Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile Menu Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            {Links}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <img
            className="h-8 w-8 lg:h-10 lg:w-10"
            src="https://cdn-icons-png.flaticon.com/128/17845/17845758.png"
            alt="FreshKeep Logo"
          />
          <span className="text-md lg:text-2xl text-green-500 font-bold">
            Fresh<span className="text-primary text-md lg:text-2xl font-bold">Keep</span>
          </span>
        </Link>
      </div>

      {/* Navbar Center - Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{Links}</ul>
      </div>

      {/* Navbar End - Theme Toggle, Profile, Auth Buttons */}
      <div className="navbar-end flex items-center gap-3">
        {/* Theme Toggle */}
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={handleThemeChange}
            aria-label="Toggle theme"
          />

          {/* Sun icon */}
          <svg
            className="swap-on fill-current w-6 h-6 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* Moon icon */}
          <svg
            className="swap-off fill-current w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        {/* User Profile */}
        {user && (
          <div className="relative group">
            <div
              id="user-profile"
              className="cursor-pointer"
              onClick={() => setShowLogout(!showLogout)}
            >
              <img
                src={user.photoURL || userIcon}
                alt="User profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-green-600 hover:border-green-700 transition"
              />
              <Tooltip
                anchorId="user-profile"
                content={user?.displayName || "User"}
                place="bottom"
              />
            </div>
          </div>
        )}

        {/* Auth Buttons */}
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-sm lg:btn-md bg-green-600 text-white border-none hover:bg-green-700 transition"
          >
            Log Out
          </button>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/signin"
              className="btn btn-sm lg:btn-md bg-green-600 text-white border-none hover:bg-green-700 transition"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="btn btn-sm lg:btn-md btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition hidden sm:inline-flex"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
