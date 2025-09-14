import React from "react";

const Info2 = () => {
  return (
    <div className="min-h-80 mt-10">
      <div>
        <h2 className="text-xl font-bold mt-5 ml-60">Featured Jobs</h2>
        <div className="mt-5 flex">
          <p className="w-40 text-xs ml-60 text-slate-400">
            With lots of unique blocks, you can easily build a page without
            coding.
          </p>
          <div className="flex ml-auto mr-20 bg-slate-300 h-4">
            <i class="bx bx-left-arrow-alt"></i>
            <i class="bx bx-right-arrow-alt"></i>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-4 place-content-center lg:grid-cols-4 p-10 mt-10 ml-14">
        <div className="ml-5 w-40 h-40 border-none p-4">
          <p className="text-xs text-green-400">FULL-TIME</p>
          <h4 className="font-bold"> Senior Software Engineer</h4>
          <p className="text-xs text-gray-400"> New York,USA</p>
          <div className="mt-4 flex gap-3">
            <span className="italic text-sm rounded-xl bg-blue-300 h-5 w-5 text-center">
              D
            </span>
            <p className="text-xs font-bold"> Dorfus</p>
          </div>
        </div>
        <div className="ml-5 w-40 h-40 border-none p-4">
          <p className="text-xs text-blue-900">REMOTE</p>
          <h4 className="font-bold">Product Designer</h4>
          <p className="text-xs text-gray-400">Lake Colby, UK</p>
          <div className="mt-4 flex gap-3">
            <span className="italic text-sm rounded-xl bg-orange-400 h-5 w-5 text-center flex">
              <img src="/Path.svg" width={5} alt="" />
              <img src="/Path (2).svg" width={5} alt="" />
              <img src="Path (3).svg" width={5} alt="" />
            </span>
            <p className="text-xs font-bold">Cowork</p>
          </div>
        </div>

        <div className="ml-5 w-40 h-40 border-none p-4">
          <p className="text-xs text-green-400">FULL-TIME</p>
          <h4 className="font-bold"> UX Designer</h4>
          <p className="text-xs text-gray-400"> California,USA</p>
          <div className="mt-8 flex gap-3">
            <span className="italic text-sm rounded-xl bg-blue-700 h-5 w-5 text-center">
              a
            </span>
            <p className="text-xs font-bold ">Askimat</p>
          </div>
        </div>

        <div className="ml-5 w-40 h-40 border-none p-4">
          <p className="text-xs text-red-600">PART-TIME</p>
          <h4 className="font-bold">Full-Stack Developer</h4>
          <p className="text-xs text-gray-400">Katlynburgh,Sweden</p>
          <div className="mt-4 flex gap-3">
            <span className="italic text-sm rounded-xl bg-green-400 h-5 w-5 place-content-center">
              <img src="/Path (1).svg" width={10} alt="" />
            </span>
            <p className="text-xs font-bold"> Greener</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info2;
