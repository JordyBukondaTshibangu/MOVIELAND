import React from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/container/MovieDetails";
import { useSelector } from "react-redux";
import { selectedMovieById } from "../store/slices/movieSlice";
import { RootState } from "../store/store"; // Import your RootState

const MoviePage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const movie = useSelector((state: RootState) =>
    movieId ? selectedMovieById(state, movieId) : null
  );

  if (!movie) {
    return <div>Movie not found.</div>;
  }
  return (
    <main className="w-full flex flex-col gap-20 overflow-hidden">
      <MovieDetail movie={movie} />
    </main>
  );
};

export default MoviePage;
