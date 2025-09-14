import React from "react";
import Button from "./mini-components/Button";

const Hero2 = () => {
  return (
    <section className="min-h-screen bg-green-200 px-[213px] grid grid-cols-2 place-content-center md:grid-cols-2 items-center gap-[150px] mt-12 w-auto overflow-x-hidden">
      <div>
        <h1 className="font-bold text-6xl lg:text-5xl leading-[58px]">
          Find a dream job that changes life.
        </h1>
        <p className="mt-4 line-clamp-3">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next job website.
        </p>
        <form className="mt-5 bg-blue-900 w-max gap-2 p-4 h-36 md:h-14 grid grid-rows-3 lg:grid-cols-3">
          <input
            type="text"
            name=""
            id=""
            className="bg-white w-40 h-6"
            placeholder="job title or keyword"
          />
          <div className="w-24 rounded-xl h-6 p-1 bg-white gap-10 flex">
            <p className="text-xs">City</p>
            <i class="bx bx-chevron-down"></i>
          </div>
          <Button
            btnText={`search`}
            className="w-[100px] h-[20px] text-xs bg-[#0f0f10]"
          />
        </form>

        <span className="mt-5 text-slate-500 line-clamp-1">
          Try Product Designer, Soft Engineer
        </span>
      </div>
      <div>
        <img src="/office.svg" alt="" />
      </div>
    </section>
  );
};

export default Hero2;
