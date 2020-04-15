import React, { Component } from "react";
import logo from "./logo.svg";
import API from "../../utilities/API"
import MenuSlider from "../../components/MenuSlider";
// let arrayee1 = [1, 2, 3, 4, 5, 6, 7];
// let arrayee2 = [11, 12, 13, 14, 15, 16, 17];
// let arrayee3 = [21, 22, 23, 24, 25, 26, 27];
// let arrayee4 = [31, 32, 33, 34, 35, 36, 37];
// let menuMatrix = [arrayee1, arrayee2, arrayee3, arrayee4]


//here we sort movies based on an attribute that we considered the most relevant
// sortedMovies = (relevance) => {
//   let auxArr;
//   API.getMovies().then(({ data }) => {
//     if (data[0][relevance]) {
//       if (+data[0][relevance]) {
//         auxArr = data.sort((a, b) => b[relevance] - a[relevance]);
//       } else {
//         auxArr = data.sort((a, b) => b[relevance] < a[relevance]);
//       }
//       console.log(auxArr);
//     } else{ 
//       console.log("Movies can't be sorted by that attribute");
//   }
//   });
// }
// ["Top of 2019","Top of 2018","Mystery ","Drama","Action","Fantasy","Thriller"]

const renderMenu = (sections) => {}






class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {menu:[[1, 2, 3, 4, 5, 6, 7],[11, 12, 13, 14, 15, 16, 17,18,19], [21, 22, 23, 24, 25, 26, 27],[31, 32, 33, 34, 35, 36, 37]]}
  }

  componentDidMount(){
    this.sortedMovies("imdbRating");
    this.generateCategoriesLite([{catName:"2019"},{catName:"asdasd"}]);
  }
generateCategoriesLite = (categories,size) =>{
  let menuMatrix = []
  for(const category of categories){
    menuMatrix.push({
      catName:category.catName,
      members:[]
    });
  }
  console.log(menuMatrix)
}
  //here we sort movies based on an attribute that we considered the most relevant
sortedMovies = (relevance) => {
  let auxArr;
  API.getMovies().then(({ data }) => {
    if (data[0][relevance]) {
      if (+data[0][relevance]) {
        auxArr = data.sort((a, b) => b[relevance] - a[relevance]);
      } else {
        auxArr = data.sort((a, b) => b[relevance] < a[relevance]);
      }
    } else{ 
      console.log("Movies can't be sorted by that attribute");
  }
  });
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

        <MenuSlider items={this.state.menu[1]}/>
      </div>
    );
  }
}

export default Home;
