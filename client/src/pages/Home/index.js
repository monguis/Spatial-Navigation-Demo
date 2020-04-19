import React, { useState, useEffect, useContext } from "react";
import API from "../../utilities/API";
import { Container } from "react-bootstrap"
import MenuSlider from "../../components/MenuSlider";
import useEventListener from '../../utilities/useEventListener';
import MovieInfo from "../MovieInfo/";
import { FavoriteContext } from "../../utilities/FavoriteContext";
import "./style.css";


// here we sort movies based on an attribute that we considered the most relevant

const Home = (props) => {

  const [menu, setMenu] = useState({ selected: { x: 0, y: 0 }, previous: { x: 0, y: 0 }, menuGrid: [], favMenu: { title: "Favorites", items: [] }, redirect: false })
  const { favorites, addFavorite, removeFavorite } = useContext(FavoriteContext);
  const { selected, menuGrid, previous } = menu

  const validKeys = ['ArrowDown', 37, "ArrowUp", 38, "ArrowRight", 39, "ArrowLeft", 40, 13, "Enter", "Escape", 27];

  const { menuToLoad } = props;



  //useEffect section:

  useEffect(() => {
    API.getMovies().then(({ data }) => {
      data.sort(sortByRelevance);
      createCategories(data, menuToLoad);
      setMenu({ ...menu, menuGrid: [...menuToLoad, { title: "Favorites", items: [] }] });
      window.location.hash = "#" + 1 + "," + selected.y;
      window.location.hash = "#row" + selected.y;
    });
    return () => {
    };
  }, [])



  useEffect(() => {
    if (menuGrid.length > 0 && !menu.redirect) {
      document.getElementById(0 + "," + previous.y).classList.remove("selectedItem");
      document.getElementById(0 + "," + selected.y).classList.add("selectedItem");
      window.location.hash = "#" + selected.x + "," + selected.y;
      window.location.hash = "#row" + selected.y;
    }
  }, [menu])

  //functions section:

  const sortByRelevance = (a, b) => {
    return (parseFloat(b.imdbVotes) * parseFloat(b.imdbRating)) - (parseFloat(a.imdbVotes) * parseFloat(a.imdbRating))
  }

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
    if (document.getElementById(`${2},${selected.y}`)) {
      let auxArr = menuGrid;
      auxArr[selected.y].items.push(auxArr[selected.y].items.shift());
      setMenu({ ...menu, array: auxArr });
    } else if(menuGrid[selected.y].items.length===2){
      moveBack();
    }
  }

  const moveBack = () => {
    if (document.getElementById(`${0},${selected.y}`)) {
      let auxArr = menuGrid;
      auxArr[selected.y].items.unshift(auxArr[selected.y].items.pop());
      setMenu({ ...menu, array: auxArr });
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

      {menu.redirect ? (

        <Container fluid>

          <MovieInfo movie={menuGrid[selected.y].items[0]} toggleFavorite={toggleFavorite} />

        </Container>)

        : (

          <Container fluid>

            {menuGrid.map((el, row) => el.items.length > 0 ? <MenuSlider items={el.items} category={el.title} row={row} /> : "")}
            {/* {favorites.length > 0 ? <MenuSlider items={favorites} category={"Favorites"} row={menuGrid.length} /> : ""} */}
          </Container>)}
    </>
  )


}

export default Home;
