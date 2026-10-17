// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  return arr.reduce((a, c) => a += c > 0 ? c : 0, 0)
}
