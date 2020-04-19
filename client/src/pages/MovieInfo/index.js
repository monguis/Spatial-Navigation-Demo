import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FavoriteContext } from "../../utilities/FavoriteContext";
const MovieInfo = (props) => {

    const { movie } = props;

    const { favorites, removeFavorite, addFavorite } = useContext(FavoriteContext);

    const [faved,setFaved] = useState()

    useEffect(() => {
        setFaved(favorites.includes(movie))
        console.log("howdy");
    }, [favorites]);

    useEffect(() => {
        setFaved(favorites.includes(movie))
        console.log("first");
    }, []);

    return (
        <Container fluid>
            <Row>
                <Col xs={4}>
                    <Image src={movie.Poster.replace("SX300.jpg", "SX1000.jpg")} fluid />
                </Col>
                <Col>
                    <h1>{movie.Title}</h1>
                    <h3>{`${movie.Genre}, ${movie.Released}, ${movie.Runtime}, ${movie.imdbRating}, ${movie.Rated}`} </h3>
                    <div className="favorited" >{faved? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}</div>
                    <br></br><br></br><br></br>
                    <h3>Plot</h3>
                    <p>{movie.Plot}</p>
                    <h3>Directed by:</h3>
                    <p>{movie.Director}</p>
                    <h3>Production</h3>
                    <p>{movie.Production}</p>
                    <h3>Starring</h3>
                    <ul>
                        {movie.Actors.split(", ").map(actor => <li>{actor}</li>)}
                    </ul>
                </Col>
            </Row>

        </Container>
    )
}

export default MovieInfo;