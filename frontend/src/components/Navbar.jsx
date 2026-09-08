import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-amber-400 transition" : "hover:text-amber-400 transition";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "block text-amber-400 font-medium py-1"
      : "block text-slate-300 hover:text-amber-400 py-1";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-2xl font-black tracking-wider text-white"
        >
          SSJ <span className="text-amber-400">PREMIUM</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/rooms" className={navLinkClass}>
            Rooms & Suites
          </NavLink>

          <NavLink to="/amenities" className={navLinkClass}>
            Amenities
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Book Now */}
        <div className="hidden md:block">
          <NavLink
            to="/book"
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg transition duration-300"
          >
            Book Now
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-200 focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
          <NavLink to="/" onClick={closeMenu} className={mobileNavLinkClass}>
            Home
          </NavLink>

          <NavLink
            to="/rooms"
            onClick={closeMenu}
            className={mobileNavLinkClass}
          >
            Rooms & Suites
          </NavLink>

          <NavLink
            to="/amenities"
            onClick={closeMenu}
            className={mobileNavLinkClass}
          >
            Amenities
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={mobileNavLinkClass}
          >
            Contact
          </NavLink>

          <NavLink
            to="/book"
            onClick={closeMenu}
            className="block bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-center"
          >
            Book Now
          </NavLink>
        </div>
      )}
    </header>
  );
}
