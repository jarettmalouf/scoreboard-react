export const PLAYERS_RESET_VALUES = "players:resetValues";
export const PLAYER_INCREMENT_VALUE = "player:incrementValue";
export const PLAYER_DECREMENT_VALUE = "player:decrementValue";
export const UPDATED_PLAYERS = "players:updatedPlayers";

export function resetValues() {
  return (dispatch, getState) => {
    const state = getState();
    const newPlayers = [...state.players];
    newPlayers.map((player) => (player.value = 0));
    dispatch(updatePlayers(newPlayers));
  };
}

export function incrementValue(id) {
  return (dispatch, getState) => {
    const state = getState();
    const newPlayers = [...state.players];
    const playerToIncrement = newPlayers.find((player) => player.id === id);
    playerToIncrement.value++;
    dispatch(updatePlayers(newPlayers));
  };
}

export function decrementValue(id) {
  return (dispatch, getState) => {
    const state = getState();
    const newPlayers = [...state.players];
    const playerToDecrement = newPlayers.find((player) => player.id === id);
    if (playerToDecrement.value > 0) {
      playerToDecrement.value--;
    }
    dispatch(updatePlayers(newPlayers));
  };
}

export function updatePlayers(players) {
  console.log("Players updated!?!");
  return {
    type: UPDATED_PLAYERS,
    payload: { players },
  };
}
