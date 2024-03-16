import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './slices/movie/movieSlice';
import search from './slices/movie/searchSlice'

 const store = configureStore({
    reducer : {
        movies : movieReducer,
        search : search
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store