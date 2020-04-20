import React, { useState, useEffect, useContext } from "react";
import API from "../../utilities/API";
import { Container } from "react-bootstrap"
import MenuSlider from "../../components/MenuSlider";
import useEventListener from '../../utilities/useEventListener';
import MovieInfo from "../MovieInfo/";
import { FavoriteContext } from "../../utilities/FavoriteContext";
import "./style.css";




const Home = (props) => {

  const [menu, setMenu] = useState({ selected: { x: 0, y: 0 }, previous: { x: 0, y: 0 }, menuGrid: [], gridStack: [], favMenu: { title: "Favorites", items: [] }, redirect: false })
  const { favorites, addFavorite, removeFavorite } = useContext(FavoriteContext);
  const { selected, menuGrid, previous } = menu

  const validKeys = ['ArrowDown', 37, "ArrowUp", 38, "ArrowRight", 39, "ArrowLeft", 40, 13, "Enter", "Escape", 27];

  const { menuToLoad } = props;



  //useEffect section:

  // this use effect runs when this component is invoked, here the component makes a http request that sends all movies, then movies are sorted 
  // and classify in their respective shelves, also set the attention to the first element of the dom
  useEffect(() => {
    API.getMovies().then(({ data }) => {
      data.sort(sortByRelevance);
      createCategories(data, menuToLoad);
      setMenu({ ...menu, menuGrid: [...menuToLoad, { title: "Favorites", items: [] }],gridStack:[...menuToLoad.map(stack =>[]),[]] });
      window.location.hash = "#" + 0 + "," + selected.y;
      window.location.hash = "#row" + selected.y;
    });
    return () => {
    };
  }, [])

  // this useEffect runs every time our state changes sending attention to the right element in the DOM

  useEffect(() => {
    if (menuGrid.length > 0 && !menu.redirect) {
      document.getElementById(0 + "," + previous.y).classList.remove("selectedItem");
      document.getElementById(0 + "," + selected.y).classList.add("selectedItem");
      window.location.hash = "#" + selected.x + "," + selected.y;
      window.location.hash = "#row" + selected.y;
    }
  }, [menu])

  //functions section:


  // here we sort movies based on an attribute that we considered the most relevant, I based this by multiplying imdbVotes
  // with the imdbRating
  const sortByRelevance = (a, b) => {
    return (parseFloat(b.imdbVotes) * parseFloat(b.imdbRating)) - (parseFloat(a.imdbVotes) * parseFloat(a.imdbRating))
  }


  // once we got our movies sorted we classify them with this function. The function takes an array of objects and each 
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
            toggleFavorite();
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
    if (menuGrid[selected.y].items.length>1) {
      let auxArr = menuGrid;
      let auxArr2 = menu.gridStack;
      auxArr2[selected.y].push(auxArr[selected.y].items.shift());
      setMenu({ ...menu, menuGrid: auxArr ,gridStack:auxArr2});
    } 
  }

  const moveBack = () => {
    if (menu.gridStack[selected.y].length>0) {
      let auxArr = menuGrid;
      let auxArr2 = menu.gridStack;
      auxArr[selected.y].items.unshift(auxArr2[selected.y].pop());
      setMenu({ ...menu, menuGrid: auxArr ,gridStack:auxArr2});
    }
  }

  const backToMenu = () => {
    if (menu.redirect) {
      setMenu({ ...menu, redirect: false });
    }
  };

  const toggleFavorite = () => {
    if (!favorites.includes(menuGrid[selected.y].items[selected.x])) {
      addFavorite(menuGrid[selected.y].items[selected.x]);

    } else {
      removeFavorite(menuGrid[selected.y].items[selected.x]);
    }
    let auxArr = menuGrid;
    auxArr[auxArr.length - 1].items = favorites;
    setMenu({ ...menu, array: auxArr });
  }


  return (
    <>
      {/* this component can render wether the info page of a movie or the menuGrid */}
      {menu.redirect ? (

        <Container fluid>

          <MovieInfo movie={menuGrid[selected.y].items[0]} toggleFavorite={toggleFavorite} />

        </Container>)

        : (

          <Container fluid>
            {/* this component renders menu rows depending on the size of the menuGrid, is a row is empty, it wont be display */}
            {menuGrid.map((el, row) => el.items.length > 0 ? <MenuSlider items={el.items} category={el.title} row={row} /> : "")}

          </Container>)}
    </>
  )


}

export default Home;
