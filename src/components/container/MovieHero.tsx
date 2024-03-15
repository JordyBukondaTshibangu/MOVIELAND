import React from "react";
import { IMovie } from "../../interfaces/movie";
import MoviePreview from "../regular/MoviePreview";

type MovieProps = {
  movies: IMovie[];
};
const MovieHero: React.FC<MovieProps> = ({ movies }) => {
  return (
    <section className="relative w-full h-screen text-white">
      {movies.map((movie, index: number) => (
        <MoviePreview key={index} movie={movie} />
      ))}
    </section>
  );
};

export default MovieHero;
