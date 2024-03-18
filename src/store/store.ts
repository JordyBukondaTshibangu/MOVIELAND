import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './slices/movie/movieSlice';
import searchReducer from './slices/movie/searchSlice'
import errorReducer from "./slices/error/errorSlice";
import { errorMiddleware } from "./middleware/errorMiddleware";

 const store = configureStore({
    reducer : {
        movies : movieReducer,
        search : searchReducer,
        error : errorReducer
    },
    middleware : (buildGetDefaultMiddleware) => buildGetDefaultMiddleware().concat(errorMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store