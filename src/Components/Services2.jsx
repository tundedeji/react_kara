import React from "react";

const Services2 = () => {
  return (
    <div className="min-h-96">
      <div className=" place-content-center text-center">
        <h2 className="font-bold mt-5 text-xl">Find jobs with 3 easy steps</h2>
        <p className="text-xs mt-4 text-slate-400">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>

      <div className="flex gap-10 place-content-center">
        <div className=" mt-4">
          <img src="/Bitmap (0).svg" width={250} alt="" />
        </div>
        <div className="mt-10">
          <div className="flex gap-5">
            <div className=" w-7 rounded-full text-center  bg-blue-900 text-white">
              1
            </div>
            <div className="gap-2">
              <p className="font-bold">Search for a job</p>
              <p className="text-xs">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>

          <div className="flex mt-8 gap-5">
            <div className=" w-7 rounded-full text-center  bg-blue-900 text-white">
              2
            </div>
            <div className="gap-2">
              <p className="font-bold">Apply within our site</p>
              <p className="text-xs">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>

          <div className="flex mt-8 gap-5">
            <div className=" w-7 rounded-full text-center  bg-blue-900 text-white">
              3
            </div>
            <div className="gap-2">
              <p className="font-bold">Get interview call</p>
              <p className="text-xs">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2;
