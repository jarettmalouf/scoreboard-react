import "./index.css";

import React, { useState } from "react";

import Sport from "./Sport";
import styled from "@emotion/styled";

export default function SportsList() {
  const [sports] = useState([
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
  ]);

  function pngFile(sport) {
    return "../images/" + sport.imageCaption + ".png";
  }

  return (
    <React.Fragment>
      <Sports className="sports">
        {sports.map((sport) => (
          <Sport imageUrl={pngFile(sport)} {...sport} />
        ))}
      </Sports>
    </React.Fragment>
  );
}

// CSS

const Sports = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  justify-content: center;
  padding: 20px;
  position: relative;
  text-align: center;
`;
