import React, { useContext } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FavoriteContext } from "../../utilities/FavoriteContext";
import "./style.css";

const MovieInfo = (props) => {

    const { movie ,inRef ,faved} = props;

    const { favorites } = useContext(FavoriteContext);


    return (
        <Container fluid className="infoContainer">
            <Row>
                <Col xs={4}>
                    <div className="moviePictureWrapper">
                        <Image src={movie.Poster.replace("SX300.jpg", "SX1000.jpg")} fluid />
                    </div>
                </Col>
                <Col className="movieTextInfo">
                    <h1>{movie.Title}</h1>
                    <h3><span>{`${movie.Genre}`}</span> &middot; {`${movie.Released}`} &middot; {`${movie.Runtime}`} &middot;{` ${movie.imdbRating}`} &middot; {`${movie.Rated}`} </h3>
                    <br></br>
                    <div className="faved" ><i ref={inRef} className={`${faved? "far":"fas"} fa-heart`}></i></div>
                    <br></br>
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