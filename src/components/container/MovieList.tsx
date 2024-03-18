import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IMovie } from "../../interfaces/movie";
import { selectFilteredMovies } from "../../store/selectors/movie/movieSelector";
import MovieCard from "../regular/MovieCard";
import SearchBar from "../base/SearchBar";

type MovieListProps = {
  movies: IMovie[];
  isHome: boolean;
};

const MovieList: React.FC<MovieListProps> = ({ movies, isHome }) => {
  const navigate = useNavigate();
  const filteredMovies = useSelector(selectFilteredMovies);

  // search bar exit function
  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="max-w-8xl 2xl:max-w-9xl mx-auto w-full flex flex-col gap-14 px-5">
      <h2 className="text-2xl lg:text-4xl font-bold text-white">Movies list</h2>
      {
        // Render when on search page
        !isHome && (
          <div className="flex lg:hidden">
            <SearchBar handleExitSearch={handleNavigateToHome} />
          </div>
        )
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {
          // Render when on landing page
          (isHome ? movies : filteredMovies).length > 0 ? (
            (isHome ? movies : filteredMovies).map((movie, index) => (
              <MovieCard key={index} moviePreview={movie} />
            ))
          ) : (
            <h3 className="text-lg lg:text-2xl text-white font-medium">
              No movies found...
            </h3>
          )
        }
      </div>
    </div>
  );
};

export default MovieList;
