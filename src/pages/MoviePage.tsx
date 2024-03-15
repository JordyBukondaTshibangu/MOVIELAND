import React, { useEffect, useState } from "react";
import { homeData } from "../data";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/container/MovieDetails";
import { IMovie } from "../interfaces/movie";

const MoviePage: React.FC = () => {
  const { id = "" } = useParams<{ id?: string }>();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    const selectedMovie = homeData.find((movie) => movie.id === parseInt(id));
    setMovie(selectedMovie);
  }, [id]);

  return (
    <main className="w-full flex flex-col gap-20 overflow-hidden">
      {movie && <MovieDetail movie={movie} />}
    </main>
  );
};
export default MoviePage;
