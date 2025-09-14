import React from "react";

const Reasons2 = () => {
  return (
    <div className="text-center place-content-center min-h-96">
      <div className="text-center place-content-center">
        <h3 className="font-bold mt-5 mr-5">Big Companies are here</h3>
        <p className="text-xs text-slate-400 w-96 mt-5 mr-40 md:ml-[800px] lg:ml-[420px]">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes. You
          have a business to run. Stop worring about cross-browser bugs,
          designing new pages.
        </p>
      </div>

      <div className="flex gap-10 place-content-center mt-5">
        <img src="/Logo 1.svg" width={100} />
        <img src="/Logo 2.svg" width={100} alt="" />
        <img src="/Logo 3.svg" width={100} alt="" />
        <img src="/Logo 4.svg" width={100} alt="" />
      </div>
      <div className="flex gap-10 place-content-center mt-5">
        <img src="/Logo 5.svg" width={100} alt="" />
        <img src="/Logo 6.svg" width={100} alt="" />
      </div>
    </div>
  );
};

export default Reasons2;
