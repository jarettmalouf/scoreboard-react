import React from "react";

function Score(props) {
  return (
    <div className="player">
      <span className="badge m-2">{props.score.value}</span>
      <div className="buttons">
        <button onClick={() => props.onIncrement()} className="btn btn-lg m-2">
          +
        </button>
        <button onClick={() => props.onDecrement()} className="btn btn-lg m-2">
          -
        </button>
      </div>
    </div>
  );
}

export default Score;