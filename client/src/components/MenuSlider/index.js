import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from "../MovieCard/"
import "./style.css";

const MenuSlider = (props) => {

    const { items, category, row } = props
//this component get an array(items) a title(category) and a number(row):
// the array has all the movies that this component will display as tiles(movieCards)
// the title is the name of the shelf,
// the row helps the home component to now what item to look for (I consider it an index for mapping) 
    return (
        <Container fluid className="SliderMenu" id={`row${row}`} key={`row${row}`}>
            <Row>
                <Col md={{ span: 10, offset: 2 }}>
                    <h3 style={{ margin: "0 auto" }}>{category}</h3>
                </Col>
            </Row>
            <div className="scrollmenu d-flex align-items-center">
                {items.map((element, index) => <MovieCard src={element.Poster} movie={element} key={`${index},${row}`} id={`${index},${row}`} />)}
            </div>
        </Container>
    );
}

export default MenuSlider;