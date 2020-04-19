import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FavoriteContext } from "./utilities/FavoriteContext";

const App = () => {

  const menuToLoad = [
    { title: "Top of 2019", keyToCheck: "Year", conditions: "2019", items: [], allowRedundancy: true },
    { title: "Top of 2018", keyToCheck: "Year", conditions: "2018", items: [], allowRedundancy: true },
    { title: "Mystery Drama", keyToCheck: "Genre", conditions: "Mystery, Drama", items: [], allowRedundancy: true },
    { title: "Action", keyToCheck: "Genre", conditions: "Action", items: [] },
    { title: "Fantasy", keyToCheck: "Genre", conditions: "Fantasy", items: [] },
    { title: "Thriller", keyToCheck: "Genre", conditions: "Thriller", items: [] }
  ];

  const [favorites, setFavorites] = useState([])

  const removeFavorite = (id) => {

    if (favorites.indexOf(id) !== -1) {
      let auxArr = favorites;
      auxArr.splice(auxArr.indexOf(id), 1);
      setFavorites(auxArr);
    }
  }

  const addFavorite = (movie) => {
    if (favorites.indexOf(movie) === -1) {
      let auxArr = favorites;
      auxArr.push(movie)
      setFavorites(auxArr);
    }
  }

  return (
      <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
              <Home menuToLoad={menuToLoad}/>
      </FavoriteContext.Provider>
  );
}
export default App;