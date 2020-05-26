import "./index.css";

import React from "react";
import styled from "@emotion/styled";

export default function Footer() {
  return <TrademarkFooter>Scoreboard, Inc. © 2020</TrademarkFooter>;
}

const TrademarkFooter = styled.footer`
  background: grey;
  color: white;
  padding: 20px;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 0;
`;
