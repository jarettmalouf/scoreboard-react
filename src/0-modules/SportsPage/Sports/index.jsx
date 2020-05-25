import "./index.css";

import React, { Component } from "react";

import Sport from "./sport";

class SportsList extends Component {
  pngFile = (sport) => {
    return "../images/" + sport.imageCaption + ".png";
  };

  state = {
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

  render() {
    return (
      <React.Fragment>
        <div className="sports">
          {this.state.sports.map((sport) => (
            <Sport
              imageUrl={this.pngFile(sport)}
              imageCaption={sport.imageCaption}
              sportName={sport.sportName}
              rules={sport.rules}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default SportsList;
