import React from "react";
import {Card,  Col} from 'react-bootstrap';
import "./style.css";

const MovieCard = (props) => {
    // ${props.show ? "":"d-none"}
    return (
        <Col xs={2} className={`${props.class? props.class:""} selectableWrapper `}>
            <Card className={`selectable `}>
                    <Card.Img variant="top" src={props.src ? props.src : "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg"} />
                
            </Card>
        </Col>);
}

export default MovieCard;