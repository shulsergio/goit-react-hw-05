import { Link, useLocation } from "react-router-dom";
import css from "./MovieCard.module.css";
const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

export default function MovieCard({ poster, title, id }) {
  const location = useLocation();
  console.log("OLD location");
  console.log(location);
  return (
    <div className={css.card}>
      <Link to={`/movies/${id}`} state={location}>
        <img
          className={css.movieImg}
          src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : defaultImg}
          alt={title}
        />
        <p className={css.title}>{title}</p>
      </Link>
    </div>
  );
}
