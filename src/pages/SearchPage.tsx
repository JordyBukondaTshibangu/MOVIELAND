import React from "react";
import MovieContainer from "../components/container/MovieContainer";

const SearchPage: React.FC = () => {
  return (
    <main className="w-full flex flex-col overflow-hidden">
      <MovieContainer isHome={false} />
    </main>
  );
};

export default SearchPage;
