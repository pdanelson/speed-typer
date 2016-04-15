/* global describe:false, it:false, expect:false */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import Statistics from '../../app/components/Statistics';

describe('Statistics', () => {
  const shallowRender = (typedCount, wpm, accuracy) => {
    const renderer = createRenderer();
    renderer.render(<Statistics typedCount={typedCount} wpm={wpm} accuracy={accuracy} />);
    return renderer.getRenderOutput();
  };

  it('should correctly display number of typed words', () => {
    const statistic = shallowRender(2, 20, 50);
    expect(statistic.props.children[0].props.children).to.eql('Words typed: 2');
  });

  it('should correctly display words per minute', () => {
    const statistic = shallowRender(2, 20, 50);
    expect(statistic.props.children[1].props.children).to.eql('Words per minute: 20');
  });

  it('should correctly display accuracy', () => {
    const statistic = shallowRender(2, 20, 50);
    expect(statistic.props.children[2].props.children).to.eql('Accuracy: 50%');
  });
});
