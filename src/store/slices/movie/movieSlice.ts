import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchMovieById, fetchRandomMovies } from "../../../sdk/movieAPI";
import { IMovie } from "../../../interfaces/movie";
import axios, { AxiosError } from 'axios';

type MovieState = {
  items: IMovie[];
  item: IMovie | null;
  status: 'loading' | 'failed' | 'success';
  error: null | string;
};

const movieInitialState: MovieState = {
  items: [],
  item: null,
  status: 'loading',
  error: null
};

export const fetchMovies = createAsyncThunk<IMovie[], number>(
  'movies/fetchRandom',
  async (quantity) => {
    const response = await fetchRandomMovies(quantity);
    return response;
  }
);

export const fetchMovie = createAsyncThunk<IMovie | null, string>(
  'movies/fetchById',
  async (movieId, { rejectWithValue }) => {
    try {
      const response = await fetchMovieById(movieId);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Failed to fetch movie:", error.message);
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Failed to fetch movie');
    }
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: movieInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(fetchMovie.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovie.fulfilled, (state, action: PayloadAction<IMovie | null>) => {
        state.status = 'success';
        state.item = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  }
});

export default movieSlice.reducer;
