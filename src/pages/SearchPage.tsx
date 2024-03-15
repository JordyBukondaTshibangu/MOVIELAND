import React, { useEffect, useState } from "react";
import MovieList from "../components/container/MovieList";
import { IMovie } from "../interfaces/movie";

// Import SDK function to get Movies
import { fetchRandomMovies } from "../sdk/movieAPI";

const SearchPage: React.FC = () => {
  const [movieList, setMovieList] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await fetchRandomMovies(10);
      setMovieList(fetchedMovies);
    };
    fetchMovies();
  }, []);

  return (
    <main className="w-full flex flex-col overflow-hidden">
      <div className="mt-64">
        <MovieList movies={movieList} />
      </div>
    </main>
  );
};

export default SearchPage;
