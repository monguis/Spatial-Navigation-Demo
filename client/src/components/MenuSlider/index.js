import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from "../MovieCard/"
import "./style.css";
import Scrollspy from 'react-scrollspy';
import useEventListener from '../../utilities/useEventListener'

const MenuSlider = (props) => {

    const [focus, setFocus] = useState(
        {
            menuFocus: props.active,
            itemFocus: 0,
            menuItems: props.items
        });


    const { itemFocus, menuFocus, menuItems } = focus;

    useEffect(() => {document.location.href = "#" + (itemFocus);}, [itemFocus])

    const getFocus = () => {
        setFocus({ ...focus, menuFocus: true });
    }

    const looseFocus = () => {
        setFocus({ ...focus, menuFocus: false });
    }

    const moveForward = () => {
        if (itemFocus < props.items.length - 1 && menuFocus) {
            setFocus({ ...focus, itemFocus: itemFocus + 1 });
            // 
        }
    }

    const moveBack = () => {
        if (itemFocus > 0 && menuFocus) {
            setFocus({ ...focus, itemFocus: itemFocus - 1 });
            // document.location.href = "#" + (itemFocus);
        }
    }


    // && (itemFocus + 6 > index )
    // index >= itemFocus

const ESCAPE_KEYS = ['27', 'Escape'];


  function handler( event ) {
      const {key} = event
      if(String(key)!=="F5"&&menuFocus){
          console.log(String(key))
        switch(String(key)){
            case "ArrowRight":
                moveForward();
            break;
            case "ArrowLeft":
                moveBack();
            break;
            default:
        }

    event.preventDefault();
    event.stopPropagation();
    if (ESCAPE_KEYS.includes(String(key))) {
      console.log('Escape key pressed!');
    }}
  }

  useEventListener('keydown', handler);


    return (<Container fluid >
            <Scrollspy currentClassName="selected">
        <Row>
            <h3 style={{ margin: "0 auto" }}>{`${itemFocus} + ${itemFocus + 6}`}</h3>
        </Row>

        <div className="scrollmenu d-flex align-items-center">
            {menuItems.map((element, index) => <MovieCard id={index} class={`${menuFocus ? `${index === itemFocus ? "selected" : ""}` : ""}`} />)}
        </div>
            </Scrollspy>
    </Container>);
}

export default MenuSlider;
// "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"