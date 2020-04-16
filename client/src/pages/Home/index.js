import React, { useState, useEffect } from "react";
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







const Home = (props) => {
  
  
  const  [menu,setMenu] = useState([[1, 2, 3, 4, 5, 6, 7], [11, 12, 13, 14, 15, 16, 17, 18, 19],
    [21, 22, 23, 24, 25, 26, 27], [31, 32, 33, 34, 35, 36, 37]])
    
    const renderMenu = () => {return (menu.map((subMenu, index) => <MenuSlider items={subMenu} active={index === 0} />))};

  useEffect(() => {
    sortedMovies("imdbRating");
    generateCategoriesLite([{ catName: "2019" }, { catName: "asdasd" }]);
  },[]);

  const generateCategoriesLite = (categories, size) => {
    let menuMatrix = []
    for (const category of categories) {
      menuMatrix.push({
        catName: category.catName,
        members: []
      });
    }
    console.log(menuMatrix)
  }
  //here we sort movies based on an attribute that we considered the most relevant
  const sortedMovies = (relevance) => {
    let auxArr;
    API.getMovies().then(({ data }) => {
      if (data[0][relevance]) {
        if (+data[0][relevance]) {
          auxArr = data.sort((a, b) => b[relevance] - a[relevance]);
        } else {
          auxArr = data.sort((a, b) => b[relevance] < a[relevance]);
        }
      } else {
        console.log("Movies can't be sorted by that attribute");
      }
    });
  }
  const menuDown = () => {
    var auxArr = menu;
    auxArr.push(auxArr.shift());
    setMenu(auxArr);
  }

  const menuUp = () => {
    var auxArr = menu;
    auxArr.unshift(auxArr.pop());
    setMenu(auxArr);
    console.log(menu)
  }

    return (<div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
          </p>

      {renderMenu()}

      <button onClick={() => { menuUp() }}>up</button>
      <button onClick={() => { menuDown() }}>down</button>

    </div>)

  
}

export default Home;

