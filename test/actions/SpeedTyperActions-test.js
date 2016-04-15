/* global describe:false, context:false, it:false, before:false, after:false, expect:false, sinon:false */
import { changeInput, submitInput } from '../../app/actions/TypingActions';
import { CHANGE_INPUT, SUBMIT_INPUT } from '../../app/constants/TypingActionType';

describe('SpeedTyperActions', () => {
  it('changeInput should create CHANGE_INPUT action with payload', () => {
    expect(changeInput('dist')).to.eql({
      type: CHANGE_INPUT,
      payload: 'dist'
    });
  });

  it('submitInput should create SUBMIT_INPUT action', () => {
    expect(submitInput()).to.eql({
      type: SUBMIT_INPUT
    });
  });
});
