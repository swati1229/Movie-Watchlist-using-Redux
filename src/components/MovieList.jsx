import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMovie, toggleWatched } from '../features/movies/moviesSlice';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      dispatch(deleteMovie(id));
    }
  };

  const handleToggleWatched = (id) => {
    dispatch(toggleWatched(id));
  };


  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Movie Watchlist</h1>
      <Link to="/add" className="bg-blue-500 text-white py-2 px-4 rounded mb-4 inline-block">Add Movie</Link>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className="bg-gray-100 rounded-lg p-4 mb-4">
            <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-700 mb-2">{movie.description}</p>
            <p className="text-gray-700 mb-2">Release Year: {movie.releaseYear}</p>
            <p className="text-gray-700 mb-2">Genre: {movie.genre}</p>
            <p className="text-gray-700 mb-2">Status: {movie.watched ? 'Watched' : 'Unwatched'}</p>
            <button onClick={() => handleToggleWatched(movie.id)} className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Toggle Watched</button>
            <button onClick={() => handleDelete(movie.id)} className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
            <Link to={`/edit/${movie.id}`} className="bg-green-500 text-white py-1 px-2 rounded ml-2">Edit</Link>
            <Link to={`/details/${movie.id}`} className="bg-yellow-500 text-white py-1 px-2 rounded ml-2">Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
