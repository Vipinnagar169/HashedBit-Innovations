import React from 'react';
import { useNavigate } from 'react-router-dom';
import movies from '../data/movies';

const MovieList = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Select a Movie</h1>
      <div className="grid grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="shadow-md p-4 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img src={movie.image} alt={movie.title} className="w-full h-72 object-cover mb-2" />
            <h2 className="text-lg font-semibold">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
