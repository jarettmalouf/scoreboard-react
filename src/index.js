import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";
import Counter from "./Counter";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <BrowserRouter>
    <Counter />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.register();
