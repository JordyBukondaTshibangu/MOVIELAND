import React from "react";
import Button from "../base/Button";

type MovieInfoProps = {
  name: string;
  desc: string;
  starring: string;
};

const MovieInfo: React.FC<MovieInfoProps> = ({ name, desc, starring }) => {
  return (
    <div className=" w-full h-screen  flex justify-center">
      <div className="w-full flex flex-col gap-8 z-40 px-5">
        <h1 className="text-4xl lg:text-7xl font-bold uppercase">{name}</h1>
        <p className="text-lg lg:text-2xl font-medium leading-10 lg:w-3/5">
          {desc}
        </p>
        <div className="flex flex-col lg:flex-row  gap-4 lg:items-center">
          <span className="text-primary font-bold text-md lg:text-2xl">
            Starring:
          </span>
          <span className="font-bold text-md lg:text-2xl ">{starring}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <i className="fa fa-star text-xl text-rating"></i>
            <i className="fa fa-star text-xl text-rating"></i>
            <i className="fa fa-star text-xl text-rating"></i>
            <i className="fa fa-star text-xl text-rating"></i>
            <i className="fa fa-star text-xl text-rating"></i>
          </span>
        </div>
        <Button link={`/`} text="Return to home" icon="arrow-left" />
      </div>
    </div>
  );
};

export default MovieInfo;
