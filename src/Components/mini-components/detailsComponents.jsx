import React from "react";

const detailsComponents = ({ title, details }) => {
  return (
    <div className="w-1/2">
      <h1 className="font-bold leading-10 capitalize text-[48px]">{title}</h1>
      <p className="text-[19px] leading-8 font-light">{details}</p>
    </div>
  );
};

export default detailsComponents;
