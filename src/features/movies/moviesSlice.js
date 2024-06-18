import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [
    {
      id: Date.now().toString(),
      title: "Example Movie",
      description: "This is an example movie description.",
      releaseYear: 2021,
      genre: "Drama",
      watched: false,
      rating: 4,
      review: "Good movie",
    },
  ],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
    },
    toggleWatched: (state, action) => {
      const movie = state.movies.find(movie => movie.id === action.payload);
      if (movie) {
        movie.watched = !movie.watched;
      }
    },
    updateMovie: (state, action) => {
      const index = state.movies.findIndex(movie => movie.id === action.payload.id);
      if (index !== -1) {
        state.movies[index] = action.payload;
      }
    },
    rateMovie: (state, action) => {
      const { id, rating } = action.payload;
      const movie = state.movies.find(movie => movie.id === id);
      if (movie) {
        movie.rating = rating;
      }
    },
    reviewMovie: (state, action) => {
      const { id, review } = action.payload;
      const movie = state.movies.find(movie => movie.id === id);
      if (movie) {
        movie.review = review;
      }
    },
  },
});

export const {
  addMovie,
  deleteMovie,
  toggleWatched,
  updateMovie,
  rateMovie,
  reviewMovie,
} = moviesSlice.actions;

export default moviesSlice.reducer;
