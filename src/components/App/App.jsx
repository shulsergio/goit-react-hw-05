import { Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import("../../pages/HomePage"));


const App = () => {



  return(
    <>
      <div>
        <p>HW5</p>
      </div>
      <Suspense fallback={<Loader />}>
    <Routes>
    <Route path="/" element={<HomePage />} />
    </Routes>
</Suspense>
    </>
  )
}
export default App;
