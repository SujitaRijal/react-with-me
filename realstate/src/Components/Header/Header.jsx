import React from "react";
import Navbar from "../Navbar/Navbar";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div
      className="flex items-center w-full min-h-screen mb-4 overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: "url('/backk.webp')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container px-6 py-4 mx-auto text-center text-white md:px-20 lg:px-32"
      >
        <h2 className="text-6xl sm:text-5xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Let us guide you to the perfect place to call home
        </h2>
        <div className="mt-16 space-x-6 ">
          <Link
            smooth
            to="#Projects"
            className="px-8 py-3 border border-white rounded"
          >
            Projects
          </Link>
          <Link to="#Contact" className="px-8 py-3 bg-blue-500 border rounded">
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
