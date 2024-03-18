import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchMovie } from "../../../sdk/movieAPI";
import { IMovie } from "../../../interfaces/movie";

type SearchMovieState = {
    searchTerm : string,
    movie: IMovie | null, // Add a movie field to store the search result
    error: string | null 
}

const initialState:SearchMovieState = {
    searchTerm: "",
    movie: null,
    error: null
}

export const searchSpecificMovie = createAsyncThunk<IMovie| null, string>('movies/search', async(search) => {
    const response = await searchMovie(search);
    return response
})
const searchSlice = createSlice({
    name : 'search',
    initialState,
    reducers : {
        setSearchTerm : (state, action:PayloadAction<string>) => {
            state.searchTerm = action.payload
        },
        clearSearchTerm : (state) => {
            state.searchTerm = ''
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(searchSpecificMovie.fulfilled, (state, action : PayloadAction<IMovie| null>) => {
            state.movie = action.payload;
        })
        .addCase(searchSpecificMovie.rejected, (state, action) => {
            state.error = action.payload as string
        })
    }
});

export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;
export default searchSlice.reducer