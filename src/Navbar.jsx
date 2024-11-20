import { NavLink, useNavigate, Outlet } from "react-router-dom";
import logo from "./assets/logo.svg";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Navbar({ backgroundImage }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="flex flex-col bg-black text-white bg-cover bg-center bg-no-repeat w-full h-screen lg:h-[100vh] box-border overflow-x-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex justify-between items-center px-2 sm:px-10 pt-5">
        <img
          src={logo}
          alt="logo"
          className="w-[2.5rem] h-[2.5rem] md:w-[5rem] md:h-[5rem] mt-4 ml-4 cursor-pointer"
          onClick={() => navigate("/")}
        />
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-end items-center gap-6 lg:gap-12 py-4 px-6 backdrop-blur-lg text-white font-orbitron">
          <NavLink to="/" className="block active:border-b-2 border-white">
            01 Home
          </NavLink>
          <NavLink to="/destination" className="block active:border-b-2 border-white">
            02 Destination
          </NavLink>
          <NavLink to="/crew" className="block active:border-b-2 border-white">
            03 Crew
          </NavLink>
          <NavLink to="/technology" className="block active:border-b-2 border-white">
            04 Technology
          </NavLink>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="lg:hidden flex items-center">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-16 md:w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-6 text-white py-4 px-6 backdrop-blur-lg">
          <NavLink
            to="/"
            className="block active:border-b-2 border-white"
            onClick={toggleMenu}  // Close menu after selecting an option
          >
            01 Home
          </NavLink>
          <NavLink
            to="/destination"
            className="block active:border-b-2 border-white"
            onClick={toggleMenu}
          >
            02 Destination
          </NavLink>
          <NavLink
            to="/crew"
            className="block active:border-b-2 border-white"
            onClick={toggleMenu}
          >
            03 Crew
          </NavLink>
          <NavLink
            to="/technology"
            className="block active:border-b-2 border-white"
            onClick={toggleMenu}
          >
            04 Technology
          </NavLink>
        </div>
      )}

      <Outlet />
    </div>
  );
}

Navbar.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};
