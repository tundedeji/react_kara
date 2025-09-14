import React from "react";
import Button from "./mini-components/Button";

const Updates2 = () => {
  return (
    <div className="min-h-80 p-10">
      <div className="h-14 w-14 bg-green-400 rounded-full ml-[550px] p-3 mt-5">
        <img src="/Path (4).svg" alt="" />
        <img src="/Path (5).svg" alt="" />
      </div>
      <div className="place-content-center text-center">
        <h2 className="font-bold text-xl mt-10">Get Our Latest Updates</h2>
        <p className=" text-xs text-center mt-3  text-slate-400">
          With lots of unique blocks, you can easily build a page without
          coding.Biuld your next Landing page.
        </p>
      </div>
      <div className="mt-10 ml-96">
        <input type="email" name="" placeholder="Enter your Email" id="" />
        <Button
          btnText="Subscribe"
          className="w-[168px] h-[45px] bg-[#473BF0] "
        />
      </div>
      <div className="place-content-center text-center mt-5">
        <p className=" text-xs text-center mt-3  text-slate-400">
          We’ll never share your details with third parties. View our Privacy
          Policy for more info.
        </p>
      </div>
    </div>
  );
};

export default Updates2;
