import React, { useEffect, useState } from "react";
import { assets, projectData } from "../../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container w-full p-4 px-6 pt-20 mx-auto my-20 overflow-hidden md:px:20 lg:px-32"
      id="Projects"
    >
      <h1 className="mb-2 text-2xl font-bold text-center sm:text-4xl">
        Projects{" "}
        <span className="font-light underline underline-offset-4 decoration-1 under">
          Completed
        </span>
      </h1>
      <p className="mx-auto mb-8 text-center text-gray-500 max-w-80">
        Explore thoughtfully crafted spaces where comfort meets convenience.
        From dream homes to smart investments — find your perfect project here.
      </p>

      {/* -------slider buttons--------
       */}

      <div className="flex items-center justify-end mb-8">
        <button
          onClick={prevProject}
          className="p-3 mr-2 bg-gray-200 rounded "
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous"></img>
        </button>
        <button
          onClick={nextProject}
          className="p-3 mr-2 bg-gray-200 rounded "
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next"></img>
        </button>
      </div>

      {/* -----Project Slider Components----- */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                className="object-cover w-full h-64 mb-12"
                src={project.image}
                alt={project.title}
              />

              <div className="absolute left-0 right-0 flex justify-center bottom-5">
                <div className="inline-block w-3/4 px-4 bg-white shadow-md">
                  <h2 className="font-semibold text-gray-800 text-md">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {project.price} <span>|</span>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
