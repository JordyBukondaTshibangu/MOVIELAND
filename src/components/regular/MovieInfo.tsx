import React from "react";
import Button from "../base/Button";
import MovieDetailSpec from "../base/MovieDetailSpec";

type MovieInfoProps = {
  name: string;
  desc: string;
  starring: string;
  ranking: number;
};

const MovieInfo: React.FC<MovieInfoProps> = ({
  name,
  desc,
  starring,
  ranking,
}) => {
  return (
    <div className="w-full flex flex-col gap-8">
      <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold uppercase">
        {name}
      </h1>
      <p className="text-lg xl:text-2xl font-medium xl:leading-10 xl:w-3/5">
        {desc}
      </p>
      <MovieDetailSpec name="Starring" value={starring} />
      <MovieDetailSpec name="Ranking" value={ranking} />
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
  );
};

export default MovieInfo;
