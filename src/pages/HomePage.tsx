import React from "react";
import MovieContainer from "../components/container/MovieContainer";

const HomePage: React.FC = () => {
  return (
    <main className="w-full flex flex-col gap-20 lg:py-36 overflow-hidden">
      <MovieContainer isHome={true} />
    </main>
  );
};

export default HomePage;
