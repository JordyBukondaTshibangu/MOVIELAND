import React from "react";
import Slider from "react-slick";
import { IMovie } from "../../interfaces/movie";
import MoviePreview from "../regular/MoviePreview";

type MovieProps = {
  movies: IMovie[];
};

const MovieHero: React.FC<MovieProps> = ({ movies }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="relative w-full h-screen text-white">
      <Slider {...settings}>
        {movies.map((movie, index: number) => (
          <MoviePreview key={index} movie={movie} />
        ))}
      </Slider>
    </section>
  );
};

export default MovieHero;
