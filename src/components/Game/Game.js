import React, { Component } from "react";
import "./Game.css";
import NavCom from "../NavCom";
import data from "../../data.json";
import CardCom from "../CardCom";

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

                <CardCom id={data[0].id} image={data[0].image} />

            </div>
        )
    }
}

export default Game;

