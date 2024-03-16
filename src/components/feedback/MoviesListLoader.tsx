import React from "react";

const MoviesListLoader = () => {
  return (
    <div
      role="status"
      className="w-full mx-auto animate-pulse  flex flex-col gap-5"
    >
      <div className="flex w-full h-32 md:h-[800px] rounded  bg-black"></div>
      <div className="w-full flex gap-10 flex-wrap items-center justify-center">
        <div className="w-full md:w-[320px] lg:w-[300px] xl:w-[500px] flex h-96 rounded bg-black"></div>
        <div className="w-full md:w-[320px] lg:w-[300px] xl:w-[500px] flex h-96 rounded bg-black"></div>
        <div className="w-full md:w-[320px] lg:w-[300px] xl:w-[500px] flex h-96 rounded bg-black"></div>
        <div className="w-full md:w-[320px] lg:w-[300px] xl:w-[500px] flex h-96 rounded bg-black"></div>
        <div className="w-full md:w-[320px] lg:w-[300px] xl:w-[500px] flex h-96 rounded bg-black"></div>
        <div className="w-full md:w-[320px] lg:w-[300px] xl:w-[500px] flex h-96 rounded bg-black"></div>
        <div className="w-full md:w-[320px] lg:w-[300px] xl:w-[500px] flex h-96 rounded bg-black"></div>
        <div className="w-full md:w-[320px] lg:w-[300px] xl:w-[500px] flex h-96 rounded bg-black"></div>
        <div className="w-full md:w-[320px] lg:w-[300px] xl:w-[500px] flex h-96 rounded bg-black"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default MoviesListLoader;
