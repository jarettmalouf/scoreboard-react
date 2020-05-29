import { UPDATED_PLAYERS } from "../3-actions/playersActions";

export function playersReducer(state, { type, payload }) {
  switch (type) {
    case UPDATED_PLAYERS:
      return { ...state, players: payload.players };
    default:
      return state;
  }
}
