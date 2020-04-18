import React, {useContext} from "react";
import { Card, Col } from 'react-bootstrap';
import "./style.css";
import {FavoriteContext} from "../../utilities/FavoriteContext"

const MovieCard = (props) => {
    const { favorites } = useContext(FavoriteContext);

    return (
        <Col xs={2} id={props.id} className={`selectableWrapper `}>
            <Card className={`selectable `}>
                <div className="favorited" >{favorites.includes(props.imdb) ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>}</div>
                <img variant="top" src={props.src ? props.src : "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg"} />
            </Card>
        </Col>);
}

export default MovieCard;

// .replace("SX300.jpg","SX380.jpg") 