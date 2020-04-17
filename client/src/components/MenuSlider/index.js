import React from "react";
import { Container, Row} from 'react-bootstrap';
import MovieCard from "../MovieCard/"
import "./style.css";

const MenuSlider = (props) => {

    const { items, category, row } = props

    return (
        <Container fluid className="SliderMenu" id={`row${row}`} >
            <Row>
                <h3 style={{ margin: "0 auto" }}>{category}</h3>
            </Row>
            <div className="scrollmenu d-flex align-items-center">
                {items.map((element, index) => <MovieCard src={element.Poster} id={`${index},${row}`} />)}
            </div>
        </Container>
    );
}

export default MenuSlider;