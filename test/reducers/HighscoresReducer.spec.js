/* global describe:false, it:false expect:false */
import highscoresReducer from '../../app/reducers/HighscoresReducer';
import { STOP_GAME } from '../../app/constants/ButtonsActionType';

describe('HighscoresReducer', () => {
  it('should initialize state', () => {
    expect(highscoresReducer(undefined, {})).to.eql({ wpm: 0, accuracy: 0 });
  });

  it('should handle STOP_GAME', () => {
    expect(highscoresReducer({
      wpm: 20,
      accuracy: 50
    }, {
      type: STOP_GAME,
      payload: {
        wpm: 18,
        accuracy: 75
      }
    })).to.eql({ wpm: 20, accuracy: 75 });
  });
});
