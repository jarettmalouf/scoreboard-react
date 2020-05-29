import React from "react";
import Sport from "./Sport";
import { connect } from "react-redux";
import styled from "@emotion/styled";

export function SportsList(props) {
  function pngFile(sport) {
    return "../images/" + sport.imageCaption + ".png";
  }

  return (
    <React.Fragment>
      <Sports className="sports">
        {props.sports.map((sport) => (
          <Sport imageUrl={pngFile(sport)} {...sport} />
        ))}
      </Sports>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return { sports: state.sports };
};

// Sports CSS

const Sports = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  justify-content: center;
  padding: 20px 20px 40px 20px;
  position: relative;
  text-align: center;
`;

export default connect(mapStateToProps)(SportsList);
