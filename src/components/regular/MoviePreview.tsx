import React from "react";
import { IMovie } from "../../interfaces/movie";

type MoviePreview = {
  movie: IMovie;
};
const MoviePreview: React.FC<MoviePreview> = ({
  movie: {
    id,
    name,
    rating,
    time,
    desc,
    starring,
    genres,
    tags,
    cover,
    video,
    date,
  },
}) => {
  return (
    <div>
      <div>
        <img src={cover} alt="" />
      </div>
      <div>
        <h1>{name}</h1>
        <span>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </span>
        <span>GP</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default MoviePreview;
