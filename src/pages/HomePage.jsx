import { useEffect } from "react";
import { useState } from "react";
import { fetchMovies } from "../service/Api";
import Loader from "../components/Loader/Loader.jsx";
import { Heading } from "../components/Heading/Heading.jsx";

const HomePage = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {

        const fetchData = async () => {
                  setIsLoading(true);
            setError(null);
            try {
                const data = await fetchMovies("Inception");
                console.log('data');
                console.log(data);
            } catch (error) {
                setError(error);
            }
            finally {
               setIsLoading(false);  
            }

        }

        fetchData();
    },[])


    return (
    <>
{isLoading && <Loader/>}
        {error && <Heading title="Its wrong"/>}     
  </>  )


}

export default HomePage;