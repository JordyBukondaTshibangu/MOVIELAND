import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/container/MovieDetails";
import { IMovie } from "../interfaces/movie";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchMovies } from "../store/slices/movieSlice";

const MoviePage: React.FC = () => {
  const { id = "" } = useParams<{ id?: string }>();
  const [movie, setMovie] = useState<IMovie | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((state: RootState) => state.movies.items);
  const status = useSelector((state: RootState) => state.movies.status);
  const error = useSelector((state: RootState) => state.movies.error);

  useEffect(() => {
    if (status === "loading") {
      dispatch(fetchMovies(10));
    }
  });

  return (
    <main className="w-full flex flex-col gap-20 overflow-hidden">
      {/* {movie ? <MovieDetail movie={movie} /> : "No Movies"} */}
    </main>
  );
};
export default MoviePage;
