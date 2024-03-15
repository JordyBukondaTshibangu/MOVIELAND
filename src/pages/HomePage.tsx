import React from "react";
import { homeData, upcome } from "../data";
import MovieHero from "../components/container/MovieHero";
import MovieList from "../components/container/MovieList";

const HomePage: React.FC = () => {
  return (
    <main className="w-full flex flex-col gap-20 overflow-hidden">
      <MovieHero movies={homeData} />
      <MovieList movies={upcome} />
    </main>
  );
};

export default HomePage;
