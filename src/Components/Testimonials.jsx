import React from "react";
import { sampleData } from "../mockData/sampleData";

const Testimonials = () => {
  return (
    <section className=" mt-[15px] p-[215px]">
      <div>
        <h3 className="font-bold text-lg text-center">
          What people say about us
        </h3>
        <p className="font-extralight line-clamp-3">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="grid grid-rows-3 lg:grid-cols-3 items-center mt-5">
        <div className="box-border size-60 p-4  shadow-xl">
          <span>
            <img src="/smilinglady.svg" alt="" />
          </span>
          <p>
            “You made it so simple. My new site is so much faster and easier to
            work with than my old site.”
          </p>
          <p className="text-xs font-bold">isabella chavez</p>
        </div>

        <div className="box-border size-60 p-4  shadow-xl">
          <span>
            <img src="/smilingguy.svg" alt="" />
          </span>
          <p>
            “You made it so simple. My new site is so much faster and easier to
            work with than my old site.”
          </p>
          <p className="text-xs font-bold">Curtis Rhodes</p>
        </div>

        <div className="box-border size-60 p-4  shadow-xl">
          <span>
            <img src="/glassman.svg" alt="" />
          </span>
          <p>
            “You made it so simple. My new site is so much faster and easier to
            work with than my old site.”
          </p>
          <p className="text-xs font-bold">Lucas Mann</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
