import React from "react";
import { IMoviePreview } from "../../interfaces/movie";

type MovieCardProps = {
  moviePreview: IMoviePreview;
};
const MovieCard: React.FC<MovieCardProps> = ({
  moviePreview: { id, name, cover },
}) => {
  return (
    <div className="h-96 relative bg-success">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-danger">
        <img src={cover} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="absolute text-white px-5">
        <h3 className="mt-48">{name}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
