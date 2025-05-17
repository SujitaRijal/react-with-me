import React from "react";
import img from "../../assets/frontpage.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative top-0 left-0 w-screen h-screen bg-cover "
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-40"></div>
      <main className="relative z-10 flex flex-col items-start px-10 lg:px-24">
        <div className="mt-40 text-left">
          <h2 className="text-2xl text-white">T-shirt / Tops</h2>
        </div>
        <p className="left-0 mt-3 text-5xl text-left text-white sm:mt-5 sm:max-w-xl">
          Summer Pack
        </p>
        <p className="left-0 mt-3 text-2xl text-left text-white sm:mt-5 sm:max-w-xl">
          Color / Colorful / Comfy
        </p>
        <button className="w-40 h-12 mt-6 text-white bg-black border border-black hover:bg-white hover:text-black hover:border-black border-rounded">
          Shop Now
        </button>
      </main>
    </div>
  );
};

export default HeroSection;
