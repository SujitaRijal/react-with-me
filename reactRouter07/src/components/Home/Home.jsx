import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import image1 from "../Home/picture.jpg";
import image2 from "../Home/picture.jpg";

export default function Home() {
  const images = [{ image: image1 }, { image: image2 }];

  return (
    <div className="w-full mx-auto">
      <aside className="relative flex justify-between mx-2 overflow-hidden text-black rounded-lg sm:py-16">
        <div className="w-1/2 pt-12 h-1/2 sm:my-20 sm:pt-1">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
              },
            }}
          >
            {images.map((val, i) => (
              <div key={i}>
                <img
                  className="w-full h-full"
                  src={val.image}
                  alt="carousel image"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="flex-1 px-4 pt-10 pb-20 mx-auto sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-8 text-center sm:mt-1 mt-80 sm:text-right sm:ml-auto">
            <h2 className="text-2xl font-bold sm:text-5xl">Event Management</h2>
            <button
              type="button"
              className="px-6 py-3 mt-3 font-bold text-white transition duration-300 ease-in-out bg-orange-700 rounded-lg md:w-32 hover:bg-blue-dark hover:bg-orange-600"
            >
              Book here
            </button>
          </div>
        </div>
      </aside>

      <div className="grid place-items-center sm:mt-20">
        <img
          className="w-48 sm:w-96"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="remote image"
        />
      </div>

      <h1 className="py-10 text-2xl font-medium text-center sm:text-5xl">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
