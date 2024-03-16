import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";


const selectedMovies = (state:RootState) => state.movies.items;
const selectSearchTerm = (state:RootState) => state.search.searchTerm;

export const selectFilteredMovies = createSelector(
    [selectedMovies, selectSearchTerm],
    (movies, searchTerm) => {
        if(!searchTerm) return movies;

        return movies.filter(movie => 
            movie.TITLE.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || 
            movie.ACTORS.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    }
)

export const selectedMovieById = createSelector(
    [(state: RootState, movieId: string) => state.movies.items.find((movie) => movie.IMDB_ID === movieId)],
    (movie) => movie)