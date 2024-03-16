import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './slices/movie/movieSlice';
// import { useDispatch } from 'react-redux'

 const store = configureStore({
    reducer : {
        movies : movieReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch

export default store