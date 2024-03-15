import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/container/MovieDetails";
import { IMovie } from "../interfaces/movie";

const MoviePage: React.FC = () => {
  const { id = "" } = useParams<{ id?: string }>();
  const [movie, setMovie] = useState<IMovie | null>(null);

  return (
    <main className="w-full flex flex-col gap-20 overflow-hidden">
      {/* {movie ? <MovieDetail movie={movie} /> : "No Movies"} */}
    </main>
  );
};
export default MoviePage;
