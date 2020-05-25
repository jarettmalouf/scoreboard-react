import React from "react";
import ScoreBoard from "./ScoreBoard/indexHooks";
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
