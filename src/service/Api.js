import axios from "axios";
const url = "https://api.themoviedb.org/3/trending/movie/day";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjAzOTlhZWEwZThjMzhhODI0YjRlYjUwZmI0N2FhOCIsIm5iZiI6MTcyNTgxODE1NC4zOTUyMjUsInN1YiI6IjY2ZGRkZTYwNjNiYjQxNTRmNmVjNzA4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wktgDJHwuLIw5bMdqXTjm7_T5TxEnRMoNvXtxTslE8k";
export const fetchMovies = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      query: "Greyhound", // Название фильма
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data; // Возвращаем данные
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error; // Пробрасываем ошибку дальше
  }
};
