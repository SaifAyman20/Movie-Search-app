import axios from "axios";

const API_URL = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apikey: API_KEY,
        s: query,
        type: "movie",
      },
    });
    return response.data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apikey: API_KEY,
        i: id,
        plot: "full",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
