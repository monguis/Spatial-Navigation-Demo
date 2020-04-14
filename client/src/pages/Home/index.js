import React, { Component } from "react";
import logo from "./logo.svg";

// let arrayee1 = [1, 2, 3, 4, 5, 6, 7];
// let arrayee2 = [11, 12, 13, 14, 15, 16, 17];
// let arrayee3 = [21, 22, 23, 24, 25, 26, 27];
// let arrayee4 = [31, 32, 33, 34, 35, 36, 37];
// let menuMatrix = [arrayee1, arrayee2, arrayee3, arrayee4]


const menuUp = () => {

}

const menuDown = () => {

}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {menu:[[1, 2, 3, 4, 5, 6, 7],[11, 12, 13, 14, 15, 16, 17], [21, 22, 23, 24, 25, 26, 27],[31, 32, 33, 34, 35, 36, 37]]}
  }

  menuBack = () => {
    var auxArr = this.state.menu;
    auxArr[0].unshift(auxArr[0].pop());
    this.setState({menu:auxArr});
  }

  menuDown = () => {
    var auxArr = this.state.menu;
    auxArr.push(auxArr.shift());
    this.setState({menu:auxArr});
  }

  menuForward = () => {
    var auxArr = this.state.menu;
    auxArr[0].push(auxArr[0].shift());
    this.setState({menu:auxArr});
  }
  menuUp = () => {
    var auxArr = this.state.menu;
    auxArr.unshift(auxArr.pop());
    this.setState({menu:auxArr});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <div>
    {this.state.menu[0].map(element =><div>{element}</div>)}
          </div>
          <div>
    {this.state.menu[1].map(element =><div>{element}</div>)}
          </div>
          <div>
    {this.state.menu[2].map(element =><div>{element}</div>)}
          </div>
          <div>
    {this.state.menu[3].map(element =><div>{element}</div>)}
          </div>
     


        <button onClick={() => { this.menuUp() }}>up</button>
        <button onClick={() => { this.menuDown() }}>down</button>
        <button onClick={() => { this.menuForward() }}>forward</button>
        <button onClick={() => { this.menuBack() }}>back</button>
      </div>
    );
  }
}

export default Home;
