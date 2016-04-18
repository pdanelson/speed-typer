/* global describe:false, it:false, expect:false */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SpeedTyper from '../../app/components/SpeedTyper';

describe('SpeedTyper', () => {
  const shallowRender = () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<SpeedTyper />);
    return renderer.getRenderOutput();
  };

  it('should render HighscoresContainer', () => {
    const speedTyper = shallowRender();
    const highscoresContainer = speedTyper.props.children[0];
    expect(highscoresContainer.type.displayName).to.eql('Connect(Highscores)');
  });

  it('should render StatisticsContainer', () => {
    const speedTyper = shallowRender();
    const statsContainer = speedTyper.props.children[1];
    expect(statsContainer.type.displayName).to.eql('Connect(Statistics)');
  });

  it('should render WordsContainer', () => {
    const speedTyper = shallowRender();
    const wordsContainer = speedTyper.props.children[2];
    expect(wordsContainer.type.displayName).to.eql('Connect(Words)');
  });

  it('should render TypingContainer', () => {
    const speedTyper = shallowRender();
    const wordsContainer = speedTyper.props.children[3];
    expect(wordsContainer.type.displayName).to.eql('Connect(Typing)');
  });

  it('should render ButtonsContainer', () => {
    const speedTyper = shallowRender();
    const buttonsContainer = speedTyper.props.children[4];
    expect(buttonsContainer.type.displayName).to.eql('Connect(Buttons)');
  });
});
