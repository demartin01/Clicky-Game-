import React from "react";
import "./CardCom";

const CardCom = props => (
    <div className="card" id={props.id}>
        <img src={props.image} />
    </div>
)

export default CardCom;