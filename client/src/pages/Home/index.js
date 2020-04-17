import React, { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utilities/API";
import { Container } from "react-bootstrap"
import MenuSlider from "../../components/MenuSlider";
import useEventListener from '../../utilities/useEventListener';
import "./style.css";



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

  const [menu, setMenu] = useState({ selected: { x: 0, y: 0 }, previous: { x: 0, y: 0 }, menuGrid: [], redirect: false })

  useEffect(() => {
    API.getMovies().then(({ data }) => {
      setMenu({ ...menu, menuGrid: [{ title: "array 1", items: data.slice(1, 11) }, { title: "array 2", items: data.slice(21, 31) }, { title: "array 3", items: data.slice(31, 41) }] });
      window.location.hash = "#" + selected.x + "," + selected.y;
      window.location.hash = "#row" + selected.x;
    });
  }, [])

  useEffect(() => {
    if (menuGrid.length > 0) {
      console.log(previous)
      console.log(selected)
      document.getElementById(previous.x + "," + previous.y).classList.remove("selectedItem");
      document.getElementById(selected.x + "," + selected.y).classList.add("selectedItem");
      window.location.hash = "#" + selected.x + "," + selected.y;
      window.location.hash = "#row" + selected.y;
    }
  }, [menu])

  const { selected, menuGrid, previous } = menu

  const validKeys = ['ArrowDown', 37, "ArrowUp", 38, "ArrowRight", 39, "ArrowLeft", 40, 13, "Enter"];


  function handler(event) {
    const { key } = event
    console.log(String(key))
    if (validKeys.includes(String(key))) {
      switch (String(key)) {
        case "ArrowRight":
          moveForward();
          break;
        case "ArrowLeft":
          moveBack();
          break;
        case "ArrowUp":
          moveUp();
          break;
        case "ArrowDown":
          moveDown();
          break;
        case "Enter":
          setMenu({ ...menu, redirect: true })
          break;
        default:
          return;
      }
      event.preventDefault();
      event.stopPropagation();
    }
  }
  useEventListener('keydown', handler);



  const moveUp = () => {
    if (selected.y > 0) {
      setMenu({
        ...menu,
        previous: selected,
        selected: { ...selected, y: selected.y - 1 }
      })
    }
  }

  const moveDown = () => {
    if (selected.y < menuGrid.length - 1) {
      setMenu({
        ...menu,
        previous: selected,
        selected: { ...selected, y: selected.y + 1 }
      })
    }
  }

  const moveForward = () => {
    if (selected.x < menuGrid[selected.y].items.length - 1) {
      setMenu({
        ...menu,
        previous: selected,
        selected: { ...selected, x: selected.x + 1 }
      })
    }
  }

  const moveBack = () => {
    if (selected.x > 0) {
      setMenu({
        ...menu,
        previous: selected,
        selected: { ...selected, x: selected.x - 1 }
      })
    }
  }


  const renderRedirect = () => {
    if (menu.redirect) {
      return <Redirect to={{ pathname: '/movie', test: "holi" } } />
    }
  }
  return (
    <>
      {renderRedirect()}

      <Container fluid>

        {menuGrid.map((el, row) => <MenuSlider items={el.items} category={el.title} row={row} />)}

      </Container>
    </>
  )


}

export default Home;
