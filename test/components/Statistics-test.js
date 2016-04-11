/* global describe:false, it:false, expect:false, sinon:false */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import Statistics from '../../app/components/Statistics';

describe('Statistics', () => {
  const shallowRender = (evaluatedWords, startTime) => {
    const renderer = createRenderer();
    renderer.render(<Statistics evaluatedWords={evaluatedWords} startTime={startTime} />);
    return renderer.getRenderOutput();
  };

  it('should correctly display number of typed words', () => {
    const statistic = shallowRender([
      { word: 'word1', correct: true },
      { word: 'word2', correct: false }
    ], 0);
    expect(statistic.props.children[0].props.children).to.eql('Words typed: 2');
  });

  it('should correctly display words per minute', () => {
    const now = Date.now();
    const clock = sinon.useFakeTimers(now);
    clock.tick(6000);
    const statistic = shallowRender([
      { word: 'word1', correct: true },
      { word: 'word2', correct: false }
    ], now);
    expect(statistic.props.children[1].props.children).to.eql('Words per minute: 20');
    clock.reset();
  });

  it('should correctly display accuracy', () => {
    const statistic = shallowRender([
      { word: 'word1', correct: true },
      { word: 'word2', correct: false }
    ], 0);
    expect(statistic.props.children[2].props.children).to.eql('Accuracy: 50%');
  });
});
