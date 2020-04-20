import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FavoriteContext } from "./utilities/FavoriteContext";

const App = () => {


  //here I defined the tiles I want to generate, this are sent to our home component which will take care of them in the proper manner
  const menuToLoad = [
    { title: "Top of 2019", keyToCheck: "Year", conditions: "2019", items: [], allowRedundancy: true },
    { title: "Top of 2018", keyToCheck: "Year", conditions: "2018", items: [], allowRedundancy: true },
    { title: "Mystery Drama", keyToCheck: "Genre", conditions: "Mystery, Drama", items: [], allowRedundancy: true },
    { title: "Action", keyToCheck: "Genre", conditions: "Action", items: [] },
    { title: "Fantasy", keyToCheck: "Genre", conditions: "Fantasy", items: [] },
    { title: "Thriller", keyToCheck: "Genre", conditions: "Thriller", items: [] }
  ];


  // we create a state to control our favorites array, it helps to deal with React's asynchronicity, we also create functions to 
  // make our updates in a safer and more robust way
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
    //I use a context provider since drilling to every single render item that requires the favorites info might get complicated, besides
    //I consider this User information (top priority)
      <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
              <Home menuToLoad={menuToLoad} key="HomeMenu"/>
      </FavoriteContext.Provider>
  );
}
export default App;