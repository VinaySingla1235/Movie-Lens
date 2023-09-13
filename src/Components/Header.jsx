import React, { useEffect, useState } from "react";
import moon from "../assets/moon-solid.svg";
import sun from "../assets/white-sun.svg";
import useDarkSide from "./useDarkSide";
import ourLogo from "../assets/magnifyingLens.png"
import { useDispatch } from "react-redux";
import { addCategory } from "../Features/categoryFilterReducer";
import { addLanguage } from "../Features/languageFilterReducer";
const Header = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const toggleMode = (checked) => {
    setTheme(colorTheme);
  };
  const genres = [
    { id: 28, title: "Action" },
    { id: 12, title: "Adventure" },
    { id: 16, title: "Animation" },
    { id: 35, title: "Comedy" },
    { id: 80, title: "Crime" },
    { id: 99, title: "Documentary" },
    { id: 18, title: "Drama" },
    { id: 10751, title: "Family" },
    { id: 14, title: "Fantasy" },
    { id: 36, title: "History" },
    { id: 27, title: "Horror" },
    { id: 10402, title: "Music" },
    { id: 9648, title: "Mystery" },
    { id: 10749, title: "Romance" },
    { id: 878, title: "Science Fiction" },
    { id: 53, title: "Thriller" },
    { id: 10752, title: "War" },
    { id: 37, title: "Western" },
  ];
  const languages = [
    { code: 'en', title: 'English' },
    { code: 'es', title: 'Spanish' },
    { code: 'fr', title: 'French' },
    { code: 'de', title: 'German' },
    { code: 'it', title: 'Italian' },
    { code: 'pt', title: 'Portuguese' },
    { code: 'ja', title: 'Japanese' },
    { code: 'ko', title: 'Korean' },
    { code: 'zh', title: 'Chinese' },
    { code: 'ru', title: 'Russian' },
    { code: 'hi', title: 'Hindi' },
    { code: 'ar', title: 'Arabic' },
    { code: 'nl', title: 'Dutch' },
  ];
  const dispatch=useDispatch();
  const addCategoryFunc=(e)=>{
    dispatch(addCategory(genres[e.target.value]));
    const btn=document.getElementById("categoryDropdownNavbarLink")
    btn.click();
    const btn2=document.getElementById("mobile-navbar-toggle");
    btn2.click()
  }
  const addLanguageFunc=(e)=>{
    dispatch(addLanguage(languages[e.target.value]));
    const btn=document.getElementById("languageDropdownNavbarLink")
    btn.click();
    const btn2=document.getElementById("mobile-navbar-toggle");
    btn2.click()
  }
  return (
    <>
      <nav className="bg-gray-100 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src={ourLogo}
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Movie Lens
            </span>
          </a>
          <div className="flex md:order-2">
            <button onClick={toggleMode}>
              <img
                className={`h-6 w-6 ${colorTheme === "light" ? "hidden" : ""}`}
                src={moon}
                alt=""
              />
              <img
                className={`h-6 w-6 ${colorTheme === "dark" ? "hidden" : ""}`}
                src={sun}
                alt=""
              />
            </button>

            <button
              data-collapse-toggle="navbar-sticky"
              id="mobile-navbar-toggle"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              {/* category dropdown starts */}
              <li>
                <button
                  id="categoryDropdownNavbarLink"
                  data-dropdown-toggle="categoryDropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Categories
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="categoryDropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    {genres.map((genre,index)=>{
                      return <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                      value={index}
                      key={genre.id}
                      onClick={addCategoryFunc}
                      >
                      
                        {genre.title}
                      
                    </li>
                    })}
                    
                    
                  </ul>
                </div>
              </li>

              {/* category dropdown ends */}
              {/* langugae dropdown starts  */}
              <li>
                <button
                  id="languageDropdownNavbarLink"
                  data-dropdown-toggle="languageDropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Languages
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="languageDropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    {languages.map((language,index)=>{
                      return <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                      value={index}
                      key={language.code}
                      onClick={addLanguageFunc}
                      >
                      
                        {language.title}
                      
                    </li>
                    })}
                    
                    
                  </ul>
                </div>
              </li>
              {/* language dropdown ends  */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
