import React from "react";

function Sport(props) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.imageCaption}></img>
      <h3>{props.sportName}</h3>
      <ul>
        {props.rules.map((rule) => (
          <li>{rule}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sport;
