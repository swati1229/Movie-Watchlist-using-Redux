import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id == (id))
  );

  if (!movie) {
    return <div className="text-red-500">Movie not found</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-lg bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
        <p className="text-lg mb-2">{movie.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-gray-700 mb-2"><span className="font-semibold">Release Year:</span> {movie.releaseYear}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Genre:</span> {movie.genre}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Status:</span> {movie.watched ? 'Watched' : 'Unwatched'}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Rating:</span> {movie.rating}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Review:</span> {movie.review}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
