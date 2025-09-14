import React from "react";

const Reasons = () => {
  return (
    <div className="px-[213px] grid grid-rows-2 overflow-x-hidden place-content-center lg:grid-cols-2 items-center gap-[50px] lg:gap-[150px] mt-12">
      <div>
        <img
          src="/man standing.svg"
          width={250}
          className="ml-20"
          alt="reasons img"
        />
      </div>
      <div>
        <div>
          <h3 className="font-bold text-xl">
            Reasons you should choose us to grow today.
          </h3>
          <p className="font-light">
            We share common trends and strategies for improving your rental
            income and making sure you stay in high demand.
          </p>
        </div>
        <div className="mt-5">
          <span className="font-bold text-sm">Fully Responsive</span>
          <span className="font-bold ml-5 text-sm">Easy to edit</span>
        </div>
        <div className="mt-5">
          <span className="font-bold text-sm">Beautiful Layout</span>
          <span className="font-bold ml-5 text-sm">Google Font Included</span>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
