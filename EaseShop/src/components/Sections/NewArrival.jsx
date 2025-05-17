import React from "react";
import SectionHeading from "./SectionHeading/SectionHeading";
import Card from "../ShopCards/Card";
import Jeans from "../../assets/jeans.jpg";
import Shirt from "../../assets/shirt.jpg";
import Tshirt from "../../assets/tshirt.jpeg";
import Dress from "../../assets/dress.jpeg";
import Joggers from "../../assets/joggers.jpg";
import Kurti from "../../assets/kurti.webp";
import Carousel from "react-multi-carousel";
import { responsive } from "../../utils/Section.constraints";
import "./NewArrival.css";
const items = [
  {
    title: "Jeans",
    imagePath: Jeans,
  },
  {
    title: "Shirt",
    imagePath: Shirt,
  },
  {
    title: "T-Shirt",
    imagePath: Tshirt,
  },
  {
    title: "Dress",
    imagePath: Dress,
  },
  {
    title: "Joggers",
    imagePath: Joggers,
  },
  {
    title: "Kurti",
    imagePath: Kurti,
  },
];

const NewArrival = () => {
  return (
    <>
      <SectionHeading title="|New Arrivals" />
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisbile={false}
        itemClass={"react-slider-custom-item"}
        className="px-8"
      >
        {items &&
          items.map((item, index) => (
            <Card
              key={item.title + index}
              title={item.title}
              imagePath={item.imagePath}
            />
          ))}
      </Carousel>
    </>
  );
};

export default NewArrival;
