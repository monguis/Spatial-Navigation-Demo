import React, { useState, useEffect, useContext } from "react";
import API from "../../utilities/API";
import { Container } from "react-bootstrap"
import MenuSlider from "../../components/MenuSlider";
import useEventListener from '../../utilities/useEventListener';
import MovieInfo from "../MovieInfo/";
import { FavoriteContext } from "../../utilities/FavoriteContext";
import "./style.css";


// here we sort movies based on an attribute that we considered the most relevant

const Home = () => {

  const [menu, setMenu] = useState({ selected: { x: 1, y: 0 }, previous: { x: 1, y: 0 }, menuGrid: [], redirect: false })
  const { favorites, setFavorites } = useContext(FavoriteContext);


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
        };

        if (match) {
          category.items.push(movie);
          if (!category.allowRedundancy) {
            break;
          }
        }

      }
    });
  };

  const menuToLoad = [
    { title: "Top of 2019", keyToCheck: "Year", conditions: "2019", items: [], allowRedundancy: true },
    { title: "Top of 2018", keyToCheck: "Year", conditions: "2018", items: [], allowRedundancy: true },
    { title: "Mystery Drama", keyToCheck: "Genre", conditions: "Mystery, Drama", items: [], allowRedundancy: true },
    { title: "Action", keyToCheck: "Genre", conditions: "Action", items: [] },
    { title: "Fantasy", keyToCheck: "Genre", conditions: "Fantasy", items: [] },
    { title: "Thriller", keyToCheck: "Genre", conditions: "Thriller", items: [] }
  ]
  useEffect(() => {

    API.getMovies().then(({ data }) => {
      data.sort(sortByRelevance);
      createCategories(data, menuToLoad);
      setMenu({ ...menu, menuGrid: menuToLoad });
      window.location.hash = "#" + 1 + "," + selected.y;
      window.location.hash = "#row" + selected.y;
    });

    return () => {
      console.log("menu kisses bye")
    };
  }, [])

  useEffect(() => {
    if (menuGrid.length > 0 && !menu.redirect) {
      document.getElementById(1 + "," + previous.y).classList.remove("selectedItem");
      document.getElementById(1 + "," + selected.y).classList.add("selectedItem");
      window.location.hash = "#" + selected.x + "," + selected.y;
      window.location.hash = "#row" + selected.y;
    }

  }, [menu])

  const { selected, menuGrid, previous } = menu

  const validKeys = ['ArrowDown', 37, "ArrowUp", 38, "ArrowRight", 39, "ArrowLeft", 40, 13, "Enter", "Escape", 27];

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
    if (selected.y > 0) {
      setMenu({
        ...menu,
        previous: selected,
        selected: { ...selected, y: selected.y - 1 }
      })
    }
  }

  const moveDown = () => {
    if (document.getElementById((selected.x) + "," + (selected.y + 1))) {
      setMenu({
        ...menu,
        previous: selected,
        selected: { ...selected, y: selected.y + 1 }
      })
    }
  }

  const moveForward = () => {
    let auxArr = menuGrid;
    auxArr[selected.y].items.push(auxArr[selected.y].items.shift());
    setMenu({ ...menu, array: auxArr });
  }

  const moveBack = () => {
    let auxArr = menuGrid;
    auxArr[selected.y].items.unshift(auxArr[selected.y].items.pop());
    setMenu({ ...menu, array: auxArr });
  }

  const backToMenu = () => {
    if (menu.redirect) {
      setMenu({ ...menu, redirect: false });
    }
  };

  const toggleFavorite = () => {
    const favIndex = favorites.indexOf(menuGrid[selected.y].items[selected.x].imdbID);
    if (favIndex!==-1) {
      console.log(favIndex)
    }

  }


  return (
    <>

      {menu.redirect ? (

        <Container fluid>

          <MovieInfo movie={menuGrid[selected.y].items[selected.x]} toggleFavorite={toggleFavorite} />

        </Container>)

        : (

          <Container fluid>

            {menuGrid.map((el, row) => <MenuSlider items={el.items} category={el.title} row={row} />)}

          </Container>)}
    </>
  )


}

export default Home;
