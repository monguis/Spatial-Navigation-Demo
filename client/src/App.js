import React,{useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieInfo from "./pages/MovieInfo";
import { FavoriteContext } from "./utilities/FavoriteContext";


const App = () => {

  const [favorites,setFavorites] = useState(["tt6751668"])
  return (
    <>
      <FavoriteContext.Provider value ={{favorites,setFavorites}}>
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