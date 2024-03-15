import React, { useEffect, useState } from "react";
import MovieHero from "../components/container/MovieHero";
import MovieList from "../components/container/MovieList";
import { IMovie } from "../interfaces/movie";

// Import SDK function to get Movies
import { fetchRandomMovies } from "../sdk/movieAPI";

const HomePage: React.FC = () => {
  const [movieList, setMovieList] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Start with loading = true
  const [error, setError] = useState<Error | null>(null); // Corrected error state declaration

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await fetchRandomMovies(10);
        setMovieList(fetchedMovies);
        setLoading(false); // Set loading to false only after movies have been fetched
      } catch (err) {
        setError(err as Error);
        setLoading(false); // Ensure loading is set to false even if an error occurs
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display error message if an error occurred
  }

  return (
    <main className="w-full flex flex-col gap-20 overflow-hidden">
      {movieList.length > 0 && <MovieHero movies={movieList} />}
      {movieList.length > 0 && <MovieList movies={movieList} />}
    </main>
  );
};

export default HomePage;
