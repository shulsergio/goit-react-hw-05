import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieInfo } from "../../service/Api";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";
import Section from "../Section/Section";
import Container from "../Container/Container";
const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
const MovieCast = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const addUrl = "credits";
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getMovieInfo(movieId, addUrl);
        if (data) {
          setActors(data.cast);
        } else {
          setError("No data about actors for this movie");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  console.log("actors from movie data");
  console.log(actors);

  return (
    <>
      <Section>
        <Container>
          {isLoading && <Loader />}
          {actors.length > 0 && (
            <ul className={css.actorsList}>
              {actors.map((actor) => (
                <li key={actor.cast_id} className={css.card}>
                  <img
                    className={css.movieImg}
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                        : defaultImg
                    }
                    alt={actor.name}
                  />
                  <p className={css.title}>{actor.name}</p>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </Section>
    </>
  );
};
export default MovieCast;
