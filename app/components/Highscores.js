import React, { PropTypes } from 'react';

export default function Highscores({ wpm, accuracy }) {
  return (
    <div>
      <div>{'Best words per minute: '.concat(wpm)}</div>
      <div>{'Best accuracy: '.concat(accuracy).concat('%')}</div>
    </div>
  );
}

Highscores.propTypes = {
  wpm: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired
};
