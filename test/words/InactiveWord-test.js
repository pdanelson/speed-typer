import React from 'react';
import TestUtils from 'react-addons-test-utils';
import InactiveWord from '../../app/components/words/InactiveWord';

describe('InactiveWord', () => {
  const buildInactiveWord = word => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<InactiveWord word={word} />);
    return renderer.getRenderOutput();
  };

  it('should display word', () => {
    const inactiveWord = buildInactiveWord('word');
    expect(inactiveWord.props.children[0]).to.eq('word');
  });
});
