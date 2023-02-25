import React from "react";

export default function Search({
  handleSearch,
  fetchBysearch,
  filterByOriginalRelease,
  filterByType,
  filterByStatus,
}) {
  const originalLaunches = [
    "2010-12-08T15:43:00.000Z",
    "2012-05-22T07:44:00.000Z",
    "2012-10-08T00:35:00.000Z",
    "2013-03-01T19:10:00.000Z",
    "2014-04-18T19:25:00.000Z",
    "2014-09-21T05:52:00.000Z",
    "2015-01-10T09:47:00.000Z",
    "2015-04-14T20:10:00.000Z",
    "2015-06-28T14:21:00.000Z",
    "2016-04-08T20:43:00.000Z",
    "2016-07-18T04:45:00.000Z",
    "2017-02-19T14:39:00.000Z",
    "2017-08-14T16:31:00.000Z",
    "2019-03-02T07:45:00.000Z",
    "2020-01-19T14:00:00.000Z",
    "2020-05-30T19:22:00.000Z",
    null,
    null,
    null,
  ];

  const types = ["dragon1", "Dragon 1.1"];

  return (
    <div className=" w-full h-max flex  p-10 flex-col  gap-5 ">
      <div className=" w-full h-max flex gap-4">
        <input
          onChange={handleSearch}
          type="text "
          className=" border border-neutral-500 border-opacity-20 p-3   w-1/2 rounded "
          placeholder=" search Rockets .. "
        />
        <button
          onClick={fetchBysearch}
          className="   w-max px-8 py-2 bg-slate-700   text-base font-medium text-stone-50 rounded"
        >
          Search
        </button>
      </div>
      <p className=" ">Filter by the status, original launch, or type</p>
      <div className=" w-full flex  gap-5  flex-col ">
        <p className=" w-max text-slate-800 text-lg ">Status</p>
        <div className=" flex gap-2">
          <p
            onClick={() => filterByStatus("retired")}
            className=" cursor-pointer w-max px-5 py-2 bg-zinc-700 text-orange-50 rounded-xs  "
          >
            retired
          </p>
          <p
            onClick={() => filterByStatus("unknown")}
            className=" cursor-pointer w-max px-5 py-2 bg-zinc-700 text-orange-50 rounded-xs  "
          >
            unknown
          </p>
          <p
            onClick={() => filterByStatus("active")}
            className=" cursor-pointer w-max px-5 py-2 bg-zinc-700 text-orange-50 rounded-xs  "
          >
            active
          </p>
          <p
            onClick={() => filterByStatus("destroyed")}
            className=" cursor-pointer w-max px-5 py-2 bg-zinc-700 text-orange-50 rounded-xs  "
          >
            destroyed
          </p>
        </div>
        <p className=" w-max text-slate-800 text-lg "> original launch</p>
        <div className=" flex gap-2 flex-wrap">
          {originalLaunches.map((date, index) => {
            const year = date ? new Date(date).getFullYear() : null;
            return (
              <p
                key={index}
                onClick={() => filterByOriginalRelease(date)}
                className=" cursor-pointer w-max px-3 py-1 bg-zinc-700 text-orange-50 rounded-xs text-center"
              >
                {year}
              </p>
            );
          })}
        </div>

        <p className=" w-max text-slate-800 text-lg ">Type</p>
        <div className=" flex gap-2">
          {types.map((type, index) => (
            <p
              key={index}
              onClick={() => filterByType(type)}
              className=" w-max px-5 py-2 bg-zinc-700 text-orange-50 rounded-xs  cursor-pointer "
            >
              {type}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
