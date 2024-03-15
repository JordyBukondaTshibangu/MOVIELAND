import React from "react";
import { IMovie } from "../../interfaces/movie";
import Button from "../base/Button";

type MoviePreviewProps = {
  movie: IMovie;
};

const MoviePreview: React.FC<MoviePreviewProps> = ({
  movie: { IMG_POSTER, TITLE, IMDB_ID, ACTORS },
}) => {
  console.log(IMG_POSTER);
  return (
    <div className="relative w-full h-screen bg-bgSuccess flex justify-center">
      <div className="absolute min-h-full top-0 left-0 bottom-0 right-0 movie-preview-cover">
        {/* <img
          src={IMG_POSTER}
          alt={TITLE}
          className="w-full h-full object-cover"
        /> */}
      </div>
      <div className="absolute lg:max-w-8xl 2xl:max-w-9xl mx-auto w-full flex flex-col gap-8 z-40 px-5">
        <h1 className="text-4xl lg:text-7xl font-bold uppercase mt-48 md:mt-56 lg:mt-64 2xl:mt-96">
          {TITLE}
        </h1>
        <p className="text-lg lg:text-2xl font-medium leading-10 lg:w-3/5">
          {/* {desc} */}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          recusandae repellat, repellendus consequuntur tempore ea aliquam eum
          corrupti facere dolorem?
        </p>
        <div className="flex flex-col lg:flex-row  gap-4 lg:items-center">
          <span className="text-primary font-bold text-md lg:text-2xl">
            Starring:
          </span>
          <span className="font-bold text-md lg:text-2xl ">{ACTORS}</span>
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
        <Button link={`/movies/${IMDB_ID}`} text="View detail" icon="eye" />
      </div>
    </div>
  );
};

export default MoviePreview;
