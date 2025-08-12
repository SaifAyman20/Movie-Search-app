import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const MovieCard = ({ movie }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(movie.imdbID);

  const handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    favorite ? removeFavorite(movie.imdbID) : addFavorite(movie);
  };

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`} className="movie-link">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Poster"
          }
          alt={movie.Title}
          width="300"
          height="450"
          loading="lazy"
          className="movie-poster"
        />
        <div className="movie-info">
          <h3 className="movie-title">{movie.Title}</h3>
          <p className="movie-year">{movie.Year}</p>
        </div>
      </Link>
      <button
        onClick={handleFavorite}
        className={`favorite-btn ${favorite ? "active" : ""}`}
        aria-pressed={favorite}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </div>
  );
};

export default MovieCard;
