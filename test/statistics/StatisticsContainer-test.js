/* global describe:false, it:false, expect:false, sinon:false */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import StatisticsContainer from '../../app/components/statistics/StatisticsContainer';

describe('StatisticsContainer', () => {
  const shallowRender = evaluatedWords => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<StatisticsContainer evaluatedWords={evaluatedWords} />);
    return renderer.getRenderOutput();
  };

  const deepRender = evaluatedWords => TestUtils.renderIntoDocument(
    <StatisticsContainer evaluatedWords={evaluatedWords} />);

  it('should render words typed statistic', () => {
    const statisticsContainer = shallowRender([
      { word: 'word1', correct: true },
      { word: 'word2', correct: false }
    ]);
    const wordsTypedStat = statisticsContainer.props.children[0];
    expect(wordsTypedStat.type.name).to.eql('Statistic');
    expect(wordsTypedStat.props.name).to.eql('Words typed');
    expect(wordsTypedStat.props.value).to.eql('2');
  });

  it('should render words per minute statistic', () => {
    const statisticsContainer = shallowRender([
      { word: 'word1', correct: true },
      { word: 'word2', correct: false }
    ]);
    const wpmStat = statisticsContainer.props.children[1];
    expect(wpmStat.type.name).to.eql('Statistic');
    expect(wpmStat.props.name).to.eql('Words per minute');
    expect(wpmStat.props.value).to.exist;
  });

  it('should render accuracy statistic', () => {
    const statisticsContainer = shallowRender([
      { word: 'word1', correct: true },
      { word: 'word2', correct: false }
    ]);
    const accStat = statisticsContainer.props.children[2];
    expect(accStat.type.name).to.eq('Statistic');
    expect(accStat.props.name).to.eq('Accuracy');
    expect(accStat.props.value).to.eq('50%');
  });

  it('should initialize start time and use it to calculate words per minute', () => {
    const clock = sinon.useFakeTimers(Date.now());
    const statContainer = deepRender([
      { word: 'word1', correct: true },
      { word: 'word2', correct: false }
    ]);
    expect(statContainer.state).to.have.property('startTime').which.eql(clock.now);
    clock.tick(6000);
    expect(statContainer.calculateWordsPerMinute()).to.eq(20);
    clock.reset();
  });
});
