import React from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/container/MovieDetails";
import { useSelector } from "react-redux";
import { selectedMovieById } from "../store/selectors/movie/movieSelector";
import { RootState } from "../store/store"; // Import your RootState

const MoviePage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const movie = useSelector((state: RootState) =>
    movieId ? selectedMovieById(state, movieId) : null
  );

  if (!movie) {
    return (
      <main className="w-full min-h-[70vh] flex items-center justify-center overflow-hidden py-48 ">
        <h3 className="text-4xl text-white">Movie not found...</h3>
      </main>
    );
  }
  return (
    <main className="w-full flex flex-col gap-20 overflow-hidden">
      <MovieDetail movie={movie} />
    </main>
  );
};

export default MoviePage;
