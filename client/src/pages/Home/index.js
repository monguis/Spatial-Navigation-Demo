import React, { useState, useEffect, useRef } from "react";
import API from "../../utilities/API";
import { Container } from "react-bootstrap"
import MenuSlider from "../../components/MenuSlider";
import useEventListener from '../../utilities/useEventListener';
import "./style.css";
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

  const [menu, setMenu] = useState({ selected: [0, 0], previous: [], menuGrid: [] })

  useEffect(() => {
    API.getMovies().then(({ data }) => {
      setMenu({ ...menu, menuGrid: [{ title: "array 1", items: data.slice(1, 11) }, { title: "array 2", items: data.slice(21, 31) }, { title: "array 3", items: data.slice(31, 41) }] });

    });

  }, [])

  console.log(menu.menuGrid)

  useEffect(() => {
    if (menuGrid.length > 0) {
      console.log(previous.join(","))
      if (previous.length > 0) {
        document.getElementById(previous.join(",")).classList.remove("selectedItem");
      }
      console.log(selected.join(","))
      document.getElementById(selected.join(",")).classList.add("selectedItem")
      window.location.hash = `#row${selected[0]}`
      window.location.hash = "#"+selected.join(",");
    }
  }, [menu])

  const { selected, menuGrid, previous } = menu
  // useEffect(() => {
  //   console.log("changed "+ (0 === menu.selected))

  // }, [menu.menuGrid])

  //   const selectedPlus = () => {
  //     setMenu({ ...menu, selected: 0 })
  //   }

  const moveUp = () => {
    setMenu({
      ...menu,
      previous: selected,
      selected: [selected[0] - 1, selected[1]]
    })
  }

  const moveDown = () => {
    setMenu({
      ...menu,
      previous: selected,
      selected: [selected[0] + 1, selected[1]]
    })
  }

  const moveForward = () => {
    setMenu({
      ...menu,
      previous: selected,
      selected: [selected[0], selected[1] + 1]
    })
  }

  const moveBack = () => {
    setMenu({
      ...menu,
      previous: selected,
      selected: [selected[0], selected[1] - 1]
    })
  }

  return (
    <Container fluid>
      {/* {<MenuSlider category={index} items={subMenu} ref={menu.selected === index ? menuRef:null } />)}
      
      <button onClick={() => { selectedPlus() }}>selected+1</button>  */}

      {menuGrid.map((el, row) => <MenuSlider items={el.items} category={el.title} row={row} />)}

      <button onClick={() => { moveUp() }}>up</button>
      <button onClick={() => { moveDown() }}>down</button>
      <button onClick={() => { moveForward() }}>forward</button>
      <button onClick={() => { moveBack() }}>back</button>
    </Container>
  )


}

export default Home;

