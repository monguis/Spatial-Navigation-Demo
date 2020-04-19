import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieInfo from "./pages/MovieInfo";
import { FavoriteContext } from "./utilities/FavoriteContext";


const App = () => {

  const [favorites, setFavorites] = useState([])

  const removeFavorite = (id) => {

    if (favorites.indexOf(id) !== -1) {
      let auxArr = favorites;
      auxArr.splice(auxArr.indexOf(id), 1);
      setFavorites(auxArr);
    }
  }

  const addFavorite = (id) => {
    if (favorites.indexOf(id) === -1) {
      let auxArr = favorites;
      auxArr.push(id)
      setFavorites(auxArr);
    }
  }

  return (
    <>
      <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
        <Router  >
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route exact path={["/movie"]}>
              <MovieInfo />
            </Route>
          </Switch>
        </Router>
      </FavoriteContext.Provider>
      {/* <Test></Test> */}
    </>
  );
}
export default App;