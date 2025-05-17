import React from "react";
import ArrowIcon from "../common/ArrowIcon";

const Card = ({ title, imagePath, description, actionArrow }) => {
  return (
    <div className="flex flex-col items-start max-w-sm p-6">
      <img
        className="w-[180px] h-[240px] object-cover border rounded-lg hover:scale-105 cursor-pointer"
        src={imagePath}
        alt={title}
      />

      <div className="flex items-center justify-between w-full mt-2">
        <div className="flex-1">
          <p className="text-[16px] p-1 text-left">{title}</p>
          {description && (
            <p className="text-[12px] px-1 text-gray-600 text-left">
              {description}
            </p>
          )}
        </div>

        {actionArrow && (
          <span className="flex items-center justify-center p-2 cursor-pointer">
            <ArrowIcon />
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
