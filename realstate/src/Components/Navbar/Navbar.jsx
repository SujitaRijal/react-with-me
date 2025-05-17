import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 z-10 w-full">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto bg-transparent md:px-20 lg:px-32">
        <img src={assets.logo} alt="Logo" />
        <ul className="hidden text-white md:flex gap-7">
          <Link
            smooth
            to="#Header"
            className="cursor-pointer hover:text-gray-700"
          >
            Home
          </Link>
          <Link
            smooth
            to="#About"
            className="cursor-pointer hover:text-gray-700"
          >
            About
          </Link>
          <Link
            smooth
            to="#Projects"
            className="cursor-pointer hover:text-gray-700"
          >
            Projects
          </Link>
          <Link
            smooth
            to="#Testimonials"
            className="cursor-pointer hover:text-gray-700"
          >
            Testimonials
          </Link>
        </ul>
        <button className="hidden px-8 py-2 bg-white rounded-full md:block">
          Sign Up
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="cursor-pointer md:hidden w-7"
          alt="Open Menu"
          role="button"
          aria-label="Open Mobile Menu"
        />
      </div>

      {/* ---------mobile-menu-------- */}
      <div
        className={` top-0 right-0  overflow-hidden bg-white md:hidden ${
          showMobileMenu ? "fixed w-full h-full " : "h-0 w-0"
        } bottom-0`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="cursor-pointer md:hidden w-7"
            alt="Close Menu"
            role="button"
            aria-label="Close Mobile Menu"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium ">
          <Link
            onClick={() => setShowMobileMenu(false)}
            smooth
            to="#Header"
            className="inline-block px-4 rounded-full py2 "
          >
            Home
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            smooth
            to="#About"
            className="inline-block px-4 rounded-full py2 "
          >
            About
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            smooth
            to="#Projects"
            className="inline-block px-4 rounded-full py2 "
          >
            Projects
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            smooth
            to="#Testimonials"
            className="inline-block px-4 rounded-full py2 "
          >
            Testimonials
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
