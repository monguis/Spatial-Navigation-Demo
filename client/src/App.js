import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieInfo from "./pages/MovieInfo";
import Test from "./pages/Test"

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
      {/* <Test></Test> */}
    </>
  );
}
export default App;