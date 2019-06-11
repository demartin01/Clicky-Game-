import React, { Component } from "react";
import "./Game.css";
import NavCom from "../NavCom";
import data from "../../data.json";
import CardCom from "../CardCom";
import Container from "../Container";

class Game extends Component {

    state = {
        data,
        score: 0,
        topScore: 0
    };

    render(){
        return(
            <div>
                <NavCom score={this.state.score} topScore={this.state.topScore} />

                <Container>
                        {data.map( landmark => (
                                <CardCom id={landmark.id} image={landmark.image} />
                        ))}
                </Container>

            </div>
        )
    }
}

export default Game;

