// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './features/movies/moviesSlice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
