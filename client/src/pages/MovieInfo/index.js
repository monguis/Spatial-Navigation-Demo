import React, { useEffect, useState,useContext } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';

const MovieInfo = (props) => {

    const { movie } = props;

    const [ favorited, setFavorited] = useState(false);
    
    // useEffect(() => {
    //     setFavorited(favorites.includes(movie.imdbID));
    //     return () => {
    //         console.log("dismount")
    //     }
    // }, []);

    return (
        <Container fluid>
            <Row>
                <Col xs={4}>
                    <Image src={movie.Poster.replace("SX300.jpg", "SX1000.jpg")} fluid />
                </Col>
                <Col>
                    <h1>{movie.Title}</h1>
                    <h3>{`${movie.Genre}, ${movie.Released}, ${movie.Runtime}, ${movie.imdbRating}, ${movie.Rated}`} </h3>
                    <div className="favorited" >{favorited ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}</div>
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

// "tt8579674": {
//     "Title": "1917",
//     "Year": "2019",
//     "Rated": "R",
//     "Released": "10 Jan 2020",
//     "Runtime": "119 min",
//     "Genre": "Drama, War",
//     "Director": "Sam Mendes",
//     "Writer": "Sam Mendes, Krysty Wilson-Cairns",
//     "Actors": "Dean-Charles Chapman, George MacKay, Daniel Mays, Colin Firth",
//     "Plot": "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
//     "Language": "English, French, German",
//     "Country": "USA, UK, India, Spain, Canada",
//     "Awards": "Won 3 Oscars. Another 103 wins & 152 nominations.",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg",
//     "Ratings": [
//       {
//         "Source": "Internet Movie Database",
//         "Value": "8.5/10"
//       },
//       {
//         "Source": "Rotten Tomatoes",
//         "Value": "89%"
//       },
//       {
//         "Source": "Metacritic",
//         "Value": "78/100"
//       }
//     ],
//     "Metascore": "78",
//     "imdbRating": "8.5",
//     "imdbVotes": "164,576",
//     "imdbID": "tt8579674",
//     "Type": "movie",
//     "DVD": "N/A",
//     "BoxOffice": "N/A",
//     "Production": "Universal Pictures",
//     "Website": "N/A",
//     "Response": "True"
//   }