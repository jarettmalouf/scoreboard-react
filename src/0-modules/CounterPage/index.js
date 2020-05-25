import React from "react";
import ScoreBoard from "./ScoreBoard";
import TitleBar from "../../1-helpers/TitleBar";

function Counter() {
  return (
    <div>
      <TitleBar titleBar="scoreboard" />
      <ScoreBoard />
    </div>
  );
}

export default Counter;
