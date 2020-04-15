import React from "react";
import {Container,Row, Col} from 'react-bootstrap';
import MovieCard from "../MovieCard/"

const MenuSlider = (props) =>{
    return (<Container fluid>
    <Row>
      <h3 style={{margin:"0 auto"}}>Movie Category</h3>
    </Row>
    <Row>
    <Col fluid className="ALgogpo">
    <MovieCard/>
    </Col>
    <Col fluid>
    <MovieCard/>
    </Col>
    <Col fluid>
    <MovieCard/>
    </Col>
    <Col fluid>
    <MovieCard/>
    </Col>
    <Col fluid>
    <MovieCard/>
    </Col>
    <Col fluid>
    <MovieCard/>
    </Col>
    </Row>
  </Container>);
}

export default MenuSlider