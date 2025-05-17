import React from "react";
import SvgFavourite from "../../components/common/SvgFavourite";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  description,
  price,
  discount,
  rating,
  brand,
  thumbnail,
}) => {
  return (
    <div className="relative flex-col inline-block hover:scale-105">
      <Link to={`/product/${id}`}>
        <img
          className="w-[180px] h-[200px] object-cover  border rounded-lg  cursor-pointer block"
          src={thumbnail}
          alt="jeans"
        />
      </Link>

      <div className="top-0 flex items-center gap-2 p-2 space-between">
        <div className="flex flex-col pt-2">
          <p className="text-[16px] p-1 text-left text-bold">{title}</p>
          {description && (
            <p className="text-[12px] px-1 text-gray-600 ">{brand}</p>
          )}
        </div>
        <div className="px-2 py-6 text-[13px] flex-col ">
          <p>RS {price}</p>
        </div>
      </div>
      <button
        onClick={() => console.log("Click button")}
        className="absolute top-0 p-1 rounded-full shadow-md cursor-pointer right-4"
      >
        <SvgFavourite className="w-2 h-2" />
      </button>
    </div>
  );
};

export default ProductCard;
