export function selectAccuracy(state) {
  const correctWords = state.words.evaluated.filter(word => word.correct);
  return Math.round(correctWords.length / state.words.evaluated.length * 10000) / 100 || 0;
}

export function selectWpm(state) {
  const elapsedMinutes = state.timer.seconds / 60;
  return Math.round(state.words.evaluated.length / elapsedMinutes * 100) / 100 || 0;
}

export function selectTypedCount(state) {
  return state.words.evaluated.length;
}
