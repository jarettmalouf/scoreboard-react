import "./index.css";

import { Route, Switch } from "react-router-dom";

import Contact from "../ContactPage";
import Counter from "../CounterPage";
import Footer from "../Footer";
import NavBar from "../NavBar";
import React from "react";
import Sports from "../SportsPage";

function Root() {
  return (
    <div className="Main-Page">
      <NavBar />
      <div>
        <Switch>
          <Route path="/sports" component={Sports} />
          <Route path="/contact" component={Contact} />
          <Route path="/home" component={Counter} />
          <Route path="/" component={Counter} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default Root;
