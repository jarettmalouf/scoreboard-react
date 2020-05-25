import "./style.css";

import App from "./App";
import Contact from "./ContactPage";
import React from "react";
import { Route } from "react-router-dom";
import Sports from "./Sports";

function Counter() {
  return (
    <div className="Counter">
      <Route exact path="/home" component={App} />
      <Route exact path="/sports" component={Sports} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default Counter;
