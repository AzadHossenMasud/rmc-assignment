import React from "react";
import banner from "../../../assets/images/bannerfood.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-slate-400">
      <div className="hero-content flex-col lg:flex-row">
        <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold text-purple-900">Azad Food Corner!</h1>
          <p className="py-6 text-purple-900">
            Well-tested interesting recipes, food science, techniques,
            equipment, and even food histories. Also has a highly-rated podcast
            hosted by founder Ed Levine.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
