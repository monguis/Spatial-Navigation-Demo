import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from "../MovieCard/"
import "./style.css";
import API from "../../utilities/API"
import useEventListener from "../../utilities/useEventListener";

const MenuSlider = (props) => {


    const { items, category, row } = props
    // const [focus, setFocus] = useState(
    //     {
    //         menuFocus: true,
    //         itemFocus: 0,
    //         menuItems: []
    //     });

    // const { itemFocus, menuFocus, menuItems } = focus;

    // useEffect(() => {
    //   setFocus({...focus, menuItems:props.items})
    // }, [])

    // useEffect(() => {
    //     window.location.hash = "#itemSelected";
    //     window.location.hash = `#${props.category}SliderMenuHeader`
    // }, [itemFocus])

    // useEffect(() => {
    //     window.location.hash = "#itemSelected";
    //     window.location.hash = `#${props.category}SliderMenuHeader`
    // }, [menuFocus])

    // const getFocus = () => {
    //     setFocus({ ...focus, menuFocus: true });
    // }

    // const looseFocus = () => {
    //     setFocus({ ...focus, menuFocus: false });
    // }

    // const moveForward = () => {
    //     if (itemFocus < menuItems.length - 1 && menuFocus) {
    //         setFocus({ ...focus, itemFocus: itemFocus + 1 });
    //         // 
    //     }
    // }

    // const moveBack = () => {
    //     if (itemFocus > 0 && menuFocus) {
    //         setFocus({ ...focus, itemFocus: itemFocus - 1 });
    //         // document.location.href = "#" + (itemFocus);
    //     }
    // }


    // // && (itemFocus + 6 > index )
    // // index >= itemFocus
    return (
        <Container fluid className="SliderMenu">
            <Row>
                <h3 id={`row${row}`} style={{ margin: "0 auto" }}>{category}</h3>
            </Row>
            <div className="scrollmenu d-flex align-items-center">
                {items.map((element, index) => <MovieCard src={element.Poster} id={`${row},${index}`} />)}
            </div>

        </Container>
    );
}

export default MenuSlider;
// "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"