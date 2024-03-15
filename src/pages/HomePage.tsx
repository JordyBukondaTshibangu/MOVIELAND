import React, { useState } from "react";
import { homeData } from "../data";
import { IMovie } from "../interfaces/movie";
import MovieHero from "../components/container/MovieHero";

const HomePage = () => {
  const [movies, setMovies] = useState<IMovie[]>(homeData);

  console.log(movies);
  return (
    <main className="w-full">
      <MovieHero movies={movies} />
    </main>
  );
};

export default HomePage;
