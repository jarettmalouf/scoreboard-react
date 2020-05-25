import "./index.css";

import React from "react";

function TitleBar(props) {
  return (
    <div className="title-bar">
      <h1>
        <em>{props.titleBar}!</em>
      </h1>
    </div>
  );
}

export default TitleBar;
