import React from "react";

export default function Hero() {
  return (
    <div className=" w-full h-max   px-10 pt-4  flex border-b border-opacity-25 flex-col sm:flex-row  ">
      <div className="  sm:w-1/2  h-max   ">
        <h1 className=" text-5xl font-serif leading-11 sm:w-5/6  text-stone-700">
          Blast off into a world of adventure with SpaceX.
        </h1>
        <p className=" mt-5    sm:w-1/2  text-base  text-gray-400 mb-5">
          Don't miss out on this once-in-a-lifetime opportunity to be a part of
          history.
        </p>
      </div>
      <div className="  sm:w-1/2 h-max  rounded-xl self-center ">
        <img
          src="https://images.pexels.com/photos/23764/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="  5/6  rounded-lg   border-2  border-slate-500"
        />
      </div>
    </div>
  );
}
