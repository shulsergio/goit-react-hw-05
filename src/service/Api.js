import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjAzOTlhZWEwZThjMzhhODI0YjRlYjUwZmI0N2FhOCIsIm5iZiI6MTcyNTgxODE1NC4zOTUyMjUsInN1YiI6IjY2ZGRkZTYwNjNiYjQxNTRmNmVjNzA4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wktgDJHwuLIw5bMdqXTjm7_T5TxEnRMoNvXtxTslE8k";
export const fetchMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/week";
  const options = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  };

  try {
    const { data } = await axios.get(url, options);
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const getMovieById = async (movieId) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    throw error;
  }
};

export const getMovieInfo = async (movieId, data) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}/${data}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    throw error;
  }
};

export const getMoviebyName = async (query) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: query,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    throw error;
  }
};
