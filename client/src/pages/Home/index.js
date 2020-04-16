import React, { useState, useEffect, useRef } from "react";
import API from "../../utilities/API"
import MenuSlider from "../../components/MenuSlider";
import useEventListener from '../../utilities/useEventListener';

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



// const ESCAPE_KEYS = ['27', 'Escape'];


//   function handler( event ) {
//       const {key} = event
//       if(String(key)!=="F5"&&menuFocus){
//           console.log(String(key))
//         switch(String(key)){
//             case "ArrowRight":
//                 moveForward();
//             break;
//             case "ArrowLeft":
//                 moveBack();
//             break;
//             default:
//         }

//     event.preventDefault();
//     event.stopPropagation();
//     if (ESCAPE_KEYS.includes(String(key))) {
//       console.log('Escape key pressed!');
//     }}
//   }

//   useEventListener('keydown', handler);


// const sortedMovies = (relevance) => {
//   let auxArr;
//   API.getMovies().then(({ data }) => {
//     if (data[0][relevance]) {
//       if (+data[0][relevance]) {
//         auxArr = data.sort((a, b) => b[relevance] - a[relevance]);
//       } else {
//         auxArr = data.sort((a, b) => b[relevance] < a[relevance]);
//       }
//     } else {
//       console.log("Movies can't be sorted by that attribute");
//     }
//   });
// }


const Home = (props) => {

  const menuRef = useRef();

  // useEventListener('keydown', rehandler);
  
  const [menu, setMenu] = useState({ selected: 1, menuGrid: [{ category: "2019", items: [1, 2, 3] }, { category: "2018", items: [1, 2, 3, 4, 5, 6, 7] }, { category: "2017", items: [1, 2, 3, 4, 5, 6, 7] }, { category: "2016", items: [1, 2, 3, 4, 5, 6, 7] }] })

  const selectedPlus = () => {
    setMenu({ ...menu, selected: 0 })
  }



  return (
    <>
      {menu.menuGrid.map((subMenu, index) => <MenuSlider items={subMenu.items} active={index === menu.selected} />)}
      <button onClick={() => { selectedPlus() }}>selected+1</button>
    </>
  )


}

export default Home;

