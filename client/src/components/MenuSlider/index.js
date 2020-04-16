import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from "../MovieCard/"
import "./style.css";
import Scrollspy from 'react-scrollspy';

const MenuSlider = (props) => {

    const [focus, setFocus] = useState(
        {
            menuFocus: props.active,
            itemFocus: 0,
            menuItems: props.items
        });


    const { itemFocus, menuFocus, menuItems } = focus;

    useEffect(() => {
        document.location.href = "#" + (itemFocus);
        document.location.href = "#" + ("title")
    }, [itemFocus])

    useEffect(() => {

        if(menuFocus)
        console.log("si jalo wey")
    }, [menuFocus])

    const getFocus = () => {
        setFocus({ ...focus, menuFocus: true });
    }

    const looseFocus = () => {
        setFocus({ ...focus, menuFocus: false });
    }

    const moveForward = (e) => {

        if (itemFocus < props.items.length - 1 && menuFocus) {
            setFocus({ ...focus, itemFocus: itemFocus + 1 });
            // 
        }
    }

    const moveBack = (e) => {
        if (itemFocus > 0 && menuFocus) {
            setFocus({ ...focus, itemFocus: itemFocus - 1 });
        }
    }


    return (<Container fluid >
            <Scrollspy currentClassName="selected">
        <Row>
            <h3 id={"title"} style={{ margin: "0 auto" }}>{`${itemFocus} + ${itemFocus + 6}`}</h3>
        </Row>

        <div className="scrollmenu d-flex align-items-center">
            {menuItems.map((element, index) => <MovieCard id={index} class={`${menuFocus ? `${index === itemFocus ? "selected" : ""}` : ""}`} />)}
        </div>
            </Scrollspy>
    </Container>);
}

export default MenuSlider;
// "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"