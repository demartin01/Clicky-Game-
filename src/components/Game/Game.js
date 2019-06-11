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

    handleClick = id => {
        // double clicked flag
        let doubleClicked = false;
    
        // a state snapshot to minimize state updates
        let update = {
          data: [...this.state.data],
          score: this.state.score,
          topScore: this.state.topScore,
        }
    
        // click updates
        update.data.forEach(landmark => {
          if (landmark.id === id) {
            if (landmark.clicked) {
              doubleClicked = true;
            };
            landmark.clicked = true;
            update.score++;
            if (update.score > update.topScore) {
              update.topScore = update.score;
            };
          }
        })
        
        // reset score and clicked state in all cards if a card was clicked twice.
        if (doubleClicked) {
          update.data.forEach(landmark => landmark.clicked = false);
          update.score = 0;
        };
    
        // randomize data
        update.data = update.data.sort(() => 0.5 - Math.random());
        
        // update state
        this.setState({data: update.data,score: update.score,topScore: update.topScore});
      };

    render(){
        return(
            <div>
                <NavCom score={this.state.score} topScore={this.state.topScore} />

                <Container>
                        {this.state.data.map( landmark => (
                                <CardCom 
                                    key={landmark.id} 
                                    id={landmark.id} 
                                    image={landmark.image} 
                                    handleImgClick={() => this.handleClick(landmark.id)} 
                                />
                        ))}
                </Container>

            </div>
        )
    }
}

export default Game;

