import React, { useState, useEffect, useContext, useRef } from "react";
import API from "../../utilities/API";
import { Container } from "react-bootstrap"
import MenuSlider from "../../components/MenuSlider";
import useEventListener from '../../utilities/useEventListener';
import MovieInfo from "../MovieInfo/";
import { FavoriteContext } from "../../utilities/FavoriteContext";
import "./style.css";

const Home = (props) => {

  //here we declare variables to use and desctructure props sent from app.js we also store the codes for valid keys;
  const [menu, setMenu] = useState({ selected: { x: 0, y: 0 }, previous: { x: 0, y: 0 }, menuGrid: [], gridStack: [], favChaged: false, redirect: false })
  const { favorites, addFavorite, removeFavorite } = useContext(FavoriteContext);
  const { selected, menuGrid, previous, favChaged } = menu

  const validKeys = ['ArrowDown', 37, "ArrowUp", 38, "ArrowRight", 39, "ArrowLeft", 40, "Enter", 13, "Escape", 27];

  const { menuToLoad } = props;


  // I use this ref to have direct control of a heart icon directly inside movieInfo page, this helps me to have a better control when we
  // update our favorites context
  const movieRef = useRef(null)

  //useEffect section:

  // this use effect runs when this component is invoked, here the component makes a http request that sends all movies, then movies are sorted 
  // and classify in their respective shelves, also set the attention to the first element of the dom, we also create an empty array to serve as
  // buffer stack that way the app saves the items that have been discarded.
  useEffect(() => {
    API.getMovies().then(({ data }) => {
      data.sort(sortByRelevance);
      createCategories(data, menuToLoad);
      setMenu({ ...menu, menuGrid: [...menuToLoad, { title: "Favorites", items: [] }], gridStack: [...menuToLoad.map(stack => []), []] });
      window.location.hash = "#" + 0 + "," + selected.y;
      window.location.hash = "#row" + selected.y;
    });
    return () => {
    };
  }, [])

  // // this useEffect runs every time our state changes sending attention to the right element in the DOM. If there is no valid tile
  // this function will check for the next valid tile based on a few conditionals

  useEffect(() => {
    if (menuGrid.length > 0 && !menu.redirect) {
      if (!document.getElementById(0 + "," + selected.y)) {
        if (menu.gridStack[selected.y].length > 0 && menuGrid[selected.y].items.length === 0) {
          let auxArr = menuGrid;
          let auxArr2 = menu.gridStack;
          auxArr[selected.y].items.unshift(auxArr2[selected.y].pop());
          setMenu({ ...menu, menuGrid: auxArr, gridStack: auxArr2 });
        } else {
          setMenu({ ...menu, selected: { ...selected, y: selected.y - 1 } })
        }
      } else {
        document.getElementById(0 + "," + previous.y).classList.remove("selectedItem");
        document.getElementById(0 + "," + selected.y).classList.add("selectedItem");
        window.location.hash = "#" + selected.x + "," + selected.y;
        window.location.hash = "#row" + selected.y;
      }
    }
  }, [menu])

  //functions section:


  // here we sort movies based on an attribute that we considered the most relevant, I based this by multiplying imdbVotes
  // with the imdbRating
  const sortByRelevance = (a, b) => {
    return (parseFloat(b.imdbVotes) * parseFloat(b.imdbRating)) - (parseFloat(a.imdbVotes) * parseFloat(a.imdbRating))
  }


  // once we got our movies sorted we classify them with this function. The function takes an array of objects (sent throug props from app.js)and each 
  //object contains a title which is the name of the shelf, an empty array, the key is looking to compare and and the value that
  //the key has to contain to be valid, alternatively, each object can have an extra boolean attribute called allowRedundance that 
  // prevents movies to be many times in the menu grid, this works on cascade so once you forbid redundance, movies won't repeat below
  const createCategories = (movies, categoriesArray) => {
    movies.forEach(movie => {
      for (const category of categoriesArray) {
        let match = false;

        for (const condition of category.conditions.split(", ")) {
          match = movie[category.keyToCheck].includes(condition);
          if (!match)
            break;
        }

        if (match) {
          category.items.push(movie);
          if (!category.allowRedundancy) {
            break;
          }
        }
      }
    });
  };

  // here we call an events listener with that will handle keydown events

  function handler(event) {
    const { key } = event;
    if (validKeys.includes(String(key))) {
      if (!menu.redirect) {
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
      } else {
        switch (String(key)) {
          case "Escape":
            backToMenu()
            break;
          case "Enter":
            toggleFavorite()
            break;
          default:
            return;

        }
      }

      event.preventDefault();
      event.stopPropagation();
    }
  }

  useEventListener('keydown', handler);


  //below you find the functions that manipulate the menu state

  // this functions help to change our selectors, horizontal ones change the value on the state by popping or shifting arrays
  // vertical ones select the row we are in based on the information generated in the dom
  const moveUp = () => {
    if (document.getElementById("row" + (selected.y)).previousElementSibling) {
      setMenu({
        ...menu,
        previous: selected,
        selected: { ...selected, y: document.getElementById("row" + (selected.y)).previousElementSibling.id.replace("row", "") }
      })
    }
  }

  const moveDown = () => {
    if (document.getElementById("row" + (selected.y)).nextElementSibling) {
      setMenu({
        ...menu,
        previous: selected,
        selected: { ...selected, y: document.getElementById("row" + (selected.y)).nextElementSibling.id.replace("row", "") }
      })
    }
  }

  const moveForward = () => {
    if (menuGrid[selected.y].items.length > 1) {
      let auxArr = menuGrid;
      let auxArr2 = menu.gridStack;
      auxArr2[selected.y].push(auxArr[selected.y].items.shift());
      setMenu({ ...menu, menuGrid: auxArr, gridStack: auxArr2 });
    }
  }

  const moveBack = () => {
    if (menu.gridStack[selected.y].length > 0) {
      let auxArr = menuGrid;
      let auxArr2 = menu.gridStack;
      auxArr[selected.y].items.unshift(auxArr2[selected.y].pop());
      setMenu({ ...menu, menuGrid: auxArr, gridStack: auxArr2 });
    }
  }

// backToMenu is called every time we press escape inside the MovieInfo page, this function is responsible of checking if the user wants to
// add a movie to favorites 

  const backToMenu = () => {
    if (menu.redirect) {
      if (favChaged) {
        addFavorite(menuGrid[selected.y].items[0]);
      } else {
        removeFavorite(menuGrid[selected.y].items[0]);
      }
    }
    let auxArr = menuGrid;
    auxArr[auxArr.length - 1].items = favorites;
    setMenu({ ...menu, redirect: false, favChanged: false, menuGrid: auxArr });
  }

  //here we change the heart icon inside the movieInfo page and by doing that we tell the state if we want to manipulate our favorites array
  // this also helps to have a better control of when we check to favorites,
  // I use a ref inside movieInfo to have direct control of heart icon properties
  const toggleFavorite = () => {
    if (movieRef.current.classList.contains("far")) { //true to false
      movieRef.current.classList.replace("far", "fas");
      setMenu({ ...menu, favChaged: true });
    } else {
      movieRef.current.classList.replace("fas", "far"); //false to true
      setMenu({ ...menu, favChaged: false });
    }

  }


  return (
    <>

      {/* this component can render wether the info page of a movie or the menuGrid */}
      {menu.redirect ? (

        <Container fluid>

          <MovieInfo movie={menuGrid[selected.y].items[0]} inRef={movieRef} faved={!favorites.includes(menuGrid[selected.y].items[selected.x])} toggleFavorite={toggleFavorite} />

        </Container>)

        : (
          <Container fluid>
            {/* this component renders menu rows depending on the size of the menuGrid, is a row is empty, it wont be display */}
            {menuGrid.map((el, row) => el.items.length > 0 ? <MenuSlider items={el.items} category={el.title} row={row} key={`menuSlider-${row}`}/> : "")}

          </Container>
        )}
    </>
  )


}

export default Home;
