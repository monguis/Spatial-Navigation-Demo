import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieInfo from "./pages/MovieInfo";


axios.get('/api/movies').then((data) =>{
  console.log(data);
})


function App() {

  return (
    <>
    <Router  >
        <Switch>
          <Route exact path={["/","/home"]}>
            <Home />
            <MovieInfo/>
          </Route>
        </Switch>
    </Router>
 </>
  );
}
export default App;