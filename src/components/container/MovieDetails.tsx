import React from "react";
import { IMovie } from "../../interfaces/movie";
import MovieCover from "../regular/MovieCover";
import MovieInfo from "../regular/MovieInfo";

type MovieProps = {
  movie: IMovie;
};

const MovieDetail: React.FC<MovieProps> = ({ movie }) => {
  const { cover, name, desc, starring } = movie;
  return (
    <section className="lg:max-w-8xl 2xl:max-w-9xl mx-auto w-full  flex gap-32 text-white mt-64 px-5">
      <MovieCover cover={cover} name={name} />
      <MovieInfo name={name} desc={desc} starring={starring} />
    </section>
  );
};

export default MovieDetail;
