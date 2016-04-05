/* global describe:false, it:false, expect:false */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Words from '../../app/components/words/Words';

describe('Words', () => {
  const shallowRender = (activeWord, inactiveWords) => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Words activeWord={activeWord} inactiveWords={inactiveWords} />);
    return renderer.getRenderOutput();
  };

  it('should render ActiveWord component and InactiveWord components', () => {
    const words = shallowRender([
      { letter: 'A', correct: true },
      { letter: 'B', correct: false }
    ], ['word1', 'word2']);

    const activeWord = words.props.children[0];
    expect(activeWord.type.name).to.eql('ActiveWord');
    expect(activeWord.props.letters).to.eql([
      { letter: 'A', correct: true },
      { letter: 'B', correct: false }
    ]);
    const inactiveWords = words.props.children[1];
    expect(inactiveWords).to.have.length(2);
    expect(inactiveWords[0].type.name).to.eql('InactiveWord');
    expect(inactiveWords[0].props.word).to.eql('word1');
    expect(inactiveWords[1].type.name).to.eql('InactiveWord');
    expect(inactiveWords[1].props.word).to.eql('word2');
  });
});
