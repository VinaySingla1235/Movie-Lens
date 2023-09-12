import { useState } from "react";
import Header from "./Components/Header";
import MovieHome from "./Components/MovieHome";
function App() {
  

  return (
    <div className="dark:bg-black dark:text-white">
      <Header/>
      <MovieHome/>
    
    </div>
  );
}

export default App;
