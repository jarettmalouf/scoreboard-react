import React from "react";
import styled from "@emotion/styled";

export default function Footer() {
  return (
    <Container>
      <TrademarkFooter>Scoreboard, Inc. © 2020</TrademarkFooter>
    </Container>
  );
}

const TrademarkFooter = styled.footer`
  background: grey;
  bottom: 0;
  color: white;
  padding: 20px;
  position: absolute;
  text-align: center;
  width: 100%;
`;

const Container = styled.div`
  padding-top: 40px;
`;
