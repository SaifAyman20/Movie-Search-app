import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Spinner from "../components/Spinner";
import { searchMovies } from "../services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const results = await searchMovies(query);
      setMovies(results);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Failed to fetch movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      <h1>Movie Search</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <Spinner />}
      {error && <p className="error">{error}</p>}
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        !loading && <p>No movies found. Try searching for a movie!</p>
      )}
    </div>
  );
};

export default Home;
