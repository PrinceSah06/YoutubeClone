import React, { useEffect, useState } from "react";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";

import { toggelMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../constants/const";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";
function Header() {
  const [searchText, setSearchText] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowsuggestion] = useState(false);
   const searchChach =useSelector((store) => store.search);
  const dispatch = useDispatch();
 

  const toggelMenuHandeler = () => {
    dispatch(toggelMenu());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchChach[searchText]) {
        setSuggestion(searchChach[searchText]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchText);
    const json = await data.json();
    setSuggestion(json[1])
    dispatch(cacheResults({[searchText]:json[1]}));
    
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg ">
      <div className="flex col-span-1  ">
        <img
          onClick={() => toggelMenuHandeler()}
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg=="
          alt="menu"
        />
        <img
          className="h-15 mx-2 pb-5 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="Youtube-icon"
        />
      </div>

      <div className="col-span-10">
        <div>
          {" "}
          <input
            onFocus={() => setShowsuggestion(true)}
            onBlur={() => setShowsuggestion(false)}
            className="w-3/4 border   rounded-l-full
       border-gray-400    mt-2 px-10"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            className="px-2 border 
       border-gray-400  bg-gray-200 rounded-r-full"
          >
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed  bg-white py-2 px-5 w-216  rounded-2xl shadow-2xl">
            <ul>
              {suggestion.map((e) => (
                <li
                  key={e}
                  className=" px-1 py-2 m-1 shadow-lg border border-gray-100 hover:bg-gray-200 "
                >
                  {e}
                </li>
              ))}

              <li>ipone</li>
              <li>ipone</li>
              <li>ipone</li>
              <li>ipone</li>
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          src="https://thumbs.dreamstime.com/b/user-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-134155783.jpg"
          alt="user-icon"
        />
      </div>
    </div>
  );
}

export default Header;
