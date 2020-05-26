import React, { useState } from "react";

import Score from "./Score";
import styled from "@emotion/styled";

export default function ScoreBoard() {
  const [scores, setScores] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
  ]);

  // useEffect(() => alert("Score changed"), [scores]);

  function handleIncrement(score) {
    const newScores = [...scores];
    let scoreToIncrement = newScores.find((s) => s.id === score.id);
    scoreToIncrement.value++;
    setScores(newScores);
  }

  function handleDecrement(score) {
    if (score.value < 1) {
      return;
    }
    const newScores = [...scores];
    let scoreToIncrement = newScores.find((s) => s.id === score.id);
    scoreToIncrement.value--;
    setScores(newScores);
  }

  function handleReset() {
    let resetScores = [...scores];
    resetScores.map((score) => (score.value = 0));
    setScores(resetScores);
  }

  return (
    <React.Fragment>
      <Scores className="scores">
        {scores.map((score) => (
          <Score
            key={score.id}
            score={score}
            onIncrement={(score) => handleIncrement(score)}
            onDecrement={(score) => handleDecrement(score)}
          />
        ))}
      </Scores>
      <ResetWrapper>
        <ResetButton className="reset-button">
          <Button onClick={() => handleReset()}>Reset</Button>
        </ResetButton>
      </ResetWrapper>
    </React.Fragment>
  );
}

// SCOREBOARD CSS

const Scores = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ResetButton = styled.button`
  display: flex;
  padding: 100px;
  justify-content: center;
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

const ResetWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
