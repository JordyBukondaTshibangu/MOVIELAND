import React from "react";

type MovieDetailSpecProps = {
  name: string;
  value: string | number;
};
const MovieDetailSpec: React.FC<MovieDetailSpecProps> = ({ name, value }) => {
  return (
    <div className="flex flex-col lg:flex-row  gap-4 lg:items-center">
      <span className="text-primary font-bold text-md xl:text-2xl">
        {name}:
      </span>
      <span className="font-bold text-md xl:text-2xl ">{value}</span>
    </div>
  );
};

export default MovieDetailSpec;
