import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";
import { Navigation } from "../Navigation/Navigation";
import MovieDetailsPage from "../../pages/MovieDetailsPage";
import MoviePage from "../../pages/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage";

const HomePage = lazy(() => import("../../pages/HomePage"));

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/movies/:movieId/cast" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
