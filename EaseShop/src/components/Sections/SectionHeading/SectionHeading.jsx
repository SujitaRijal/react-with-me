import React from "react";

const SectionHeading = ({ title }) => {
  return (
    <div className="flex flex-wrap px-10 my-5">
      <p className="text-3xl font-semibold">{title}</p>
    </div>
  );
};

export default SectionHeading;
