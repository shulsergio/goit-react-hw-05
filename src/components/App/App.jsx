import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";
import { Navigations } from "../Navigations/Navigations";
// import MovieDetailsPage from "../../pages/MovieDetailsPage";
// import MoviePage from "../../pages/MoviesPage";
// import NotFoundPage from "../../pages/NotFoundPage";
// import MovieCast from "../MovieCast/MovieCast";
// import MovieReviews from "../MovieReviews/MovieReviews";

const HomePage = lazy(() => import("../../pages/HomePage"));
const MoviePage = lazy(() => import("../../pages/MoviesPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));

const App = () => {
  return (
    <>
      <Navigations />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="/movies/:movieId/cast" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
