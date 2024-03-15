import React, { useState } from "react";
import { IMoviePreview } from "../../interfaces/movie";
import { Link } from "react-router-dom";

type MovieCardProps = {
  moviePreview: IMoviePreview;
};
const MovieCard: React.FC<MovieCardProps> = ({
  moviePreview: { id, name, cover, starring, rating },
}) => {
  const [showMoviePreview, setShowMoviePreview] = useState<boolean>(false);
  return (
    <div className="h-96 relative cursor-pointer z-40">
      <div className="absolute top-0 left-0 bottom-0 right-0">
        <img
          src={cover}
          alt={name}
          className="w-full h-full object-cover"
          onClick={() => setShowMoviePreview(!showMoviePreview)}
        />
      </div>
      {showMoviePreview && (
        <div
          className="absolute bg-black top-0 right-0 left-0 bottom-0 px-5 text-white flex flex-col gap-5"
          onClick={() => setShowMoviePreview(!showMoviePreview)}
        >
          <h3 className="text-2xl font-bold uppercase mt-24">{name}</h3>
          <div className="flex flex-col gap-2">
            <span className="text-primary font-bold text-lg">Starring:</span>
            <span className="font-bold text-lg ">{starring}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <i className="fa fa-star text-lg text-rating"></i>
              <i className="fa fa-star text-lg text-rating"></i>
              <i className="fa fa-star text-lg text-rating"></i>
              <i className="fa fa-star text-lg text-rating"></i>
              <i className="fa fa-star text-lg text-rating"></i>
            </span>
          </div>
          <Link
            className="bg-primary w-full mx-auto px-5 py-2 flex items-center justify-center text-lg"
            to={`/movies/${id}`}
          >
            <i className="fa fa-eye mx-2"></i> View Movie Detail
          </Link>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
