import { STOP_GAME } from '../constants/ButtonsActionType';

export default function HighscoresReducer(state = { wpm: 0, accuracy: 0 }, action) {
  switch (action.type) {
    case STOP_GAME:
      return {
        wpm: Math.max(action.payload.wpm, state.wpm),
        accuracy: Math.max(action.payload.accuracy, state.accuracy)
      };
    default:
      return state;
  }
}
