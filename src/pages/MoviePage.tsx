import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "../store/hooks";
import { RootState } from "../store/store";
import { fetchMovie, fetchMovies } from "../store/slices/movie/movieSlice";
import MovieDetail from "../components/container/MovieDetails";
import MovieListLoader from "../components/feedback/MovieLoader";
import Error from "../components/feedback/Error";

const MoviePage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const dispatch = useDispatch();
  const {
    item: movie,
    status,
    error,
  } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovie(movieId));
    }

    dispatch(fetchMovies(10));
  }, [dispatch, movieId]);

  if (status === "loading") {
    return (
      <main className="w-full flex flex-col gap-20 overflow-hidden py-40 lg:py-56 px-5 lg:px-20">
        <MovieListLoader />
      </main>
    );
  }

  if (error) {
    return (
      <main className="w-full flex flex-col gap-20 overflow-hidden py-40 lg:py-56 px-5 lg:px-20">
        <Error />
      </main>
    );
  }

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
