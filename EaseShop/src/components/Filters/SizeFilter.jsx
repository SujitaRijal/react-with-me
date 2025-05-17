import React from "react";

import { useState, useCallback } from "react";

const SizeFilter = ({ sizes }) => {
  const [appliedSize, setAppliedSize] = useState([]);

  const onClickDiv = useCallback(
    (item) => {
      if (appliedSize.indexOf(item) > -1) {
        setAppliedSize(appliedSize.filter((size) => size !== item));
      } else {
        setAppliedSize([...appliedSize, item]);
      }
    },
    [appliedSize, setAppliedSize]
  );

  return (
    <div className="flex flex-col mb-4">
      <p className="text-[16px] text-black text-left mt-5 mb-5">Sizes</p>
      <div className="flex flex-wrap px-2">
        {sizes.map((item) => (
          <div key={item} className="flex flex-col gap-2 py-3 mr-2">
            <div
              className="w-[50px] h-8 mr-4 mb-4 bg-white border border-gray-500 cursor-pointer rounded-lg hover:outline-2 hover:scale-110 text-center text-gray-500"
              style={
                appliedSize.indexOf(item) > -1
                  ? { background: "black", color: "white" }
                  : {}
              }
              onClick={() => onClickDiv(item)}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;
