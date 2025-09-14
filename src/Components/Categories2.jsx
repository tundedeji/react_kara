import React from "react";
import Button from "./mini-components/Button";

const Categories2 = () => {
  return (
    <div className="min-h-96 bg-slate-900 p-5 mt-5">
      <div className="">
        <h2 className="text-xl font-bold text-white mt-5  mr-80 lg:ml-80">
          Jobs by category
        </h2>
        <div className="mt-5 flex">
          <p className="w-40 text-xs ml-80 text-slate-400 line-clamp-2">
            With lots of unique blocks, you can easily build a page without
            coding.
          </p>
          <Button
            btnText={`Explore all Categories`}
            className="w-[200px] h-[20px] text-xs text-green-500 ml-72 bg-[#0f0f10]"
          />
        </div>
      </div>
      <div className="flex gap-7 place-content-center mt-5">
        <div className="bg-blue-600 flex h-20 w-48 rounded-xl text-white p-5 gap-10">
          <p className="text-sm">Design</p>
          <span className="h-6 rounded-xl bg-slate-400">
            <i class="bx bx-right-arrow-alt"></i>
          </span>
        </div>
        <div className="bg-white h-20 w-48 rounded-xl p-5 gap-10">
          <p className="text-sm">Marketing</p>
          <p className="text-xs">51 jobs</p>
        </div>

        <div className="bg-white h-20 w-48 rounded-xl p-5 gap-10">
          <p className="text-sm">Engineering</p>
          <p className="text-xs">89 jobs</p>
        </div>
      </div>
      <div className="flex gap-7 place-content-center mt-5">
        <div className="bg-white h-20 w-48 rounded-xl p-5 gap-10">
          <p className="text-sm">Management</p>
          <p className="text-xs">16 jobs</p>
        </div>
        <div className="bg-white h-20 w-48 rounded-xl p-5 gap-10">
          <p className="text-sm">Finance</p>
          <p className="text-xs">23 jobs</p>
        </div>
        <div className="bg-white h-20 w-48 rounded-xl p-5 gap-10">
          <p className="text-sm">Customer Support</p>
          <p className="text-xs">34 jobs</p>
        </div>
      </div>
    </div>
  );
};

export default Categories2;
