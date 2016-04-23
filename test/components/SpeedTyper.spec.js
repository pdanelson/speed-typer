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

  it('should render Header with "You"', () => {
    const speedTyper = shallowRender();
    const header = speedTyper.props.children[0];
    expect(header.type).to.eql('h2');
    expect(header.props.children).to.eql('You');
  });

  it('should render HighscoresContainer', () => {
    const speedTyper = shallowRender();
    const highscoresContainer = speedTyper.props.children[1];
    expect(highscoresContainer.type.displayName).to.eql('Connect(Highscores)');
  });

  it('should render StatisticsContainer', () => {
    const speedTyper = shallowRender();
    const statsContainer = speedTyper.props.children[2];
    expect(statsContainer.type.displayName).to.eql('Connect(Statistics)');
  });

  it('should render WordsContainer', () => {
    const speedTyper = shallowRender();
    const wordsContainer = speedTyper.props.children[3];
    expect(wordsContainer.type.displayName).to.eql('Connect(Words)');
  });

  it('should render TypingContainer', () => {
    const speedTyper = shallowRender();
    const wordsContainer = speedTyper.props.children[4];
    expect(wordsContainer.type.displayName).to.eql('Connect(Typing)');
  });

  it('should render ButtonsContainer', () => {
    const speedTyper = shallowRender();
    const buttonsContainer = speedTyper.props.children[5];
    expect(buttonsContainer.type.displayName).to.eql('Connect(Buttons)');
  });

  it('should render Header with "Opponent"', () => {
    const speedTyper = shallowRender();
    const header = speedTyper.props.children[6];
    expect(header.type).to.eql('h2');
    expect(header.props.children).to.eql('Opponent');
  });

  it('should render OpponentContainer', () => {
    const speedTyper = shallowRender();
    const opponentContainer = speedTyper.props.children[7];
    expect(opponentContainer.type.displayName).to.eql('Connect(Opponent)');
  });
});
