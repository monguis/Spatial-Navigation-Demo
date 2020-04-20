import React, {useContext} from "react";
import { Card, Col, Spinner } from 'react-bootstrap';
import {FavoriteContext} from "../../utilities/FavoriteContext";
import "./style.css";

//our Tile structure, this component receives a movie object to render the proper picture

const MovieCard = (props) => {
    const { favorites } = useContext(FavoriteContext);

    return (
        <Col xs={2} id={props.id} className={`selectableWrapper `}>
            <Card className={`selectable `}>
                <div className="favorited" >{favorites.includes(props.movie) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}</div>
                <img variant="top" src={props.src} alt={<Spinner animation="border" variant="light" size="xl" />} />
            </Card>
        </Col>);
}

export default MovieCard;