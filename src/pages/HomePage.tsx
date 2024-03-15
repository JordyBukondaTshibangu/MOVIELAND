import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import MovieHero from "../components/container/MovieHero";
import MovieList from "../components/container/MovieList";

import { fetchMovies } from "../store/slices/movieSlice";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((state: RootState) => state.movies.items);
  const status = useSelector((state: RootState) => state.movies.status);
  const error = useSelector((state: RootState) => state.movies.error);

  useEffect(() => {
    if (status === "loading") {
      dispatch(fetchMovies(10));
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>; // Display error message if an error occurred
  }

  return (
    <main className="w-full flex flex-col gap-20 overflow-hidden">
      {movies.length > 0 && <MovieHero movies={movies} />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default HomePage;
