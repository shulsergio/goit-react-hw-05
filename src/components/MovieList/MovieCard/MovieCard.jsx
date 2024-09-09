import { Link } from "react-router-dom";
import css from "./MovieCard.module.css";

export default function MovieCard({ poster, title, id }) {
  return (
    <div className={css.card}>
      <Link to={`/movies/${id}`}>
        <img
          className={css.movieImg}
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={title}
        />
      </Link>
    </div>
  );
}
