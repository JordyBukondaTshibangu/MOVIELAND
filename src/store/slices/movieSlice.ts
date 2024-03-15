import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchRandomMovies } from "../../sdk/movieAPI";
import { IMovie } from "../../interfaces/movie";


type MovieState = {
    items : IMovie[];
    status : 'loading' | 'failed' | 'success';
    error : null | string
}

const movieInitialState : MovieState = {
    items : [],
    status : 'loading',
    error : null
}

export const fetchMovies = createAsyncThunk<IMovie[], number>('movies/fetchRandom', async (quantity) => {
    const response = await fetchRandomMovies(quantity);
    return response;
})

const movieSlice = createSlice({
    name : 'movies',
    initialState : movieInitialState,
    reducers : {},
    extraReducers(builder){
        builder
        .addCase(fetchMovies.pending, (state, action) => {
            state.status = 'loading'})
        .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
            state.status = 'success';
            state.items = action.payload;
        })
        .addCase(fetchMovies.rejected,(state, action) => {
            state.status = 'failed';
            state.error = 'An error occurred'
        })
    }

})

export default movieSlice.reducer