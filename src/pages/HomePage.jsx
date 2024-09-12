import { useEffect } from "react";
import { useState } from "react";
import { fetchMovies } from "../service/Api";
import Loader from "../components/Loader/Loader.jsx";
import { Heading } from "../components/Heading/Heading.jsx";
import Section from "../components/Section/Section.jsx";
import Container from "../components/Container/Container.jsx";
import MovieList from "../components/MovieList/MovieList.jsx";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchMovies();
        console.log("data-1");
        console.log(data);
        console.log("data.results-1");
        console.log(data.results);
        if (!data.results.length) {
          return setEmpty(true);
        }

        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log("movies-1");
  console.log(movies);
  console.log("movies.length-1");
  console.log(movies.length);
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading title="Its wrong" />}
        {<h2>Trending films today</h2>}
        {movies.length > 0 && <MovieList movies={movies} />}
        {empty && <Heading title="no movies by today, try again..." />}
      </Container>
    </Section>
  );
};

export default HomePage;
