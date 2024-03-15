import React from "react";
import { upcome } from "../data";
import MovieList from "../components/container/MovieList";
const SearchPage = () => {
  return (
    <main className="w-full flex flex-col overflow-hidden">
      <div className="mt-64">
        <MovieList movies={upcome} />
      </div>
    </main>
  );
};

export default SearchPage;
