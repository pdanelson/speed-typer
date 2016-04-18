/* global describe:false, it:false, expect:false */
import { fetchWords, fetchWordsFailure, fetchWordsRequest, fetchWordsSuccess } from '../../app/actions/WordsActions';
import { FETCH_WORDS_FAILURE, FETCH_WORDS_REQUEST, FETCH_WORDS_SUCCESS } from '../../app/constants/WordsActionType';

describe('TypingActions', () => {
  it('fetchWordsRequest should create FETCH_WORDS_REQUEST action', () => {
    expect(fetchWordsRequest()).to.eql({
      type: FETCH_WORDS_REQUEST
    });
  });

  it('fetchWordsSuccess should create FETCH_WORDS_SUCCESS action', () => {
    expect(fetchWordsSuccess(['word1', 'word2'])).to.eql({
      type: FETCH_WORDS_SUCCESS,
      payload: ['word1', 'word2']
    });
  });

  it('fetchWordsFailure should create FETCH_WORDS_FAILURE action', () => {
    expect(fetchWordsFailure('error')).to.eql({
      type: FETCH_WORDS_FAILURE,
      error: 'error'
    });
  });
});
