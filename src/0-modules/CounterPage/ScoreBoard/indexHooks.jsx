import "./index.css";

import React, { useState } from "react";

import Score from "./score";

function ScoreBoard() {
  const [scores, setScores] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
  ]);

  function handleIncrement(score) {
    let scoreToIncrement = { ...score };
    scoreToIncrement.value++;
    return setScores((currentScores) => ({
      ...currentScores,
      scoreToIncrement,
    }));
  }

  function handleDecrement(score) {
    let scoreToDecrement = { ...score };
    if (scoreToDecrement.value > 0) {
      scoreToDecrement.value--;
      return setScores((currentScores) => ({
        ...currentScores,
        scoreToDecrement,
      }));
    }
  }

  function handleReset() {
    let resetScores = scores.map((score) => (score.value = 0));
    return setScores(resetScores);
  }

  return (
    <React.Fragment>
      <div className="scores">
        {scores.map((score) => (
          <Score
            key={score.id}
            score={score}
            onIncrement={() => handleIncrement(score)}
            onDecrement={() => handleDecrement(score)}
          />
        ))}
      </div>
      <div className="reset-button">
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      </div>
    </React.Fragment>
  );
}

export default ScoreBoard;
