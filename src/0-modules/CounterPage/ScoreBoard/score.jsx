import { Button } from "../../../1-helpers/buttons";
import React from "react";
import styled from "@emotion/styled";

export default function Score(props) {
  return (
    <Player className="player">
      <Count className="badge m-2">{props.player.value}</Count>
      <ButtonsWrapper className="buttons">
        <Button onClick={() => props.onIncrement()} className="btn btn-lg m-2">
          +
        </Button>
        <Button onClick={() => props.onDecrement()} className="btn btn-lg m-2">
          -
        </Button>
      </ButtonsWrapper>
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

const ButtonsWrapper = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
`;
