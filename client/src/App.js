import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieInfo from "./pages/MovieInfo";
import API from "./utilities/API"

function App() {
  return (
    <>
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
    </>
  );
}
export default App;