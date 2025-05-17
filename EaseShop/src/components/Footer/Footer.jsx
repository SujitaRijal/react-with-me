import React from "react";
import { Link } from "react-router-dom";
import FbIcon from "../common/FbIcon";
import InstaIcon from "../common/InstaIcon";
import TwitterIcon from "../common/TwitterIcon";
const Footer = ({ content }) => {
  const { items, copyright } = content;

  return (
    <div className="py-8 text-white bg-black">
      <div className="flex flex-wrap justify-around">
        {items &&
          items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-3 w-1/4 max-w-[200px]"
            >
              <p className="text-[16px] pb-[10px] font-semibold">
                {item.title}
              </p>
              {item.list &&
                item.list.map((listItem, subIndex) => (
                  <Link
                    key={subIndex}
                    className="text-white text-[12px] hover:text-gray-300"
                    to={listItem.path}
                  >
                    {listItem.label}
                  </Link>
                ))}
              {item.description && (
                <p className="text-[12px] text-white">{item.description}</p>
              )}
            </div>
          ))}
      </div>
      <div className="flex items-start gap-2 px-12 py-4 mt-4">
        <Link to={"/fb"}>
          <FbIcon />
        </Link>
        <Link to={"/insta"}>
          <InstaIcon />
        </Link>
        <Link to={"/twitter"}>
          <TwitterIcon />
        </Link>
      </div>
      <div className="mt-4 text-sm text-center text-white">
        <p>{copyright}</p>
      </div>
    </div>
  );
};

export default Footer;
