import React from "react";
import Button from "./mini-components/Button";
import { useData } from "../context/DataContext";

const Services = () => {
  const data = useData();
  const services = data.services;
  console.log(Services);

  return (
    <div className="bg-slate-100 p-5 -mt-40 place-content-center">
      <div className="ml-10">
        <h3 className="font-bold text-lg ml-10 text-center ">
          Services we offer for you
        </h3>
        <p className="text-sm font-light text-center">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="mt-5 grid grid-rows-3 overflow-hidden place-content-center lg:grid-cols-3 items-center justify-center p-20 ml-8 lg:ml-16 ">
        <div>
          <span className="font-bold text-sm">Digital Marketing</span>
          <img src="/busgr.svg" width={150} className="mt-3" alt="" />
          <p className="text-xs w-40 font-light mt-3">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <Button
            btnText={`Learn more`}
            className="w-[123px] h-[32px] mt-8 text-xs text-[#473BF0]"
          />
        </div>
        <div>
          <span className="font-bold text-sm">Business Growth</span>
          <img src="/Rectangle3.svg" width={150} className="mt-3" alt="" />
          <p className="text-xs w-40 font-light mt-3">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <Button
            btnText={`Learn more`}
            className="w-[123px] h-[32px] mt-8 text-xs text-[#473BF0]"
          />
        </div>
        <div>
          <span className="font-bold text-sm">Content Marketing</span>
          <img src="/Rectangles.svg" width={150} className="mt-3" alt="" />
          <p className="text-xs w-40 font-light mt-3">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <Button
            btnText={`Learn more`}
            className="w-[123px] h-[32px] mt-8 text-xs text-[#473BF0]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
