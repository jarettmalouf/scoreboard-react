import React from "react";
import SportsList from "./Sports";
import TitleBar from "../../1-helpers/TitleBar";

function Sports() {
  return (
    <div>
      <TitleBar titleBar="sports" />
      <SportsList />
    </div>
  );
}

export default Sports;
