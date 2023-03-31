import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div>
      <div className="card-container">
        <div className="card-tier">{props.tier}</div>
        <div className="card-price">{props.price}</div>
        <div className="card-image">
          <img src={props.image}></img>
        </div>
        <div className="card-content">{props.content}</div>
        <button className="buy-btn" type={"submit"} onClick={props.link}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;
