import React from "react";
import styled from "@emotion/styled";

export default function Score(props) {
  return (
    <Player className="player">
      <Count className="badge m-2">{props.score.value}</Count>
      <Buttons className="buttons">
        <Button
          onClick={() => props.onIncrement(props.score)}
          className="btn btn-lg m-2"
        >
          +
        </Button>
        <Button
          onClick={() => props.onDecrement(props.score)}
          className="btn btn-lg m-2"
        >
          -
        </Button>
      </Buttons>
    </Player>
  );
}

/* SCORE CSS */

const Player = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 50px;
  position: relative;
`;

const Count = styled.div`
  background-color: rgb(47, 179, 240);
  color: white;
  display: flex;
  font-size: 100px;
  justify-content: center;
  width: 150px;
`;

const Button = styled.button`
  background-color: rgb(47, 179, 240);
  border-color: rgb(47, 179, 240);
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 25px;
  :active {
    outline: none;
    transform: translateY(1px);
  }
`;

const Buttons = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
`;
