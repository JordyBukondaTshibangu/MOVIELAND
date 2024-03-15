import React, { useEffect, useState } from "react";
import { IMovie } from "../../interfaces/movie";
import MoviePreview from "../regular/MoviePreview";
import randomMoviePicker from "../../utils/randomMoviePicker";

type MovieProps = {
  movies: IMovie[];
};

const MovieHero: React.FC<MovieProps> = ({ movies }) => {
  const [randomMovie, setRandomMovie] = useState<IMovie>(movies[0]);

  useEffect(() => {
    const pickRandomMovie = () => {
      const movie = randomMoviePicker(movies);
      setRandomMovie(movie);
    };
    // Pick an initial random movie
    pickRandomMovie();

    // Set up an interval to pick a new random movie every 10 seconds
    const intervalId = setInterval(pickRandomMovie, 10000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [movies]);

  return (
    <section className="relative w-full h-[70vh] text-white">
      <MoviePreview movie={randomMovie} />
    </section>
  );
};

export default MovieHero;
