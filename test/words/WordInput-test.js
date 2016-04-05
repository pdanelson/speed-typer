/* global describe:false, it:false, expect:false, sinon:false */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import WordInput from '../../app/components/words/WordInput';

describe('WordInput', () => {
  const deepRender = (onChange, onSubmit) => TestUtils.renderIntoDocument(
    <WordInput onChange={onChange} onSubmit={onSubmit} />);

  it('should update state and call onChange if text input changes', () => {
    const onChange = sinon.stub();
    const onSubmit = sinon.stub();
    const wordInput = deepRender(onChange, onSubmit);
    const input = TestUtils.findRenderedDOMComponentWithTag(wordInput, 'input');

    TestUtils.Simulate.change(input, { target: { value: 'text' } });
    expect(input.value).to.eql('text');
    expect(wordInput.state).to.have.property('input').which.eql('text');
    expect(onChange).to.have.been.calledWith('text');
  });

  it('should clear state and call onSubmit if typing a space', () => {
    const onChange = sinon.stub();
    const onSubmit = sinon.stub();
    const wordInput = deepRender(onChange, onSubmit);
    wordInput.setState({ input: 'text' });
    const input = TestUtils.findRenderedDOMComponentWithTag(wordInput, 'input');

    TestUtils.Simulate.keyDown(input, { key: ' ' });
    expect(wordInput.state).to.have.property('input').which.eql('');
    expect(onSubmit).to.have.been.calledOnce;
  });
});
