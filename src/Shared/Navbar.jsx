import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import userIcon from "../assets/image.png";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import Container from "./Container";

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
     <div className="bg-amber-500 shadow-sm">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
              >
                {Links}
              </ul>
            </div>
            <ProfastLogo />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{Links}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <button
                onClick={handleLogout}
                className="btn bg-[#CAEB66] p-3 rounded-lg text-black"
              >
                LogOut
              </button>
            ) : (
              <Link
                to="/login"
                className="btn bg-[#CAEB66] p-3 rounded-lg text-black"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
