import React from "react";
import "./Portrait.css";
import Pic from "./pictures/portrait.png"

const Portrait = props => (
  <div className="card">
    <div className="img-container">
      <img className="Pic" alt="Pic" src={Pic} width="100%" height="100%" />
    </div>
  </div>  
);

export default Portrait;