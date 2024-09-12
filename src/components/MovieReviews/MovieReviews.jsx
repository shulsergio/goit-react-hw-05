import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieInfo } from "../../service/Api";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const addUrl = "reviews";

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getMovieInfo(movieId, addUrl);
        if (data) {
          setReviews(data.results);
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
  console.log("reviews from movie data");
  console.log(reviews);

  return (
    <>
      {isLoading && <Loader />}
      {reviews.length == 0 && <p>No reviews for this movie</p>}
      {reviews.length > 0 && (
        <ul className={css.list}>
          {reviews.map((item) => (
            <li key={item.id} className={css.box}>
              <p>
                <span className={css.text}>Author: </span>
                {item.author}
              </p>
              <p>
                <span className={css.text}>Review: </span> {item.content}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default MovieReviews;
