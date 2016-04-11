/* global describe:false, it:false, expect:false, sinon:false */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Typing from '../../app/components/Typing';

describe('Typing', () => {
  const Wrapper = React.createClass({
    render: function () {
      return (<div>{this.props.children}</div>);
    }
  });

  const deepRender = (onChange, onSubmit) => TestUtils.renderIntoDocument(
    <Wrapper><Typing onChange={onChange} onSubmit={onSubmit} /></Wrapper>);

  it('should call onChange if text input changes', () => {
    const onChange = sinon.stub();
    const onSubmit = sinon.stub();
    const wordInput = deepRender(onChange, onSubmit);
    const input = TestUtils.findRenderedDOMComponentWithTag(wordInput, 'input');

    TestUtils.Simulate.change(input, { target: { value: 'text' } });
    expect(onChange).to.have.been.calledWith('text');
  });

  it('should clear state and call onSubmit if typing a space', () => {
    const onChange = sinon.stub();
    const onSubmit = sinon.stub();
    const wordInput = deepRender(onChange, onSubmit);
    const input = TestUtils.findRenderedDOMComponentWithTag(wordInput, 'input');

    TestUtils.Simulate.keyDown(input, { key: ' ' });
    expect(onSubmit).to.have.been.calledOnce;
  });
});
