/* global describe:false, context:false, it:false, before:false, after:false, expect:false, sinon:false */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import WordsContainer from '../../app/components/words/WordsContainer';
import Lodash from 'lodash';

describe('WordsContainer', () => {
  const shallowRender = onInputEvaluated => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<WordsContainer onInputEvaluated={onInputEvaluated} />);
    return renderer.getRenderOutput();
  };

  const deepRender = onInputEvaluated => TestUtils.renderIntoDocument(
    <WordsContainer onInputEvaluated={onInputEvaluated} />);

  before(() => {
    sinon.stub(Lodash, 'sample', (collection) => collection[0]);
    sinon.stub(Lodash, 'sampleSize', (collection, nr) => collection.slice(1, nr + 1));
  });

  after(() => {
    Lodash.sample.restore();
    Lodash.sampleSize.restore();
  });

  it('should render PreviousWord component', () => {
    const wordsContainer = shallowRender(() => {});
    const previousWord = wordsContainer.props.children[0];
    expect(previousWord.type.name).to.eq('PreviousWord');
    expect(previousWord.props.word).to.eql({ word: '', correct: true });
  });

  it('should render Words component', () => {
    const wordsContainer = shallowRender(() => {});
    const words = wordsContainer.props.children[1];
    expect(words.type.name).to.eq('Words');
    expect(words.props.activeWord).to.eql([{ letter: 'd' }, { letter: 'i' },
      { letter: 's' }, { letter: 't' }, { letter: 'u' }, { letter: 'r' }, { letter: 'b' }]);
    expect(words.props.inactiveWords).to.eql(['hexagon', 'development', 'inexplosive',
      'fashionably', 'laniferous']);
  });

  it('should render WordInput component', () => {
    const wordsContainer = shallowRender(() => {});
    const wordInput = wordsContainer.props.children[2];
    expect(wordInput.type.name).to.eq('WordInput');
    expect(wordInput.props.onChange).to.be.a('function');
    expect(wordInput.props.onSubmit).to.be.a('function');
  });

  context('when handleChange callback is triggered', () => {
    it('should evaluate the active word and update state', () => {
      const wordsContainer = deepRender(() => {});
      expect(wordsContainer.state.activeWord).to.eql([{ letter: 'd' }, { letter: 'i' },
        { letter: 's' }, { letter: 't' }, { letter: 'u' }, { letter: 'r' }, { letter: 'b' }]);
      wordsContainer.handleChange('dir');
      expect(wordsContainer.state.activeWord).to.eql([{ letter: 'd', correct: true },
        { letter: 'i', correct: true }, { letter: 's', correct: false },
        { letter: 't' }, { letter: 'u' }, { letter: 'r' }, { letter: 'b' }]);
    });
  });

  context('when handleSubmit callback is triggered', () => {
    it('should evaluate active word, update state and call onInputEvaluated', () => {
      const onInputEvaluated = sinon.stub();
      const wordsContainer = deepRender(onInputEvaluated);
      expect(wordsContainer.state.activeWord).to.eql([{ letter: 'd' }, { letter: 'i' },
        { letter: 's' }, { letter: 't' }, { letter: 'u' }, { letter: 'r' }, { letter: 'b' }]);
      expect(wordsContainer.state.inactiveWords).to.eql(['hexagon', 'development', 'inexplosive',
        'fashionably', 'laniferous']);
      expect(wordsContainer.state.previousWord).to.eql({ word: '', correct: true });

      wordsContainer.handleSubmit();
      expect(wordsContainer.state.activeWord).to.eql([{ letter: 'h' }, { letter: 'e' },
        { letter: 'x' }, { letter: 'a' }, { letter: 'g' }, { letter: 'o' }, { letter: 'n' }]);
      expect(wordsContainer.state.inactiveWords).to.eql(['development',
        'inexplosive', 'fashionably', 'laniferous', 'disturb']);
      expect(wordsContainer.state.previousWord).to.eql({ word: 'disturb', correct: false });
      expect(onInputEvaluated).to.have.been.calledWith({ word: 'disturb', correct: false });
    });
  });
});
