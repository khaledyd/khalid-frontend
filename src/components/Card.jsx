import React from "react";

export default function Card({data , year}) {
  return (
    <div className="   w-full    sm:w-max    h-1/2   p-5 bg-slate-400/10 flex flex-col rounded-md">
      <div className=" w-full flex gap-5">
        {" "}
        <p className=" font-bold ">{data.capsule_serial}</p>
        <p className=" text-gray-800 text-base font-light">{data.type}</p>
      </div>

      <p className=" text-slate-50 mt-3   text-base px-2  bg-neutral-600 w-max">
     {data.status}
      </p>
      <p className="  text-base   mt-3">Details</p>
      <p className=" mt-1 text-xs text-slate-400">
       {data.details}
      </p>
      <div className=" flex items-center gap-4 text-center mt-3">
        <p className="  font-light">original launch</p>
        <p className=" text-xs ">{year}</p>
      </div>
      <div className=" flex gap-4 items-center bg-slate-300 p-2 mt-3 ">
        <p className=" text-base">missions</p>
        <p className=" text-xs">COTS 1</p>
        <p  className=" text-xs">flight 7</p>
      </div>
      <p className=" mt-3">    reuse count : 0</p>
    </div>
  );
}
