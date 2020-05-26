import React, { useState } from "react";

import { Button } from "../../../1-helpers/buttons";
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
        <Button className="btn btn-sm m-2" onClick={() => handleReset()}>
          Reset
        </Button>
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

const ResetWrapper = styled.div`
  display: flex;
  padding: 0 0 40px 0;
  justify-content: center;
`;
