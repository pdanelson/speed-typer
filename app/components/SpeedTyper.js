import React from 'react';
import HighscoresContainer from '../containers/HighscoresContainer';
import StatisticsContainer from '../containers/StatisticsContainer';
import WordsContainer from '../containers/WordsContainer';
import TypingContainer from '../containers/TypingContainer';
import ButtonsContainer from '../containers/ButtonsContainer';

export default function SpeedTyper() {
  return (
    <div>
      <HighscoresContainer />
      <StatisticsContainer />
      <WordsContainer />
      <TypingContainer />
      <ButtonsContainer />
    </div>
  );
}
