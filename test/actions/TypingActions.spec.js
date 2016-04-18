/* global describe:false, it:false, expect:false */
import { changeInput, submitInput } from '../../app/actions/TypingActions';
import { CHANGE_INPUT, SUBMIT_INPUT } from '../../app/constants/TypingActionType';

describe('TypingActions', () => {
  it('changeInput should create CHANGE_INPUT action', () => {
    expect(changeInput('dist')).to.eql({
      type: CHANGE_INPUT,
      payload: 'dist'
    });
  });

  it('submitInput should create SUBMIT_INPUT action', () => {
    expect(submitInput('dist')).to.eql({
      type: SUBMIT_INPUT,
      payload: 'dist'
    });
  });
});
