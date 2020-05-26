import { Route, Switch } from "react-router-dom";

import Contact from "../ContactPage";
import Counter from "../CounterPage";
import Footer from "../Footer";
import NavBar from "../NavBar";
import React from "react";
import Sports from "../SportsPage";
import styled from "@emotion/styled";

function Root() {
  return (
    <MainPage className="Main-Page">
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
    </MainPage>
  );
}

const MainPage = styled.div`
  background: rgb(151, 234, 245);
  color: rgb(47, 179, 240);
  min-height: 100vh;
  min-width: 100vh;
  padding: 0;
  position: relative;
`;

export default Root;
