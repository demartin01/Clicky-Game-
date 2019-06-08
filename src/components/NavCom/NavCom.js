
import React from "react";
import "./NavCom.css";

const NavCom = props => (
    <nav className="navbar navbar-dark bg-dark">

          <h2 style={{color: "white"}}>Clicky Game</h2>

        <span className="navbar-text">
           Click on image to begin!

        </span>
        <ul className="nav text-white nav-fills">
        <li className="nav-item">
        <span className="nav-link" href="#!">
         SCORE: {props.score} || TOPSCORE: {props.topScore}
        </span>
        </li>

        </ul>




    </nav>
);

export default NavCom;