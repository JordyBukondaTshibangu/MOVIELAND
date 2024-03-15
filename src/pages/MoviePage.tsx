import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/container/MovieDetails";
import { IMovie } from "../interfaces/movie";

// Import SDK function to get Movies
import { fetchRandomMovies } from "../sdk/movieAPI";

const MoviePage: React.FC = () => {
  const { id = "" } = useParams<{ id?: string }>();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    // const fetchMovies = async () => {
    //   const fetchedMovies = await fetchRandomMovies(10);
    // };
    // fetchMovies();
    // const selectedMovie = await fetchMovies.find((movie:IMovie) => movie.IMDB_ID === (id));
    // setMovie(selectedMovie);
  }, [id]);

  return (
    <main className="w-full flex flex-col gap-20 overflow-hidden">
      {/* {movie && <MovieDetail movie={movie} />} */}
    </main>
  );
};
export default MoviePage;
