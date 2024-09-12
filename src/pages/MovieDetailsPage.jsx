import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { getMovieById } from "../service/Api";
import { Heading } from "../components/Heading/Heading";
import Loader from "../components/Loader/Loader";
import MovieDetailsCard from "../components/MovieDetailsCard/MovieDetailsCard";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state ?? "/movies");

  // console.log(movieId);
  // console.log("MovieDetailsPage location IS");
  // console.log(location.state);

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getMovieById(movieId);
        if (data) {
          setMovie(data);
        } else {
          setError("No movie found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);
  console.log("movie from data");
  console.log(movie);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading title="Its wrong" />}
        <Link to={backLink.current}>Back</Link>
        {movie && <MovieDetailsCard movie={movie} />}
      </Container>
    </Section>
  );
};
export default MovieDetailsPage;
