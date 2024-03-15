import React from "react";
import { IMovie } from "../../interfaces/movie";
import MoviePreview from "../regular/MoviePreview";

type MovieProps = {
  movies: IMovie[];
};
const MovieHero: React.FC<MovieProps> = ({ movies }) => {
  return (
    <section>
      {movies.map((movie, index: number) => (
        <MoviePreview key={index} movie={movie} />
      ))}
    </section>
  );
};

export default MovieHero;
