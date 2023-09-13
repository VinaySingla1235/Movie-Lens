import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import Spinner from "./Spinnner";
import Swal from 'sweetalert2'
const MovieHome = () => {
  const categoryFilter=useSelector((state)=>state.category.categoryFilter)
  const languageFilter=useSelector((state)=>state.language.languageFilter)
  const [movies, setMovies] = useState([]);
  const [heading ,setHeading]=useState("");
  const [fetching,setFetching]=useState(false);
  const isObjectEmpty=(obj)=> {
    return Object.keys(obj).length === 0;
  }
  useEffect(() => {
    if(!isObjectEmpty(languageFilter) && !isObjectEmpty(categoryFilter)){
      const url=`https://api.themoviedb.org/3/${languageFilter.languagePrefix}?api_key=f154bc038a4617e7a34f71881d492271&${languageFilter.language}&${categoryFilter.genre}`
      const heading2=`${languageFilter.languageTitle} ${categoryFilter.genreTitle} movies`
      setFetching(true)
      fetchFilter(url,heading2)
    }
    else if(!isObjectEmpty(languageFilter)){
      const url=`https://api.themoviedb.org/3/${languageFilter.languagePrefix}?api_key=f154bc038a4617e7a34f71881d492271&${languageFilter.language}`
      const heading2=`${languageFilter.languageTitle} movies`
      setFetching(true)
      fetchFilter(url,heading2)
    }
    else if(!isObjectEmpty(categoryFilter)){
      // console.log(categoryFilter);
      const url=`https://api.themoviedb.org/3/${categoryFilter.genrePrefix}?api_key=f154bc038a4617e7a34f71881d492271&${categoryFilter.genre}`
      const heading2=`${categoryFilter.genreTitle} movies`
      setFetching(true)
      fetchFilter(url,heading2)
    }
    else{
      
      setFetching(true)
      fetchPopular();
    }
  }, [categoryFilter,languageFilter]);
  const fetchFilter=async(url,heading2)=>{
    try {
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error(`Network response was not ok (status ${data.status})`);
      }
  
      const moviesF = await data.json();
      setMovies(moviesF.results);
      setHeading(heading2)
      setFetching(false);
    } catch (error) {
      // console.error("Error fetching data:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Unable to load ${heading2}`,
      })
      
      fetchPopular()
    }
  }
  const fetchPopular=async()=>{
    const url="https://api.themoviedb.org/3/movie/popular?api_key=f154bc038a4617e7a34f71881d492271&language=en-US"
    try {
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error(`Network response was not ok (status ${data.status})`);
      }
  
      const moviesF = await data.json();
      setMovies(moviesF.results);
      setHeading("Popular movies")
      setFetching(false);
    } catch (error) {
      // console.error("Error fetching data:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
    }
  }

  return (
    <>{ fetching?<Spinner/> :
      <div className="mt-40 dark:text-white flex flex-col items-center">
        <div>
        <h1 className="text-4xl md:text-6xl text-black font-bold dark:text-white ">
          {heading}
        </h1>
        </div>
        <div className="px-8">
          <div className="container grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl-grid-cols-4 mt-8">
            {movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
      </div>
}
    </>
  );
};

export default MovieHome;
