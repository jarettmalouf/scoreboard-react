import "./index.css";

import React, { Component } from "react";

import Score from "./score";

class ScoreBoard extends Component {
  state = {
    scores: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
    ],
  };

  handleIncrement = (score) => {
    const scores = this.state.scores.map((s) =>
      s.id === score.id ? { ...s, value: s.value + 1 } : { ...s }
    );
    this.setState({ scores });
  };

  handleDecrement = (score) => {
    const scores = this.state.scores.map((s) =>
      s.id === score.id ? { ...s, value: s.value - 1 } : { ...s }
    );
    this.setState({ scores });
  };

  handleReset = () => {
    const scores = this.state.scores.map((s) => {
      s.value = 0;
      return s;
    });
    this.setState({ scores });
  };

  render() {
    return (
      <React.Fragment>
        <div className="scores">
          {this.state.scores.map((score) => (
            <Score
              key={score.id}
              score={score}
              onIncrement={() => this.handleIncrement(score)}
              onDecrement={() => this.handleDecrement(score)}
            />
          ))}
        </div>
        <div className="reset-button">
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => this.handleReset()}
          >
            Reset
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ScoreBoard;
