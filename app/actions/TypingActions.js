import { CHANGE_INPUT, SUBMIT_INPUT } from '../constants/TypingActionType';

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  payload: input
});

export const submitInput = () => ({
  type: SUBMIT_INPUT
});
