import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import Spinner from "./Spinnner";
const MovieHome = () => {
  const categoryFilter=useSelector((state)=>state.categoryFilter)
  const [movies, setMovies] = useState([]);
  const [heading ,setHeading]=useState("");
  const [fetching,setFetching]=useState(false);
  const isObjectEmpty=(obj)=> {
    return Object.keys(obj).length === 0;
  }
  
  useEffect(() => {
    if(!isObjectEmpty(categoryFilter)){
      const url=`https://api.themoviedb.org/3/${categoryFilter.genrePrefix}?api_key=f154bc038a4617e7a34f71881d492271&${categoryFilter.genre}`
      setHeading(`${categoryFilter.genreTitle} movies`)
      setFetching(true)
      fetchFilter(url)
    }
    else{
      const url="https://api.themoviedb.org/3/movie/popular?api_key=f154bc038a4617e7a34f71881d492271&language=en-US"
      setHeading("Popular Movies");
      setFetching(true)
      fetchFilter(url);
    }
  }, [categoryFilter]);
  const fetchFilter=async(url)=>{
    const data = await fetch(url);
    const moviesF = await data.json();
    setMovies(moviesF.results);
    setFetching(false);
  }
  return (
    <>{ fetching?<Spinner/> :
      <div className="mt-24 dark:text-white flex flex-col items-center">
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
