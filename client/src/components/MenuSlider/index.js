import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from "../MovieCard/"
import "./style.css";

const MenuSlider = (props) => {

    const { items, category, row } = props

    return (
        <Container fluid className="SliderMenu" id={`row${row}`} >
            <Row>
                <Col md={{ span: 10, offset: 2 }}>
                    <h3 style={{ margin: "0 auto" }}>{category}</h3>
                </Col>
            </Row>
            <div className="scrollmenu d-flex align-items-center">
                {items.map((element, index) => <MovieCard src={element.Poster} imdb={element.imdbID} key={`${index},${row}`} id={`${index},${row}`} />)}
            </div>
        </Container>
    );
}

export default MenuSlider;