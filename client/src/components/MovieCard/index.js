import React from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
const MovieCard = (props) => {




    return (
    <Card style={{ width: '18rem' }} className="ALgogpo">
        <div>
        <i class="far fa-heart"></i>
        <i class="fas fa-heart"></i>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg" />
        </div>
    </Card>);
}

export default MovieCard;