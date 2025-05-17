import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const PriceFilter = () => {
  const [range, setRange] = useState({
    min: 150,
    max: 5000,
  });
  return (
    <div className="flex flex-col mb-4">
      <p className="text-[16px] text-black text-left mt-5 mb-5">Price</p>
      <RangeSlider
        className="background-black"
        min={0}
        max={400}
        defaultValue={[range.min, range.max]}
        onInput={(values) =>
          setRange({
            min: values[0],
            max: values[1],
          })
        }
      />
      <div className="flex justify-between">
        <div className="border rounded-lg h-8 mt-4 max-w-[50%] w-[40%] flex  items-start">
          <p className="pl-4">RS</p>
          <input
            type="number"
            value={range.min}
            className="px-4 outline-none"
            min={0}
            max="499"
            disabled
            placeholder="min"
          ></input>
        </div>
        <div className="border rounded-lg h-8 mt-4 max-w-[50%] w-[40%] flex items-center">
          <p className="pl-4">RS</p>
          <input
            type="number"
            value={range.max}
            className="px-4 outline-none"
            min={0}
            max="499"
            disabled
            placeholder="max"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
