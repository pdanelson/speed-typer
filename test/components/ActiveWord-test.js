/* global describe:false, it:false, expect:false */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ActiveWord from '../../app/components/ActiveWord';

describe('ActiveWord', () => {
  const shallowRender = letters => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<ActiveWord letters={letters} />);
    return renderer.getRenderOutput();
  };

  it('should render ActiveLetter components2 and a space', () => {
    const activeWord = shallowRender([
      { letter: 'A', correct: true },
      { letter: 'B', correct: false },
      { letter: 'C' }
    ]);
    expect(activeWord.props.children[1]).to.eql(' ');
    const letters = activeWord.props.children[0];
    expect(letters).to.have.length(3);
    expect(letters[0].props.letter).to.eql({ letter: 'A', correct: true });
    expect(letters[1].props.letter).to.eql({ letter: 'B', correct: false });
    expect(letters[2].props.letter).to.eql({ letter: 'C' });
  });
});
