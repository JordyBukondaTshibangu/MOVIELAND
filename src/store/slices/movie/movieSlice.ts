import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchRandomMovies } from "../../../sdk/movieAPI";
import { IMovie } from "../../../interfaces/movie";


type MovieState = {
    items : IMovie[];
    item : IMovie | null;
    status : 'loading' | 'failed' | 'success';
    error : null | string
}

const movieInitialState : MovieState = {
    items : [],
    item : null,
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




/*
If there was an API call to fetch a single Movie

export const fetchMovie = createAsyncThunk<IMovie, string>('movies/fetchById', async (movieId, { rejectWithValue }) => {
    try {
      const response = await fetchMovieById(movieId);
      return response;
    } catch (error) {
      return rejectWithValue('Failed to fetch movie');
    }
  });
  */

                // Handling fetchMovie async thunk
    //   .addCase(fetchMovie.pending, (state) => {
    //    state.status = 'loading'
    //   })
    //   .addCase(fetchMovie.fulfilled, (state, action: PayloadAction<IMovie>) => {
    //     state.status = 'success';
    //     state.item = action.payload;
    //   })
    //   .addCase(fetchMovie.rejected, (state, action) => {
    //     // Optionally, handle an error in fetching a single movie
    //     state.error = action.payload as string;
    //   });