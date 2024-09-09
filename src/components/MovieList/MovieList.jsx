import { Link } from "react-router-dom";
import MovieCard from "./MovieCard/MovieCard";
import css from "./MovieList.module.css";
export default function MovieList({ movies }) {
  return (
    <>
      <h2 className={css.header}>Trending films today</h2>
      <ul className={css.box}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.movieItem}>
            <MovieCard
              poster={movie.poster_path}
              title={movie.title}
              id={movie.id}
            />
            {/* <Link to={`/movies/${movie.id}`}> </Link> */}
          </li>
        ))}
      </ul>
    </>
  );
}
