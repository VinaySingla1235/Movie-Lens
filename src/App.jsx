import { useState } from "react";
import Header from "./Components/Header";
import MovieHome from "./Components/MovieHome";
import SearchBar from "./Components/SearchBar";
import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
function App() {
  

  return (
    <BrowserRouter>
    <div className="dark:bg-black dark:text-white">
      <Header/>
      <Routes>
        <Route path="/" element={<><SearchBar/>
        <MovieHome/>
        </>}/>
        <Route path="/search" element={<>
        <SearchBar/><MovieHome/>
        </>}/>
      </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
