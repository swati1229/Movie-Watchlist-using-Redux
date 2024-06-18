import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, updateMovie } from '../features/movies/moviesSlice';
import { useParams, useNavigate } from 'react-router-dom';

const MovieForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movies.movies);
  const [movieData, setMovieData] = useState({
    title: '',
    description: '',
    releaseYear: '',
    genre: '',
    watched: false,
    rating: 0,
    review: '',
  });

  useEffect(() => {
    if (id) {
      const movie = movies.find((movie) => movie.id == id); // Parse id to integer
      if (movie) setMovieData(movie);
    }
  }, [id, movies]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateMovie({ ...movieData, id }));
    } else {
      dispatch(addMovie({ ...movieData, id: Date.now().toString() }));
    }
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={movieData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            value={movieData.description}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <label htmlFor="releaseYear" className="block text-sm font-medium text-gray-700">
            Release Year
          </label>
          <input
            type="number"
            name="releaseYear"
            id="releaseYear"
            placeholder="Release Year"
            value={movieData.releaseYear}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <input
            type="text"
            name="genre"
            id="genre"
            placeholder="Genre"
            value={movieData.genre}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
            Rating (1-5)
          </label>
          <input
            type="number"
            name="rating"
            id="rating"
            placeholder="Rating (1-5)"
            value={movieData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">
            Review
          </label>
          <textarea
            name="review"
            id="review"
            placeholder="Review"
            value={movieData.review}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {id ? 'Update' : 'Add'} Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
