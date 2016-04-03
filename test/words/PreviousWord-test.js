import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PreviousWord from '../../app/components/words/PreviousWord';

describe('InactiveWord', () => {
  const buildPreviousWord = word => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<PreviousWord word={word} />);
    return renderer.getRenderOutput();
  };

  describe('with valid previous word', () => {
    it('should display regular word', () => {
      const previousWord = buildPreviousWord({ word: 'word', correct: true });
      expect(previousWord.props.children[0]).to.eq('Previously typed word: ');
    });
  });

  describe('with invalid previous word', () => {
    it('should display striked word', () => {
      const previousWord = buildPreviousWord({ word: 'word', correct: false });
      expect(previousWord.props.children[0]).to.eq('Previously typed word: ');
    });
  });
});