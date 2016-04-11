/* global describe:false, it:false, expect:false */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SpeedTyper from '../../app/containers/SpeedTyper';

describe('SpeedTyper', () => {
  const shallowRender = () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<SpeedTyper />);
    return renderer.getRenderOutput();
  };

  const deepRender = () => TestUtils.renderIntoDocument(<SpeedTyper />);

  it('should render StatisticsContainer', () => {
    const speedTyper = shallowRender();
    const statsContainer = speedTyper.props.children[0];
    expect(statsContainer.type.name).to.eql('StatisticsContainer');
    expect(statsContainer.props.evaluatedWords).to.eql([]);
  });

  it('should render WordsContainer', () => {
    const speedTyper = shallowRender();
    const wordsContainer = speedTyper.props.children[1];
    expect(wordsContainer.type.name).to.eql('WordsContainer');
    expect(wordsContainer.props.onInputEvaluated).to.be.a('function');
  });

  it('should update state when a word is evaluated', () => {
    const speedTyper = deepRender();
    speedTyper.updateEvaluatedWords({ word: 'word', correct: true });
    expect(speedTyper.state.evaluatedWords).to.eql([{ word: 'word', correct: true }]);
  });
});
