import React from 'react';
import StatisticsContainer from '../containers/StatisticsContainer';
import WordsContainer from '../containers/WordsContainer';
import TypingContainer from '../containers/TypingContainer';

export default function SpeedTyper() {
  return (
    <div>
      <StatisticsContainer />
      <WordsContainer />
      <TypingContainer />
    </div>
  );
}
