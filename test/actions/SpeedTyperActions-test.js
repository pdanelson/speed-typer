/* global describe:false, context:false, it:false, before:false, after:false, expect:false, sinon:false */
import { changeInput, submitInput } from '../../app/actions/SpeedTyperActions';

describe('SpeedTyperActions', () => {
  it('changeInput should create INPUT_CHANGED action with payload', () => {
    expect(changeInput('dist')).to.eql({
      type: 'INPUT_CHANGED',
      payload: 'dist'
    });
  });

  it('submitInput should create INPUT_SUBMITTED action', () => {
    expect(submitInput()).to.eql({
      type: 'INPUT_SUBMITTED'
    });
  });
});
