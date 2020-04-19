import React, {useContext} from "react";
import { Card, Col } from 'react-bootstrap';
import {FavoriteContext} from "../../utilities/FavoriteContext";
import "./style.css";

const MovieCard = (props) => {
    const { favorites } = useContext(FavoriteContext);

    return (
        <Col xs={2} id={props.id} className={`selectableWrapper `}>
            <Card className={`selectable `}>
                <div className="favorited" >{favorites.includes(props.imdb) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}</div>
                <img variant="top" src={props.src ? props.src : "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX1000.jpg"} />
            </Card>
        </Col>);
}

export default MovieCard;

// .replace("SX300.jpg","SX380.jpg") 