import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectedMovieById = createSelector(
    [(state: RootState, movieId: string) => state.movies.items.find((movie) => movie.IMDB_ID === movieId)],
    (movie) => movie)