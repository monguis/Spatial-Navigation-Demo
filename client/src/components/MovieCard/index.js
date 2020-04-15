import React from "react";
import {Card,  Col} from 'react-bootstrap';
import "./style.css";

const MovieCard = (props) => {

    return (
        <Col xs={2} fluid className={props.class? props.class:""}>
            <Card style={{ width: '18rem' }} className="ALgogpo grow">
                <div>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-heart"></i>
                    <Card.Img variant="top" src={props.src ? props.src : "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg"} />
                </div>
            </Card>
        </Col>);
}

export default MovieCard;