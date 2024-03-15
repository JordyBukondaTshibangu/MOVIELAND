import React, { useState } from "react";
import { homeData, upcome } from "../data";
import { IMovie } from "../interfaces/movie";
import MovieHero from "../components/container/MovieHero";
import MovieList from "../components/container/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState<IMovie[]>(homeData);

  console.log(movies);
  return (
    <main className="w-full flex flex-col gap-20 overflow-hidden">
      <MovieHero movies={movies} />
      <MovieList movies={upcome} />
    </main>
  );
};

export default HomePage;
