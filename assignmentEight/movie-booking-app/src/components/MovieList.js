import { Link } from 'react-router-dom';
import movies from '../data/movies';

export default function MovieList() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        padding: '20px'
      }}
    >
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div
            style={{
              cursor: 'pointer',
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <img src={movie.image} alt={movie.title} style={{ width: '100%', borderRadius: '10px' }} />
            <h2>{movie.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
