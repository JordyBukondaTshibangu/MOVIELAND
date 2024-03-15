import React from "react";
import { IMovie } from "../../interfaces/movie";
import { Link } from "react-router-dom";

type MoviePreviewProps = {
  movie: IMovie;
};

const MoviePreview: React.FC<MoviePreviewProps> = ({
  movie: { id, name, rating, desc, starring, cover },
}) => {
  return (
    <div className="relative w-full h-screen bg-bgSuccess flex justify-center">
      <div className="absolute min-h-full top-0 left-0 bottom-0 right-0 movie-preview-cover">
        <img src={cover} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="absolute max-w-8xl w-full mx-auto flex flex-col gap-8 z-40">
        <h1 className="text-7xl font-bold uppercase mt-96">{name}</h1>
        <p className="text-2xl font-medium leading-10 w-3/5">{desc}</p>
        <div className="flex gap-4 items-center">
          <span className="text-primary font-bold text-2xl">Starring:</span>
          <span className="font-bold text-2xl ">{starring}</span>
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
        <Link
          className="bg-primary w-64 px-5 py-4 flex items-center justify-center text-lg mt-5"
          to={`/movies/${id}`}
        >
          <i className="fa fa-eye mx-2"></i> View Movie Detail
        </Link>
      </div>
    </div>
  );
};

export default MoviePreview;
