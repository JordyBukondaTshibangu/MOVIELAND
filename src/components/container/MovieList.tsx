import React from "react";
import { IMoviePreview } from "../../interfaces/movie";
import MovieCard from "../regular/MovieCard";

type MovieListProps = {
  movies: IMoviePreview[];
};
const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="max-w-8xl 2xl:max-w-9xl mx-auto w-full flex flex-col gap-14">
      <h2 className="text-4xl font-bold text-white">Movies list</h2>
      <div className="grid grid-cols-6 gap-5">
        {movies.map((movie, index) => (
          <MovieCard key={index} moviePreview={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
