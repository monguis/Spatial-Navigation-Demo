import React, {useContext} from "react";
import { Card, Col } from 'react-bootstrap';
import {FavoriteContext} from "../../utilities/FavoriteContext";
import "./style.css";

const MovieCard = (props) => {
    const { favorites } = useContext(FavoriteContext);

    return (
        <Col xs={2} id={props.id} className={`selectableWrapper `}>
            <Card className={`selectable `}>
                <div className="favorited" >{favorites.includes(props.movie) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}</div>
                <img variant="top" src={props.src} />
            </Card>
        </Col>);
}

export default MovieCard;

// .replace("SX300.jpg","SX380.jpg") 