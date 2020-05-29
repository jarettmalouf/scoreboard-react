import axios from "axios";

export const PLAYERS_RESET_VALUES = "players:resetValues";
export const PLAYER_INCREMENT_VALUE = "player:incrementValue";
export const PLAYER_DECREMENT_VALUE = "player:decrementValue";
export const UPDATED_PLAYERS = "players:updatedPlayers";

export function initializePlayers() {
  return async (dispatch) => {
    const request = await axios.get("http://localhost:5000");
    const { players } = await request.data;
    dispatch(updatePlayers(players));
  };
}

export function resetValues() {
  return async (dispatch) => {
    const request = await axios.get("http://localhost:5000/reset");
    const { players } = await request.data;
    dispatch(updatePlayers(players));
  };
}

export function incrementValue(id) {
  return async (dispatch) => {
    const request = await axios.get(`http://localhost:5000/increment/${id}`);
    const { players } = await request.data;
    dispatch(updatePlayers(players));
  };
}

export function decrementValue(id) {
  return async (dispatch) => {
    const request = await axios.get(`http://localhost:5000/decrement/${id}`);
    const { players } = await request.data;
    dispatch(updatePlayers(players));
  };
}

export function updatePlayers(players) {
  console.log("Players updated!?!");
  return {
    type: UPDATED_PLAYERS,
    payload: { players },
  };
}
