import React from "react";
import { IMovie } from "../../interfaces/movie";
import MovieCard from "../regular/MovieCard";

type MovieListProps = {
  movies: IMovie[];
};
const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="max-w-8xl 2xl:max-w-9xl mx-auto w-full flex flex-col gap-14 px-5">
      <h2 className="text-2xl lg:text-4xl font-bold text-white">Movies list</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {movies.map((movie, index) => (
          <MovieCard key={index} moviePreview={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
