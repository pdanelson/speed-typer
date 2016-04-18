/* global describe:false, it:false, expect:false */
import { startGame, stopGame } from '../../app/actions/ButtonsActions';
import { START_GAME, STOP_GAME } from '../../app/constants/ButtonsActionType';

describe('ButtonsActions', () => {
  it('stopGame should create STOP_GAME action', () => {
    expect(stopGame(20, 50)).to.eql({
      type: STOP_GAME,
      payload: {
        wpm: 20,
        accuracy: 50
      }
    });
  });
});
