// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  // The first and last index of a unique item will be the same
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
