import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
const MovieHome = () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=f154bc038a4617e7a34f71881d492271&language=en-US&page=1";
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  };
  return (
    <>
      <div className="mt-24 dark:text-white flex flex-col items-center">
        <div>
        <h1 className="text-4xl md:text-6xl text-black font-bold dark:text-white ">
          Popular Movies
        </h1>
        </div>
        <div className="px-8">
          <div className="container grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl-grid-cols-4 mt-8">
            {popular.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieHome;
