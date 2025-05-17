import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";

const ProductDetails = () => {
  const { product } = useLoaderData();
  const [image, setImage] = useState(
    product.images[0].startsWith("http") ? product.images[0] : product.thumbnail
  );

  return (
    <div className="flex flex-col px-10 md:flex-row gap-x-4">
      <div className="w-[100%] lg:w-[50%] md:w-[40%]">
        <div className="flex flex-col md:flex-row ">
          <div className="w-[100%] md:w-[20%] justify-center h-[40px] md:h-[420px]">
            {/* stack images */}
            <div className="flex flex-row justify-center h-full md:flex-col">
              {product.images[0].startsWith("http") &&
                product.images.map((item, index) => (
                  <button
                    onClick={() => setImage(item)}
                    className="p-2 mb-2 rounded-lg w-fit"
                  >
                    <img
                      src={item}
                      className="h-[48px] w-[48px] bg-cover bg-center p-2"
                      alt={"sample-" + index}
                    />
                  </button>
                ))}
            </div>
          </div>
          <div className="w-full md:w-[80%] flex justify-center md:pt-0 pt-10">
            <img
              src={image}
              className="h-full w-full max-h-[520px] border-rounded-lg cursor-pointer object-cover"
              alt={product.title}
            />
          </div>
        </div>
      </div>
      <div className="w-[60%]">{/* itenms */}</div>
    </div>
  );
};

export default ProductDetails;
