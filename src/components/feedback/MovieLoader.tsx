import React from "react";

const MovieListLoader = () => {
  return (
    <div
      role="status"
      className="w-full mx-auto animate-pulse flex flex-col lg:flex-row gap-20"
    >
      <div className="flex w-full h-96 lg:h-[800px] rounded  bg-black"></div>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full md:w-[320px] lg:w-[400px] flex h-2.5 rounded bg-black"></div>
        <div className="w-full md:w-[320px] lg:w-[600px] flex h-2.5 rounded bg-black"></div>
        <div className="w-full md:w-[320px] lg:w-[400px] flex h-2.5 rounded bg-black"></div>
        <div className="w-full md:w-[320px] lg:w-[400px] flex h-2.5 rounded bg-black"></div>
        <div className="w-full md:w-[320px] lg:w-[400px] flex h-2.5 rounded bg-black"></div>
        <div className="w-full md:w-[320px] lg:w-[400px] flex h-2.5 rounded bg-black"></div>
        <div className="w-full md:w-[320px] lg:w-[400px] flex h-14 mt-14 rounded bg-black"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default MovieListLoader;
