import { fetchWords, fetchWordsSuccess, fetchWordsFailure } from './WordsActions';
import { startTimer } from './TimerActions';
import { START_GAME, STOP_GAME } from '../constants/ButtonsActionType';

export const startGame = () =>
  (dispatch, getState) => {
    if (getState().words.fetching) {
      return;
    }
    dispatch({ type: START_GAME });
    dispatch(fetchWords())
      .then(json => {
        dispatch(fetchWordsSuccess(json));
        dispatch(startTimer());
      }, ex => dispatch(fetchWordsFailure(ex))
    );
  };

export const stopGame = (wpm, accuracy) => ({
  type: STOP_GAME,
  payload: { wpm, accuracy }
});
