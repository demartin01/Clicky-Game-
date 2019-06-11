import React from "react";
import "./CardCom.css";

const CardCom = props => (
    <div className="card" id={props.id}>
        <img className="cardImg" src={props.image} />
    </div>
)

export default CardCom;