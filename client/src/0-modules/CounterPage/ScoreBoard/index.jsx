import React, { useEffect } from "react";
import {
  decrementValue,
  incrementValue,
  initializePlayers,
  resetValues,
} from "../../../3-actions/playersActions";

import { Button } from "../../../1-helpers/buttons";
import Score from "./Score";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "@emotion/styled";

export function ScoreBoard(props) {
  useEffect(() => {
    props.onInitializePlayers();
  }, []);

  return (
    <React.Fragment>
      <Scores className="scores">
        {props.players.map((player) => (
          <Score
            key={player.id}
            player={player}
            onIncrement={() => props.onPlayerIncrement(player.id)}
            onDecrement={() => props.onPlayerDecrement(player.id)}
          />
        ))}
      </Scores>
      <ResetWrapper>
        <Button
          className="btn btn-sm m-2"
          onClick={() => props.onPlayersReset()}
        >
          Reset
        </Button>
      </ResetWrapper>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    players: state.players, // array of objects
  };
};

const mapActionsToProps = (dispatch) => {
  return bindActionCreators(
    {
      onPlayerIncrement: incrementValue,
      onPlayerDecrement: decrementValue,
      onPlayersReset: resetValues,
      onInitializePlayers: initializePlayers,
    },
    dispatch
  );
};
// SCOREBOARD CSS

const Scores = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ResetWrapper = styled.div`
  display: flex;
  padding: 0 0 40px 0;
  justify-content: center;
`;

export default connect(mapStateToProps, mapActionsToProps)(ScoreBoard);
