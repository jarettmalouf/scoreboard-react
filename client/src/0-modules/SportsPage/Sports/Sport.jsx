import React from "react";
import styled from "@emotion/styled";

export default function Sport(props) {
  return (
    <SportDiv className="sport">
      <SportsIcon src={props.imageUrl} alt={props.imageCaption}></SportsIcon>
      <h3>{props.sportName}</h3>
      <Rules className="rules">
        {props.rules.map((rule) => (
          <li>{rule}</li>
        ))}
      </Rules>
    </SportDiv>
  );
}

/* SPORTS */

const SportDiv = styled.div`
  padding: 0 30px;
`;

const Rules = styled.ul`
  padding-left: 0;
  list-style-type: none;
`;

const SportsIcon = styled.img`
  height: 100px;
  margin: 20px;
`;
