import React from "react";
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap';
import "./style.css";

const MovieInfo = (props) => {

    const { movie, inRef, faved } = props;

    // This component gets an object and renders different key value pair to display info to the user, also notice that the heart icon
    // has a ref that takes to the top of the app for easier manipulation
    return (
        <Container fluid className="infoContainer">
            <Row>
                <Col xs={4}>
                    <div className="moviePictureWrapper">
                        <Image src={movie.Poster.replace("SX300.jpg", "SX1000.jpg")} alt={<Spinner animation="border" variant="light" />} fluid />
                    </div>
                </Col>
                <Col className="movieTextInfo">
                    <h1>{movie.Title}</h1>
                    <h3><span>{`${movie.Genre}`}</span> &middot; {`${movie.Released}`} &middot; {`${movie.Runtime}`} &middot;{` ${movie.imdbRating}`} &middot; {`${movie.Rated}`} </h3>
                    <br></br>
                    <div className="faved" ><i ref={inRef} className={`${faved ? "far" : "fas"} fa-heart`}></i></div>
                    <br></br>
                    <h3>Plot</h3>
                    <p>{movie.Plot}</p>
                    <h3>Directed by:</h3>
                    <p>{movie.Director}</p>
                    <h3>Production</h3>
                    <p>{movie.Production}</p>
                    <h3>Starring</h3>
                    <ul>
                        {movie.Actors.split(", ").map((actor, index) => <li key={`actor-${index}`}>{actor}</li>)}
                    </ul>
                </Col>
            </Row>

        </Container>
    )
}

export default MovieInfo;