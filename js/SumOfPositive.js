function positiveSum(arr) {
  return arr.reduce((a, c) => a += c > 0 ? c : 0, 0)
}
