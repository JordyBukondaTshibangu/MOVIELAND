import React, { useState } from "react";
import { IMovie } from "../../interfaces/movie";
import Button from "../base/Button";

type MovieCardProps = {
  moviePreview: IMovie;
};
const MovieCard: React.FC<MovieCardProps> = ({
  moviePreview: { IMG_POSTER, TITLE, IMDB_ID, ACTORS },
}) => {
  const [showMoviePreview, setShowMoviePreview] = useState<boolean>(false);
  return (
    <div className="h-[450px] relative cursor-pointer z-40">
      <div className="absolute top-0 left-0 bottom-0 right-0">
        <img
          src={IMG_POSTER}
          alt={TITLE}
          className="w-full h-full object-cover"
          onClick={() => setShowMoviePreview(!showMoviePreview)}
        />
      </div>
      {
        // flip card to show details
        showMoviePreview && (
          <div
            className="absolute bg-black top-0 right-0 left-0 bottom-0 px-5 text-white flex flex-col gap-5"
            onClick={() => setShowMoviePreview(!showMoviePreview)}
          >
            <h3 className="text-2xl font-bold uppercase mt-24">{TITLE}</h3>
            <div className="flex flex-col gap-2">
              <span className="text-primary font-bold text-lg">Starring:</span>
              <span className="font-bold text-lg ">{ACTORS}</span>
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
            <div className="flex-1 mt-auto flex items-end pb-8">
              <Button
                link={`/movies/${IMDB_ID}`}
                text="View detail"
                icon="eye"
              />
            </div>
          </div>
        )
      }
    </div>
  );
};

export default MovieCard;
