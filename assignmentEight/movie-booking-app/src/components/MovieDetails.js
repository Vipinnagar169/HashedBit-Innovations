import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../data/movies';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <img src={movie.image} alt={movie.title} className="my-4 w-64 h-96" />
      <p className="mb-4">{movie.description}</p>
      <button
        onClick={() => navigate(`/book/${movie.id}`)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Book Seat
      </button>
    </div>
  );
};

export default MovieDetails;
