/* global describe:false, it:false, expect:false, sinon:false */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Typing from '../../app/components/Typing';

describe('Typing', () => {
  const Wrapper = React.createClass({
    render() {
      return (<div>{this.props.children}</div>);
    }
  });

  const deepRender = (onChange, onSubmit, input, gameStarted) => TestUtils.renderIntoDocument(
    <Wrapper>
      <Typing onChange={onChange} onSubmit={onSubmit} input={input} gameStarted={gameStarted} />
    </Wrapper>);

  it('should disable input if game is not started', () => {
    const onChange = sinon.stub();
    const onSubmit = sinon.stub();
    const typing = deepRender(onChange, onSubmit, 'word', false);
    const input = TestUtils.findRenderedDOMComponentWithTag(typing, 'input');
    expect(input.disabled).to.be.true;
  });

  it('should enable input if game is started', () => {
    const onChange = sinon.stub();
    const onSubmit = sinon.stub();
    const typing = deepRender(onChange, onSubmit, 'word', true);
    const input = TestUtils.findRenderedDOMComponentWithTag(typing, 'input');
    expect(input.disabled).to.be.false;
  });

  it('should display current input value', () => {
    const onChange = sinon.stub();
    const onSubmit = sinon.stub();
    const typing = deepRender(onChange, onSubmit, 'word', true);
    const input = TestUtils.findRenderedDOMComponentWithTag(typing, 'input');
    expect(input.value).to.eql('word');
  });

  it('should call onChange if text input changes', () => {
    const onChange = sinon.stub();
    const onSubmit = sinon.stub();
    const typing = deepRender(onChange, onSubmit, 'word', true);
    const input = TestUtils.findRenderedDOMComponentWithTag(typing, 'input');

    TestUtils.Simulate.change(input, { target: { value: 'text' } });
    expect(onChange).to.have.been.calledWith('text');
  });

  it('should call only onSubmit if typing a space', () => {
    const onChange = sinon.stub();
    const onSubmit = sinon.stub();
    const typing = deepRender(onChange, onSubmit, 'word', true);
    const input = TestUtils.findRenderedDOMComponentWithTag(typing, 'input');

    TestUtils.Simulate.keyDown(input, { key: ' ' });
    expect(onSubmit).to.have.been.calledWith('word');
    expect(onChange).to.not.have.been.called;
  });
});
