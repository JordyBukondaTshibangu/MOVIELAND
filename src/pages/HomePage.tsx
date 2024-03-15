import React, { useEffect, useState } from "react";
import MovieHero from "../components/container/MovieHero";
import MovieList from "../components/container/MovieList";
import { IMovie } from "../interfaces/movie";

// Import SDK function to get Movies
import { fetchRandomMovies } from "../sdk/movieAPI";

const HomePage: React.FC = () => {
  const [movieList, setMovieList] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await fetchRandomMovies(10);
      setMovieList(fetchedMovies);
    };
    fetchMovies();
  }, []);

  return (
    <main className="w-full flex flex-col gap-20 overflow-hidden">
      <MovieHero movies={movieList} />
      <MovieList movies={movieList} />
    </main>
  );
};

export default HomePage;
