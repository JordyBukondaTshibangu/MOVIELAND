import React from "react";
import { IMovie } from "../../interfaces/movie";
import MovieCover from "../regular/MovieCover";
import MovieInfo from "../regular/MovieInfo";

type MovieProps = {
  movie: IMovie;
};

const MovieDetail: React.FC<MovieProps> = ({ movie }) => {
  const { IMG_POSTER, TITLE, IMDB_ID, ACTORS, RANK } = movie;
  return (
    <section className="lg:max-w-8xl 2xl:max-w-9xl mx-auto w-full flex flex-col lg:flex-row gap-20 xl:gap-32 text-white mt-36 lg:mt-48 xl:mt-64 px-5">
      <MovieCover cover={IMG_POSTER} name={TITLE} />
      <MovieInfo name={TITLE} desc={IMDB_ID} starring={ACTORS} ranking={RANK} />
    </section>
  );
};

export default MovieDetail;
