import React, { PropTypes } from 'react';

export default function Target({ word }) {
  return (
    <div>
      Type the word: {word}
    </div>
  );
}

Target.propTypes = {
  word: PropTypes.string.isRequired
};

