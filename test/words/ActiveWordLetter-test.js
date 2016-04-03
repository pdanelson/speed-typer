import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ActiveWordLetter from '../../app/components/words/ActiveWordLetter';

describe('ActiveWordLetter', () => {
  const buildActiveWordLetter = letter => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<ActiveWordLetter letter={letter} />);
    return renderer.getRenderOutput();
  };

  describe('with unvalidated letter', () => {
    it('should display letter without background color', () => {
      const activeWordLetter = buildActiveWordLetter({ letter: 'a' });
      expect(activeWordLetter.props.children).to.eq('a');
      expect(activeWordLetter.props.style.fontWeight).to.eq('bold');
    });
  });

  describe('with valid letter', () => {
    it('should display letter with "#ADFF2F" background color', () => {
      const activeWordLetter = buildActiveWordLetter({ letter: 'a', correct: true });
      expect(activeWordLetter.props.children).to.eq('a');
      expect(activeWordLetter.props.style.fontWeight).to.eq('bold');
      expect(activeWordLetter.props.style.backgroundColor).to.eq('#ADFF2F');
    });
  });

  describe('with invalid letter', () => {
    it('should display letter with "#FF4500"" background color', () => {
      const activeWordLetter = buildActiveWordLetter({ letter: 'a', correct: false });
      expect(activeWordLetter.props.children).to.eq('a');
      expect(activeWordLetter.props.style.fontWeight).to.eq('bold');
      expect(activeWordLetter.props.style.backgroundColor).to.eq('#FF4500');
    });
  });
});
