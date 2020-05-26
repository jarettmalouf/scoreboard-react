import React from "react";
import styled from "@emotion/styled";

export default function TitleBar(props) {
  return (
    <div className="title-bar">
      <HeaderInTheBubble>
        <em>{props.titleBar}!</em>
      </HeaderInTheBubble>
    </div>
  );
}

/* TITLE BAR CSS*/

const HeaderInTheBubble = styled.h1`
  background-color: rgb(47, 179, 240);
  color: white;
  border-radius: 50px 20px 50px 20px;
  height: 100px;
  margin: 50px 50px 50px 50px;
  text-align: center;
  font-size: 80px;
  @media screen and (max-width: 625px) {
    font-size: 50px;
    height: 67px;
  }
`;
