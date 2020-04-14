import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios"
import Home from "./pages/Home"
axios.get('/').then((data) =>{
  console.log(data);
})


function App() {

  return (
    <>
    <Router  >
        <Switch>
          <Route exact path={["/","/home"]}>
            <Home />
          </Route>
        </Switch>
    </Router>
 </>
  );
}
export default App;