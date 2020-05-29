import "bootstrap/dist/css/bootstrap.css";

import * as serviceWorker from "./serviceWorker";

import { applyMiddleware, compose, createStore } from "redux";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { playersReducer } from "./2-reducers/playersReducer";
import thunk from "redux-thunk";

const initialState = {
  players: [],
  contacts: [
    {
      imageUrl: "../images/jarett.jpeg",
      imageCaption: "The only good photo of Jarett Malouf",
      bio: {
        name: "Jarett Malouf",
        hometown: "Los Angeles, CA",
        skills: "Can increment any number by 1",
      },
    },
    {
      imageUrl: "../images/benji.jpg",
      imageCaption: "A classically good photo of Benji Bear",
      bio: {
        name: "Benji Bear",
        hometown: "Rockford, IL",
        skills: "Can do basically anything",
      },
    },
  ],
  sports: [
    {
      imageCaption: "baseball",
      sportName: "Baseball",
      rules: ["Run += 1", "Grand slam += 4"],
    },
    {
      imageCaption: "basketball",
      sportName: "Basketball",
      rules: ["Freethrow += 1", "Basket += 2", "3-pointer += 3"],
    },
    {
      imageCaption: "football",
      sportName: "Football",
      rules: ["Touchdown += 6", "FG += 3", "TD conversion += 1"],
    },
    {
      imageCaption: "soccer",
      sportName: "Soccer",
      rules: ["Goal += 1"],
    },
    {
      imageCaption: "golf",
      sportName: "Golf",
      rules: ["Stroke += 1", "Hazard += 2"],
    },
    {
      imageCaption: "pingpong",
      sportName: "Ping-Pong",
      rules: ["Point won += 1"],
    },
  ],
};

const allEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(playersReducer, initialState, allEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
