import React, { PropTypes } from 'react';

export default function InactiveWord({ word }) {
  return (
    <span>{word}&nbsp;</span>
  );
}

InactiveWord.propTypes = {
  word: PropTypes.string.isRequired
};
