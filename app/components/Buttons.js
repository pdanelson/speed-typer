import React, { PropTypes } from 'react';

export default function Buttons({ gameStarted, wpm, accuracy, onStart, onStop }) {
  const handleStop = () => {
    onStop(wpm, accuracy);
  };

  return (
    <div>
      {!gameStarted ? <button onClick={onStart}>Start game</button> : null}
      {gameStarted ? <button onClick={handleStop}>Stop game</button> : null}
    </div>
  );
}

Buttons.propTypes = {
  gameStarted: PropTypes.bool.isRequired,
  wpm: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired
};
