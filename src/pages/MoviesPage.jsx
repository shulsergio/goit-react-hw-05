import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import SearchBar from "../components/SearchBar/SearchBar";
import Section from "../components/Section/Section";
import Loader from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";
import { getMoviebyName } from "../service/Api";
import { useLocation, useSearchParams } from "react-router-dom";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  console.log("location");
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getMoviebyName(query);
        console.log("data getMoviebyName");
        console.log(data);
        if (data.results.length === 0) {
          setError("No movies found.");
        } else {
          setMovies(data.results);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  const onHandleSubmit = (searchQuery) => {
    setSearchParams({ query: searchQuery });
    setMovies([]);
  };

  return (
    <Section>
      <Container>
        <SearchBar onSubmit={onHandleSubmit} />
        {loading && <Loader />}
        {movies.length > 0 && <MovieList state={location} movies={movies} />}
        {/* {empty && <Heading title="no movies by today, try again..." />} */}
      </Container>
    </Section>
  );
};
export default MoviePage;
