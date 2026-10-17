// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

function findSmallestInt(arr) {
  return arr.reduce((a, c) => a = Math.min(a, c))
}
