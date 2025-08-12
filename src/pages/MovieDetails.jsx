import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import Spinner from '../components/Spinner';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Failed to load movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <div className="error-message">{error}</div>;
  if (!movie) return <div className="not-found">Movie not found</div>;

  return (
    <div className="movie-details-container">
      <Link to="/" className="back-button">
        &larr; Back to Movies
      </Link>
      
      <div className="movie-details-content">
        <div className="movie-poster-container">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : '/no-poster.jpg'}
            alt={movie.Title}
            className="movie-poster-detail"
          />
        </div>
        
        <div className="movie-info-detail">
          <h1>{movie.Title} ({movie.Year})</h1>
          
          <div className="meta-info">
            <span className="rating">⭐ {movie.imdbRating}/10</span>
            <span>{movie.Runtime}</span>
            <span>{movie.Genre}</span>
          </div>
          
          <div className="plot-section">
            <h3>Plot</h3>
            <p>{movie.Plot}</p>
          </div>
          
          <div className="details-grid">
            <div className="detail-item">
              <h4>Director</h4>
              <p>{movie.Director}</p>
            </div>
            <div className="detail-item">
              <h4>Actors</h4>
              <p>{movie.Actors}</p>
            </div>
            <div className="detail-item">
              <h4>Language</h4>
              <p>{movie.Language}</p>
            </div>
            <div className="detail-item">
              <h4>Awards</h4>
              <p>{movie.Awards}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;