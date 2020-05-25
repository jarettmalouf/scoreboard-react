import "./style.css";

import App from "./Pages/App";
import Contact from "./Pages/ContactPage";
import React from "react";
import { Route } from "react-router-dom";
import Sports from "./Pages/Sports";

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
