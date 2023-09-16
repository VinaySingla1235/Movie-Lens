import React, { useEffect, useState } from "react";
import { genres, languages } from "../Data/filterId";
const MovieDetails = ({ isModalOpen, toggleModal, movie }) => {
  if (!isModalOpen) return null;
  // // console.log("movieDetails re rendered")
  const youtubeApiKey='AIzaSyDIR_5U-XVoul8-Hj0mf2bs5tpM29LwO2s'
  const [language,setLanguage]=useState("");
  
  const validGenres = genres.filter((genre) =>
    movie.genre_ids.includes(genre.id)
  );
  const [videoId,setvideoId]=useState(null);
  const fetchTrailer=async()=>{
    try {
      const response=await fetch(`https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&q=${movie.title}+trailer`)
      const data=await response.json();
      // console.log(data)
      const videoID = data.items[0].id.videoId;
      if(videoID){
        setvideoId(videoID);
      }
    } catch (error) {
      // console.log(error)
    }
  }
  useEffect(()=>{
    const foundLanguage = languages.filter(
      (language) => language.code === movie.original_language
    );
    if(foundLanguage.length>0){
      setLanguage(foundLanguage[0].title)
    }
    // console.log("use Effect is called");
    if(videoId===null){
      // console.log("fetching trailer");
      fetchTrailer();
    }
  },[])
  return (
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center bg-opacity-25 backdrop-blur-md"
      onClick={() => toggleModal(false)}
    >
      <div
        className="relative w-full max-w-2xl max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {movie.title}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => toggleModal(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6">
            <div className="image-video-container flex justify-center">
              {/* <img
                className="rounded-t-lg"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt=""
              /> */}
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen></iframe>
            </div>
            <div className="">
              <p className="text-lg">{movie.overview}</p>
              <div className="flex justify-start">
                <p className="inline-block my-2">
                  <span className="font-bold">Release Date : </span>
                  <span className="font-light">{movie.release_date}</span>
                </p>
                <p className="inline-block my-2 ml-8">
                  <span className="font-bold">Original Language : </span>
                  <span className="font-light">{language}</span>
                </p>
              </div>
              <div className="categories flex justify-start space-x-3 my-1">
                {validGenres.map((genre,index)=>{
                  return <div className="bg-green-400 text-white w-fit px-2 py-1 rounded-xl" key={index}>{genre.title}</div>
                })}
                
              </div>
            </div>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="button"
              onClick={() => toggleModal(false)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
