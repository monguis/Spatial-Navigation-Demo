import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from "../MovieCard/"

const MenuSlider = (props) => {

    const [focus, setFocus] = useState(
        {
            menuFocus: true,
            itemFocus: 0
        });
    const { itemFocus, menuFocus } = focus;

    const getFocus = () => {
        setFocus({ ...focus, menuFocus: true });
    }

    const looseFocus = () => {
        setFocus({ ...focus, menuFocus: false });
    }

    const moveForward = () => {
        if(itemFocus<props.items.length-1){
        setFocus({...focus,itemFocus:itemFocus+1})
    }
    }

    const moveBack = () => {
        if(itemFocus>0){
        setFocus({...focus,itemFocus:itemFocus-1})}
    }

    return (<Container fluid>
        <Row>
            <h3 style={{ margin: "0 auto" }}>Movie Category</h3>
        </Row>
        <Row style={{ margin: "0 auto" }} className="bg-success">
            {props.items.map((element, index) => <MovieCard class={ `${menuFocus ? `${index===itemFocus? "selected":""} ${index<itemFocus&&itemFocus+6>index ? "" : "d-node"}`:""}`} />)}

            {/* <MovieCard src={"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"} class="d-none" id = "0"/>
    
    
    <MovieCard id = "0" class="selected"/>
    
    
    <MovieCard id = "0"/>
    
    
    <MovieCard id = "0"/>
    
    
    <MovieCard id = "0"/>
    
    
    <MovieCard id = "0"/>
    
    
    <MovieCard id = "0"/>
    
     
    <MovieCard src={"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"}/> */}

        </Row>

        <button onClick={() => { }}>up</button>
        <button onClick={() => { }}>down</button>
        <button onClick={() => {moveForward() }}>forward</button>
        <button onClick={() => {moveBack() }}>back</button>

    </Container>);
}

export default MenuSlider;
// "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"