import React from "react";

const News2 = () => {
  return (
    <div className="min-h-96  bg-slate-200">
      <div className="place-content-center text-center">
        <h2 className="font-bold text-xl mt-10"> News that helps</h2>
        <p className=" text-xs text-center mt-3  text-slate-400">
          With lots of unique blocks, you can easily build a page without
          coding.
        </p>
      </div>
      <div className="flex gap-4 mt-5 place-content-center">
        <div className="p-4 bg-white w-60 h-60 rounded-xl">
          <img src="/man.svg" width={150} alt="" />
          <p className="text-xs text-slate-300"> Career</p>
          <p className="font-bold">
            How to win any job you want. Get started with 5 steps.
          </p>
        </div>

        <div className="p-4 bg-white w-60 h-60 rounded-xl">
          <img src="/both.svg" width={150} alt="" />
          <p className="text-xs text-slate-300">Lifestyle</p>
          <p className="font-bold">
            10 ways to reduce your office work depression.
          </p>
        </div>

        <div className="p-4 bg-white w-60 h-60 rounded-xl">
          <img src="/woman.svg" width={150} alt="" />
          <p className="text-xs text-slate-300"> Career</p>
          <p className="font-bold">
            How to win any job you want. Get started with 5 steps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default News2;
