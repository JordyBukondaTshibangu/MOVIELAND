import React from "react";
import MovieContainer from "../components/container/MovieContainer";

const SearchPage: React.FC = () => {
  return (
    <main className="w-full lg:py-48 overflow-hidden">
      <MovieContainer isHome={false} />
    </main>
  );
};

export default SearchPage;
