import React from "react";
import { assets } from "../../assets/assets";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div
      className="w-full px-4 pt-10 overflow-hidden bg-gray-900 md:px-20 lg:px-32"
      id="Footer"
    >
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="w-full mb-8 md:w-1/3 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="mt-4 text-gray-400">
            Connecting you with your dream home. Browse properties, schedule
            visits, and get expert real estate advice—right here.
          </p>
        </div>
        <div className="w-full mb-8 md:w-1/5 md:mb-0">
          <h3 className="mb-4 text-lg font-bold text-white">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <Link smooth to="#Header" className="hover:text-white">
              Home
            </Link>
            <Link smooth to="#About" className="hover:text-white">
              About Us
            </Link>
            <Link smooth to="#Contact" className="hover:text-white">
              Contact Us
            </Link>
            <Link smooth to="#" className="hover:text-white">
              Privacy Policy
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-1/3 ">
          <h3 className="mb-4 text-lg font-bold text-white">
            Subscribe to our newsletter
          </h3>
          <p className="mb-4 text-gray-400 max-w-80">
            {" "}
            The latest news,articles, and resources sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              className="w-full p-2 text-gray-400 bg-gray-800 border border-gray-700 rounded focus:outline-none md:w-auto"
              type="email"
              placeholder="Enter your email"
            />
            <button className="px-4 py-2 text-white bg-blue-500 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 mt-10 text-center text-gray-500 border-t border-gray-700">
        Copyright 2025 © Estate. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
