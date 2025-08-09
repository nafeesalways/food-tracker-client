import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import userIcon from "../assets/image.png";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);            
  const [showLogout, setShowLogout] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "light" : "dark"
  );

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme);
    document.querySelector("html").setAttribute("data-theme", savedTheme);
  }, [theme]);

  // Toggle theme function
  const handleThemeChange = (event) => {
    const newTheme = event.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch(() => toast.error("An error occurred"));
  };
  const Links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `block  font-bold mr-4 rounded transition-colors ${
            isActive ? "border-b-4 font-bold text-lg" : "font-semibold text-lg"
          }`
        }
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `block  font-bold mr-4 rounded transition-colors ${
            isActive ? "border-b-4 font-bold text-lg" : "font-semibold text-lg"
          }`
        }
        to="/fridge"
      >
        Fridge
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `block  font-bold mr-4 rounded transition-colors ${
            isActive ? "border-b-4 font-bold text-lg" : "font-semibold text-lg"
          }`
        }
        to="/features"
      >
        Features
      </NavLink>
      {user && (
        <>
          <NavLink
            className={({ isActive }) =>
              `block  font-bold mr-4 rounded transition-colors ${
                isActive
                  ? "border-b-4 font-bold text-lg"
                  : "font-semibold text-lg"
              }`
            }
            to="/addFood"
          >
            Add Food
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `block  font-bold mr-4 rounded transition-colors ${
                isActive
                  ? "border-b-4 font-bold text-lg"
                  : "font-semibold text-lg"
              }`
            }
            to="/myItems"
          >
            My Items
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="navbar-start">
        <div></div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a href="#">
          <img
            className="lg:h-13 lg:w-13 h-5 w-5"
            src="https://cdn-icons-png.flaticon.com/128/17845/17845758.png"
            alt=""
          />                                
        </a>
        <a href="/" className="btn btn-ghost lg:text-xl text-sm -ml-2">FreshKeep</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">
        <input
          type="checkbox"
          value="dark"
          className="lg:toggle lg:theme-controller mr-4 sm:mr-6 hidden"
          checked={theme === "dark"}
          onChange={handleThemeChange}
          aria-label="Toggle dark mode"
        />
        <div
          id="my-button"
          className="relative cursor-pointer"
          onClick={() => setShowLogout(!showLogout)}
          aria-label={`User profile: `}
        >
          <img
            data-tip="This is a tooltip!"
            src={user ? user.photoURL : userIcon}
            alt="User profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <Tooltip
            anchorId="my-button"
            content={`${user?.displayName}`}
            place="top"
          />
          {user && (
            <div
              className={`${
                showLogout ? "block" : "hidden"
              } absolute top-12 left-0 text-black text-sm px-2 py-1 bg-green-200 rounded shadow-md z-10 md:hidden`}
            >
              {user.displayName}
            </div>
          )}

          {user && (
            <div className="hidden md:block absolute top-12 left-0 text-black text-sm px-2 py-1 bg-green-200 rounded shadow-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
              {user.displayName}
            </div>
          )}
        </div>

        {/* login and logout part */}
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn  font-bold bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            Log Out
          </button>
        ) : (
          <>
            <Link
              to="/signin"
              className="btn bg-green-600 text-white rounded-xl hover:bg-green-700 transition mr-2"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="btn bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
