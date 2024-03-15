import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRandomMovies } from "../../sdk/movieAPI";

export const fetchMovies = createAsyncThunk('movies/fetchRandom', async () => {
    const response = await fetchRandomMovies(10);
    return response;
})

const movieSlice = createSlice({
    name : 'movies',
    initialState : {
        items : [],
        status : 'idle',
        error : null
    },
    reducers : {},
    extraReducers(builder){
        builder
        .addCase(fetchMovies.pending, (state, action) => {
            state.status = 'loading'})
        .addCase(fetchMovies.fulfilled, (state, action) => {
            state.status = 'loading';
            state.items = action.payload;
        })
        .addCase(fetchMovies.rejected,(state, action) => {
            state.status = 'failed';
            // state.error = action.error.message
        })
    }

})

export default movieSlice.reducer