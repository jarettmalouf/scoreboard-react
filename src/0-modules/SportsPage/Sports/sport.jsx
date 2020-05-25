import "./index.css";

import React from "react";

function Sport(props) {
  return (
    <div className="sport">
      <img src={props.imageUrl} alt={props.imageCaption}></img>
      <h3>{props.sportName}</h3>
      <ul className="rules">
        {props.rules.map((rule) => (
          <li>{rule}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sport;
