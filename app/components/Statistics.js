import React, { PropTypes } from 'react';

export default function Statistics({ typedCount, wpm, accuracy }) {
  return (
    <div>
      <div>{'Words typed: '.concat(typedCount)}</div>
      <div>{'Words per minute: '.concat(wpm)}</div>
      <div>{'Accuracy: '.concat(accuracy).concat('%')}</div>
    </div>
  );
}

Statistics.propTypes = {
  typedCount: PropTypes.number.isRequired,
  wpm: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired
};
