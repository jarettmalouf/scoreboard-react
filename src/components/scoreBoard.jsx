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
    console.log(score);
    const scores = [...this.state.scores];
    const index = scores.indexOf(score);
    scores[index].value++;
    this.setState({ scores });
  };

  handleDecrement = (score) => {
    console.log(score);
    const scores = [...this.state.scores];
    const index = scores.indexOf(score);
    if (scores[index].value > 0) {
      scores[index].value--;
    }
    this.setState({ scores });
  };

  handleReset = () => {
    console.log(this.state.scores);
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
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
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
