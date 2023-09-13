import { useState } from "react";
import Header from "./Components/Header";
import MovieHome from "./Components/MovieHome";
import SearchBar from "./Components/SearchBar";

function App() {
  

  return (
    <div className="dark:bg-black dark:text-white">
      <Header/>
      <SearchBar/>
      <MovieHome/>
    
    </div>
  );
}

export default App;
